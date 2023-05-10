<?php


print '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">';

//przypisanie wartoĹci do zmiennej site, ktĂłra wyĹwietla zawartoĹÄ Ĺrodka strony


if(preg_match("/(http|ftp|environ)/",$_GET['site'])) { die(); }



?>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pl" lang="pl">
<head>
<script data-ad-client="ca-pub-9389535638184113" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <meta http-equiv="Content-type" content="text/html; charset=ISO-8859-2" />
  <meta name="Description" content="Galeria Malarska Marii Domareckiej zaprasza do zapoznania się z twórczością malarki" />
  <meta name="Keywords" content="obrazy olejne, malarstwo, galeria malarska" />
  <meta name="Author" content="damian.domarecki@gmail.com" />
  <meta name="Generator" content="kED" />
 
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <title>Galeriamalarska</title>

  <link rel="stylesheet" href="style.css " type="text/css" />
</head>

<body>

<div id="topkrawedz">

</div>

<div id="wrapper"><!-- calosc zaczyna sie tutaj -->

<div id="top"><!-- top zaczyna sie tutaj -->
<center>  <a href="index.php"><img src="images/logo2.jpg" alt="logistyka logo" /></a></center></div>
<!-- top konczy sie tutaj -->

<div id="zatop">
<a href="index.php?site=o_mnie" id="linktop"> O Mnie</a>
<a href="index.php?site=kontakt" id="linktop"> | Kontakt</a>

</div>

<div id="content">
	
<div id="lewa"><!-- lewa kolumna zaczyna sie tutaj -->
	
<img src="images/obrazek_lewo_nadmenu.jpg" alt="logistyka" /><br /> 

<ul id="nawigacja">

<li class="current">Zobacz...</li>
<li><a href="index.php?site=kwiaty">Kwiaty</a></li>
<li><a href="index.php?site=martwa_natura">Martwa Natura</a></li>
<li><a href="index.php?site=krajobrazy">Krajobrazy i Architektura</a></li>
<li><a href="index.php?site=surrealistyczne">Surrealistyczne i Abstrakcja</a></li>
<li><a href="index.php?site=inne">Inne</a></li>
<li><a href="index.php?site=akwarele">Akwarele</a></li>
<li><a href="index.php?site=obrazy_slynnych_malarzy">Kopie/Reprodukcje</a></li>
<li><a href="index.php?site=kobiety">Kobiety (różne techniki)</a></li>
<!--
<li><a href="index.php?site=historia_malarstwa">Historia malarstwa</a></li>
<li><a href="index.php?site=malarze">Spis znanych malarzy</a></li> -->
</ul>

</div>
<!-- lewa kolumna konczy sie tutaj -->
	

<!-- srodkowa kolumna zaczyna sie tutaj -->
<div id="srodek" class="clearfix">
   
    
<?php 


//$zmienna1 = $_GET['site'];

if (isset($_GET['site']))
    
{
    $zmienna1 = $_GET['site'];
 //   print $zmienna1;
if($zmienna1!="")
    include ("$zmienna1.php");
}

else  
   print '
   <br/> <br/><br/><br/><br/><i>
   Witam serdecznie na stronie internetowej Galerii Malarskiej i zapraszam do zapoznania się z moją twórczością. </i>
    <br /><br />
	<p class="wierszyk">
	<i>***<br/>
	Czy pamiętacie wyprawę naszą<br/>
	ze sztalugami na plener<br/>
	szkice obrazów gwiazdami gaszą<br/>
	namalowany też baner<br/><br/>
	Tam piękne słonko co rano wstaje<br/>
  zagląda w oczy malarzom<br/>
  tam trawy błyszczą i lśnią ruczaje<br/>
  kwiaty ze sobą też gwarzą<br/><br/>
  To moja radość i moja pasja<br/>
  wędrować razem z poezją<br/>
  malować pejzaż, życia impresja<br/>
  podsumowanie finezją<br/>
	
	
	</i>
	</p>
  <p id="malarstwo">
	<b>Historia malarstwa</b> jest prawie tak samo stara jak historia ludzkości . Rysunek (pierwowzór malarstwa) od zawsze towarzyszył człowiekowi, a przynajmniej od momentu gdy uświadomił sobie drzemiące w nim potrzeby ekspresji. W różnych kręgach kulturowych na przestrzeni wieków malarstwo służyło różnym celom i wykształciło różnorodność tematów oraz technik przekazu. Zawsze też łączyło się z innymi dziedzinami sztuki.
