<?php
$serverName = "evosql"; //serverName\instanceName
$connectionInfo = array( "Database"=>"DATA_BASE_HERE", "UID"=>"DOMAIN\\USERNAME", "PWD"=>"PASS_WORD_HERE");
$conn = sqlsrv_connect( $serverName, $connectionInfo);

if( $conn ) {
     echo "Connection established.<br />";
}else{
     echo "Connection could not be established.<br />";
     die( print_r( sqlsrv_errors(), true));
}
?>