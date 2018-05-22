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
          if (strstr('halo|halooo|hai|hei|haihai|assalamualaikum|tes|tesss|teesss' , $data) !== FALSE) {
            $a=array(
              "hai, selamat datang di aidu, ada yang bisa kami bantu ?",
              "selamat datang , ada yang ingin saya bantu ?",
            );
            $rand_answer_a=array_rand($a , 1);
            $bot->reply($a[$rand_answer_a]);
          }elseif (strstr($data , 'bertanya') || strstr($data , 'tanya')) {
            $b=array(
              "silahkan bertanya di saya, saya harap saya bisa menjawab pertanyaan anda terkait perlajaran yaahh ^_^",
              "oke , silahkan tanyakan pelajaran yang mau di tanyakan ",
            );
            $rand_answer_b=array_rand($b , 1);
            $bot->reply($b[$rand_answer_b]);
          }elseif (strstr($data , 'terima kasih') || strstr('thank|thanks|arigato' , $data)) {
            $b=array(
              "sama-sama , saya sangat senang membantu kalian",
              "iya, senang bisa membantu anda",
            );
            $rand_answer_b=array_rand($b , 1);
            $bot->reply($b[$rand_answer_b]);
          }else{




                // bagiannya army
          $bank_data = DB::table('bank_data')->get();
          $data_kata_tot = [];
          $data_kata_tot1 = [];
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
            array_push($data_kata_tot1 , $kata_singkat[$i] );
          }
          for ($a=0; $a < count($kata_tdk_singkat); $a++) {
            array_push($data_kata_tot , $kata_tdk_singkat[$a] );
            array_push($data_kata_tot1 , $kata_tdk_singkat[$a] );
          }

          // end bagiannya army

          // $data_array = explode(' ' , $data_kata_tot);
          $status = false;
          $angka=0;
          $poin=0;
          $kemunculanDiDokumen = 0;
          $kemunculanKataDiDokumen = [];
          $pilihan = [];
          $pilihan_crawl = [];
          $tfKemunculan = [];
          $tfKemunculanAll = [];
          $pembobotanTFIDF = 0;



          if (count($data_kata_tot1) > 1) {

            $hasils = DB::table('tanyajawab')->get();
            $hasils_2 = DB::table('tanyajawab')->get();
            if ($hasils !== null && $hasils !== '' && $hasils->count() > 0 ) {

                // tambahan
                $apakahTelahMasuk = false;
                $nomorHasils3 = 0;
              foreach ($hasils as $hasil) {

                for ($i=0; $i < count($data_kata_tot1); $i++) {

                  if (strstr($hasil->tanya , $data_kata_tot1[$i]) !== false) {

                    if ($apakahTelahMasuk == false) {

                      if (array_key_exists($data_kata_tot1[$i], $tfKemunculanAll)) {
                        $tfKemunculanAll[$data_kata_tot1[$i]] += 1;
                      }else{
                        $tfKemunculanAll[$data_kata_tot1[$i]] = 1;
                      }
                      $apakahTelahMasuk = true;
                    }
                  }
                  $apakahTelahMasuk = false;
                }
              }


                $nomorHasils2 = 0;
                $nomorHasils2Fix = 0;
                foreach ($hasils_2 as $tambahan) {
                  $tfKemunculan[] = array();
                  for ($j=0; $j < count($data_kata_tot); $j++) {
                    if (strstr($tambahan->tanya , $data_kata_tot[$j]) !== false) {
                      if (array_key_exists($data_kata_tot[$j], $tfKemunculan[$nomorHasils2Fix])) {
                        $tfKemunculan[$nomorHasils2Fix][$data_kata_tot[$j]] += 1;
                      }else{
                        $tfKemunculan[$nomorHasils2Fix][$data_kata_tot[$j]] = 1;
                        $poin++;
                      }
                    }

                    if ($j == count($data_kata_tot)-1) {

                      if (!empty($tfKemunculan[$nomorHasils2Fix])) {
                        for ($o=0; $o < count($data_kata_tot); $o++) {
                          if (array_key_exists($data_kata_tot[$o], $tfKemunculan[$nomorHasils2Fix])) {
                            $tfFix = $tfKemunculan[$nomorHasils2Fix][$data_kata_tot[$o]];
                            $idf = log10(count($hasils)/$tfKemunculanAll[$data_kata_tot[$o]]);
                            $tf_idf = $tfFix*$idf;
                            $pembobotanTFIDF += $tf_idf;
                          }
                        }
                        $pilihan[] = array($tambahan->id , $pembobotanTFIDF , $tambahan->jawab);
                        $pembobotanTFIDF = 0;
                        $nomorHasils2Fix++;
                      }
                    //

                    }
                  }
                  $nomorHasils2++;
                }
              if (sizeof($pilihan) > 1) {
                for ($i=0; $i < sizeof($pilihan); $i++) {
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
                }

                $bot->reply($pilihan[0][2]);
              }
              if (empty($pilihan)) {

            	  $crawler = Scrapper::request('GET', 'http://localhost/belajaronlineku/forum/');
            	  $url = $crawler->filter('li.list_pertanyaan')->each(function($node) {

            	  	$pertanyaan =  $node->filter('p.pertanyaan')->text();
                  $jawaban =  $node->filter('p.jawaban')->text();
                  // $pilihan_crawl[] = array($pertanyaan , $jawaban);
            	  	return [
            	  		'pertanyaan' => $pertanyaan,
              	  	'jawaban' => $jawaban
            	  	];
                });
                // for ($i=0; $i < count($data_kata_tot); $i++) {
                //   if (strstr($pertanyaan , $data_kata_tot[$i])) {
                //     // code...
                //   }
                // }
                  $bot->reply((string)$url[1]['jawaban']);
                  // $bot->reply((string)$data_kata_tot[0]);
              }
            }else{
              $bot->reply('disini nanti crawling browws');
            }

          }else{
            $bot->reply((string)$data_kata_tot[0].' apa yang anda maksud ?');
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
