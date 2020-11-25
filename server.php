  $myFile = "logfile.txt";
  $fh = fopen($myFile, 'w') or die("can't open file");
  $stringData =$_POST['ClickedButton'] ;
  fwrite($fh, $stringData);
  fclose($fh);
