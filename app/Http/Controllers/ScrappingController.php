<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Scrapper;


class ScrappingController extends Controller
{
    public function index()
    {
	  $crawler = Scrapper::request('GET', 'https://brainly.co.id/tugas/15866506');
	  $url = $crawler->filter('h1.sg-text--regular')->each(function($node) {
	  	return $node->text();

	  	// $img = $node->filter('div.thumbContainer img')->attr('src');
	  	// return [
	  	// 	'title' => $title[0][0],
	  	// 	'link' => $title[0][1],
	  	// ];
	  });

	  return response($url);
    }
}
