<?php

namespace App\Http\Controllers;

use BotMan\BotMan\BotMan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Conversations\ExampleConversation;

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

          if (!empty($data_kata_tot)) {

            $hasils = DB::table('tanyajawab')->get();

            if ($hasils !== null && $hasils !== '' && $hasils->count() > 0 ) {
              foreach ($hasils as $hasil) {
                for ($i=0; $i < count($data_kata_tot); $i++) {
                  if (strpos($hasil->tanya , $data_kata_tot[$i]) !== false) {
                      $poin++;
                  }
                }
                if ($poin > 0) {
                  $pilihan[] = array($angka , $hasil->id , $poin);
                  $angka++;
                }
                $poin = 0;
              }
              $bot->reply((string)$pilihan[1][2]);
            }else{
              $bot->reply('disini nanti crawling');
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

    /**
     * Loaded through routes/botman.php
     * @param  BotMan $bot
     */
    public function startConversation(BotMan $bot)
    {
        $bot->startConversation(new ExampleConversation());
    }
}
