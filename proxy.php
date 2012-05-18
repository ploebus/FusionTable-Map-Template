<?php
echo "Hello";
$client = new SoapClient("http://www.acgov.org/MAPS/ACGISWS/AssessorWebServices.asmx?wsdl");
$result = $client->AddrQuery(array('strAddr'=>"672 13th Street Oakland"));


$array = $result->AddrQueryResult;

print_r($array);




?>
