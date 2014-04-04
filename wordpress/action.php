<?php
$recherche=$_GET['nom'];
$mots=$_GET['motsclef'];
$options=$_GET['options'];
$options_text = implode($options);
$mots_text = implode($mots);
$res="https://www.google.fr/search?q=site%3A".$options_text;
if($mots_text){
$res=$res."+intitle%3A".$mots_text;
}
if($recherche){
$res=$res."+intext%3A".$recherche;
}
header('Location: '.$res);
exit;
?>