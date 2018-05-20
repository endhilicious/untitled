<?php

namespace App\Http\Controllers;

use BotMan\BotMan\BotMan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Conversations\ExampleConversation;
use Scrapper;
// use App\Providers\Scrapper;;

class BotManController extends Controller
{
    /**
     * Place your BotMan logic here.
     */
    public function handle()
    {
        $botman = app('botman');
        $botman->hears('{data}', function ($bot , $data) {


          // bagiannya army
    $bank_data = DB::table('bank_data')->get();
    $data_kata_tot = [];
		$kata_singkat = [];
		$kata_tdk_singkat = [];
		$dimasukkan_ke_singkat = false;
		$dimasukkan_ke_tdk_singkat = false;
		$hitung = 1;

		$hasil  = explode(' ', $data);
	 	for ($i=0; $i < count($hasil); $i++) {
		 	foreach ($bank_data as $dbs) {
		 		if ($dbs->kalimat_singkat == $hasil[$i]) {
		 			if ($dimasukkan_ke_tdk_singkat == true) {
		 				array_pop($kata_tdk_singkat);
		 			}
		 			array_push($kata_singkat, $dbs->kalimat_tdk_singkat);
		 			$dimasukkan_ke_singkat = true;
		 		}else{
		 			if ($dimasukkan_ke_singkat == false) {
		 				if ($dimasukkan_ke_tdk_singkat == false) {
		 					array_push($kata_tdk_singkat, $hasil[$i]);
		 					$dimasukkan_ke_tdk_singkat = true;
		 				}
		 			}
		 		}

		 		if ($hitung == count($bank_data)) {
		 			$dimasukkan_ke_tdk_singkat = false;
		 			$dimasukkan_ke_singkat = false;
		 			$hitung = 1;
		 		}else{
		 			$hitung++;
		 		}
		 	}
	 	}
    for ($i=0; $i < count($kata_singkat); $i++) {
      array_push($data_kata_tot , $kata_singkat[$i] );
    }
    for ($a=0; $a < count($kata_tdk_singkat); $a++) {
      array_push($data_kata_tot , $kata_tdk_singkat[$a] );
    }

          // end bagiannya army

          // $data_array = explode(' ' , $data_kata_tot);
          $status = false;
          $angka=0;
          $poin=0;
          $pilihan = [];
          $pilihan_crawl = [];


          if (!empty($data_kata_tot)) {

            $hasils = DB::table('tanyajawab')->get();
            if ($hasils !== null && $hasils !== '' && $hasils->count() > 0 ) {
              foreach ($hasils as $hasil) {
                for ($i=0; $i < count($data_kata_tot); $i++) {
                  // nanti dicocokkan untuk kalimat singkatnya, jangan pakai strpos
                  if (strstr($hasil->tanya , $data_kata_tot[$i]) !== false) {
                      $poin++;
                  }
                }
                if ($poin > 0) {
                  // disini dihitung tf-idfnya
                  $tf = $poin/count($data_kata_tot);
                  $idf = log10(count($hasils)/$poin);
                  $tf_idf = $tf*$idf;
                  $pilihan[] = array($hasil->id , $tf_idf , $hasil->jawab);
                  $angka++;
                }else{
                  $data_pilihan = 'kosong';
                }

                $poin = 0;
              }
              // disini nanti di sorting;
              if (sizeof($pilihan) > 1) {

                for ($i=0; $i < sizeof($pilihan); $i++) {
                  // $bot->reply('iterasi ke '.($i+1));
                  for ($j=0; $j < (sizeof($pilihan) - 1); $j++) {
                    if ($pilihan[$j][1] < $pilihan[$j+1][1]) {
                      $temp1 = $pilihan[$j+1][1];
                      $pilihan[$j+1][1] = $pilihan[$j][1];
                      $pilihan[$j][1] = $temp1;

                      $temp2 = $pilihan[$j+1][0];
                      $pilihan[$j+1][0] = $pilihan[$j][0];
                      $pilihan[$j][0] = $temp2;

                      $temp3 = $pilihan[$j+1][2];
                      $pilihan[$j+1][2] = $pilihan[$j][2];
                      $pilihan[$j][2] = $temp3;

                    }
                  }
                  // ini hanya untuk debuggin
                  // for ($k=0; $k < sizeof($pilihan); $k++) {
                  //   $bot->reply((string)$pilihan[$k][1]);
                  // }
                    // $bot->reply($pilihan[0][1]);
                }
                // $bot->reply('yang benar di bagian ti-idf'.$pilihan[0][1].' dengan jawaban '.$pilihan[0][2]);
                $bot->reply($pilihan[0][2]);
              }
              if (empty($pilihan)) {
                // $bot->reply((string)$data_pilihan);

            	  $crawler = Scrapper::request('GET', 'http://localhost/belajaronlineku/forum/');
            	  $url = $crawler->filter('li.list_pertanyaan')->each(function($node) {

            	  	$pertanyaan =  $node->filter('p.pertanyaan')->text();
                  $jawaban =  $node->filter('p.jawaban')->text();
                  $pilihan_crawl[] = array($pertanyaan , $jawaban);
            	  	return [
            	  		'pertanyaan' => $pertanyaan,
              	  	'jawaban' => $jawaban
            	  	];
                });
                  $bot->reply((string)$url[0]['jawaban']);
              }

                // $bot->reply('jadi yang tadinya = '.$tes1.' & '.$tes2.' menjadi '.$pilihan[0][1].' & '.$pilihan[1][1].' dann yang tadinya jawabannya'.$tes1_j.' & '.$tes2_j.' menjadi '.$pilihan[0][0].' & '.$pilihan[1][0]);


            }else{
              $bot->reply('disini nanti crawling browws');
            }

          }
        });

        $botman->listen();
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function tinker()
    {
        return view('tinker');
    }
    public function craling()
    {
        $crawler = Scrapper::request('GET', 'http://malesbanget.com/');
        $url = $crawler->filter('div.wrapleft ul.middleContent > li')
                                ->each(function($node) {
         $title = $node->filter('div.details h3 > a')
                                ->extract(array('_text', 'href'));
         $img = $node->filter('div.thumbContainer img')->attr('src');
         return [
          'title' => $title[0][0],
          'link' => $title[0][1],
          'image' => $img,
         ];
        });
      return response($url);
    }

    /**
     * Loaded through routes/botman.php
     * @param  BotMan $bot
     */
    public function startConversation(BotMan $bot)
    {
        $bot->startConversation(new ExampleConversation());
    }
}
