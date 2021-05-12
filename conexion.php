<?php
    $servername = "192.168.111.246";
    $database = "sateclima_web";
    $username = "root";
    $password = "aesmultimedia";
    $conn = mysqli_connect($servername, $username, $password, $database);

    mysqli_set_charset( $conn, 'utf8mb4');

?>