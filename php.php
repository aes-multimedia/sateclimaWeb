<?php
$servername = "192.168.111.246";
$database = "sateclima_web";
$username = "root";
$password = "aesmultimedia";

$conn = mysqli_connect($servername, $username, $password, $database);

$sql_datos = "SELECT * FROM Datos";
$resultado_datos = $conn->query($sql_datos);
$valor = mysqli_fetch_array($resultado_datos);

/* $cDatos = new cDatos();
$cDatos->setDatos($valor["email"], $valor["telefono"], $valor["poblacion"], $valor["direccion"]); */




mysqli_close($conn);

/* class cDatos{
    private $email;
    private $telefono;
    private $cp_poblacion;
    private $direccion;


    function setDatos($email, $telefono, $poblacion, $direccion){
        $this->email = $email;
        $this->telefono = $telefono;
        $this->poblacion = $poblacion;
        $this->direccion = $direccion;
        exit($this->email);
    }
}  */
?>

<html>
    <head>
    </head>
    <body>
    <p> Mi email es: <?php echo $valor["email"] ?> </p>
    <!-- <p> Mi email es: <?php echo $this->email ?> </p> -->
    </body>
</html>