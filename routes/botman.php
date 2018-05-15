<?php
use App\Http\Controllers\BotManController;

$botman = resolve('botman');

// $botman->hears('{data}', function ($bot , $data) {
//   if ($data == 'hi') {
//     $bot->reply('Hello!');
//   }
//   if ($data == 'halo ces') {
//     $bot->reply('Halo juga ces!');
//   }
// });
$botman->hears('apa kabar', function ($bot) {
    $bot->reply('baik baik ji brother');
});
$botman->hears('apakah saya ganteng \?', function ($bot) {
    $bot->reply('tidak hahahahahah');
});
$botman->hears('Start conversation', BotManController::class.'@startConversation');
