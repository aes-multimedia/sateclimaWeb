<?php
include_once 'conexion.php';

$sql_datos = "SELECT * FROM Datos";
$resultado_datos = $conn->query($sql_datos);
$datos = mysqli_fetch_array($resultado_datos);

$sql_secciones = "SELECT * FROM Secciones";
$resultado_secciones = $conn->query($sql_secciones);
$secciones = mysqli_fetch_array($resultado_secciones);

$sql_imagenes = "SELECT * FROM Imagenes";
$resultado_imagenes = $conn->query($sql_imagenes);
$imagenes = mysqli_fetch_array($resultado_imagenes);

/* DATOS */

$email = $datos["email"];
$telefono = $datos["telefono"];
$cp_poblacion = $datos["cp_poblacion"];
$direccion = $datos["direccion"];

/* DATOS SECCIONES  */

function bdd_obtenerValor( $tabla, $campo, $condicion, $conn )
{
    include_once 'conexion.php';

    $sql = "SELECT * FROM " . $tabla . " WHERE " . $condicion . " LIMIT 1";

    $resultado_datos1 = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($resultado_datos1);

    return $row[$campo];

}

function eliminarTablaCondicion($tabla, $condicion){
    include_once 'conexion.php';

    $sql = "DELETE FROM " . $tabla . " WHERE " . $condicion . " LIMIT 1"; ;

    $resultado_datos1 = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($resultado_datos1);

    mysqli_query($conn,$sql);
    echo "HOLAAA";
}

?>
