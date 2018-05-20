<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Scrapper;


class ScrappingController extends Controller
{
    public function index()
    {
    $data = [];
	  $crawler = Scrapper::request('GET', 'http://localhost/belajaronlineku/forum/');
	  $url = $crawler->filter('li.list_pertanyaan')->each(function($node) {

	  	$pertanyaan =  $node->filter('p.pertanyaan')->text();
      $jawaban =  $node->filter('p.jawaban')->text();

	  	return [
	  		'pertanyaan' => $pertanyaan,
  	  	'jawaban' => $jawaban
	  	];
      // request('https://brainly.co.id'.$title , function(err,res,body)
      // {
      //   return [
  	  // 		'title' => 'https://brainly.co.id'
  	  // 	];
      // });
      // $crawler_child = Scrapper::request('GET', 'https://brainly.co.id'.$title[$i]->title);
      // $url_child = $crawler_child->filter('div.brn-question-stream__questions')->each(function($node) {
      //   $title_child =  $node->filter('div.sg-content-box__content > a.sg-text')->attr('href');
      //   return ['title' => $title_child];
      // });
	  });
    // for ($i=0; $i < sizeof($url); $i++) {
    //     $crawler_child = Scrapper::request('GET', 'https://brainly.co.id'.$title[$i]->title);
    //     $url_child = $crawler_child->filter('div.brn-question-stream__questions')->each(function($node) {
    //       $title_child =  $node->filter('div.sg-content-box__content > a.sg-text')->attr('href');
    //       return ['title' => $title_child];
    //     });
    // }

	  return response($url);
    }
}