<br/><br/>
Już w starożytności Egipcjanie i Grecy tworzyli wspaniałe freski i obrazy na desce. W średniowieczu rozwinęło się malarstwo religijne, a w Renesansie powstały dzieła znanych artystów, takich jak Leonardo da Vinci czy Rafael. W epoce baroku malarstwo stało się pełne przepychu i przestylizowane, a w XVIII wieku nastał okres rozkwitu malarstwa portretowego. W XIX wieku powstały nowe kierunki artystyczne, takie jak romantyzm czy impresjonizm, a w XX wieku mieliśmy do czynienia z różnymi awangardowymi ruchami, takimi jak abstrakcja czy sztuka konceptualna.
<br/><br/>
Dziś malarstwo jest jedną z najbardziej rozpowszechnionych form sztuki i cieszy się nieustającym zainteresowaniem ze strony widzów na całym świecie. Wciąż powstają nowe dzieła i rozwijają się różne style i techniki malarskie, co sprawia, że malarstwo jest tak fascynującą i różnorodną dziedziną sztuki.
</p>

	</div>
 
      ';
?>
    <!-- 
       <p id="malarstwo">
	<b>Historia malarstwa</b> jest prawie tak samo stara jak historia ludzkości . Rysunek (pierwowzór malarstwa) od zawsze towarzyszył człowiekowi, a przynajmniej od momentu gdy uświadomił sobie drzemiące w nim potrzeby ekspresji. W różnych kręgach kulturowych na przestrzeni wieków malarstwo służyło różnym celom i wykształciło różnorodność tematów oraz technik przekazu. Zawsze też łączyło się z innymi dziedzinami sztuki.
	</p>  -->
<!-- srodkowa kolumna konczy sie tutaj -->


	

</div>

<div id="stopka" class="linkk"><!-- stopka zaczyna sie tutaj -->
copyrights Galeriamalarska.pl - Galeria Malarska Marii Teresy Domareckiej 2012-2023<br/><br/>
	<strong><a href="http://www.gabinet51.pl/">Gabinet Masażu Toruń, masaż leczniczy, klasyczny, limfatyczny i taping</a></strong>
	<br/><br/>

<!-- stat.4u.pl NiE KaSoWaC -->
<a target=_top href="http://stat.4u.pl/?galeriamalarska" title="statystyki stron WWW"><img alt="stat4u" src="http://adstat.4u.pl/s4u.gif" border="0"></a>
<script language="JavaScript" type="text/javascript">
<!--
function s4upl() { return "&amp;r=er";}
//-->
</script>
<script language="JavaScript" type="text/javascript" src="http://adstat.4u.pl/s.js?galeriamalarska"></script>
<script language="JavaScript" type="text/javascript">
<!--
s4uext=s4upl();
document.write('<img alt="stat4u" src="http://stat.4u.pl/cgi-bin/sn.cgi?i=galeriamalarska&p=0'+s4uext+'" width="1" height="1">')
//-->
</script>
<noscript><img alt="stat4u" src="http://stat.4u.pl/cgi-bin/sn.cgi?i=galeriamalarska&amp;p=0&amp;r=ns" width="1" height="1"></noscript>
<!-- stat.4u.pl KoNiEc -->
<strong>
<br/>
  </div><!-- stopka konczy sie tutaj -->

</div><!-- calosc konczy sie tutaj -->

</body>
</html>

