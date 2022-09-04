<?php

require __DIR__ . '/vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;

use Laminas\Mail;
use Laminas\Mail\Message;
use Laminas\Mime\Message as MimeMessage;
use Laminas\Mime\Mime;
use Laminas\Mime\Part as MimePart;

$request = Request::createFromGlobals();

$request->get('subject');
$subject = $request->get('subject');
$text = $request->request->get('text');

/** @var \Symfony\Component\HttpFoundation\File\UploadedFile */
$file = $request->files->get('file');

$html = new MimePart($text);
$html->type = Mime::TYPE_HTML;
$html->charset = 'utf-8';
$html->encoding = Mime::ENCODING_QUOTEDPRINTABLE;

$body = new MimeMessage();

if ($file) {
  $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
  $newFilename = $originalFilename.'-'.uniqid().'.'.$file->guessExtension();
  $fileDir = __DIR__ . '/uploads';
  
  $file->move($fileDir, $newFilename);
  $filePath = $fileDir . '/' . $newFilename;

  $image = new MimePart(fopen($filePath, 'r'));
  $image->type = 'image/jpeg';
  $image->filename = $newFilename;
  $image->disposition = Mime::DISPOSITION_ATTACHMENT;
  $image->encoding = Mime::ENCODING_BASE64;

  $body->setParts([$html, $image]); 
} else {
  $body->setParts([$html, $html]);
}

$message = new Message();
$message->setBody($body);
$message->addTo('logistica-group@yandex.ru');
$message->setSubject($subject);
$message->setFrom('info@prime-asia.ru', "Prime Asia");

$contentTypeHeader = $message->getHeaders()->get('Content-Type');
$contentTypeHeader->setType('multipart/related');

$transport = new Mail\Transport\Sendmail();
$transport->send($message);

?>