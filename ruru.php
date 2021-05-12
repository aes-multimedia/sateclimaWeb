<?php
    /*var_dump($_FILES['input_name']['error']);
    exit(); 
     error_reporting(E_ALL);
ini_set('display_errors', '1');*/
            if (isset($_FILES['input_name']['name']) && $_FILES['input_name']['name'] != "") { //Comprobacion archivo vacio
                if((strpos($_FILES['input_name']['type'], "jpeg") || strpos($_FILES['input_name']['type'], "jpg") || strpos($_FILES['input_name']['type'], "png"))){ //Comprobacion extension
                    if (move_uploaded_file($_FILES['input_name']['tmp_name'], $_POST['ruta_antigua'])) { //Importo imagen a proyecto
                        header ("Location: administracion.php");
                    }else{echo 'La imagen no ha sido importada al proyecto correctamente';}
                }else{echo 'El archivo no coincide con las extensiones jpeg, jpg, png';}
            }else{echo 'El archivo es erroneo o está vacio';}
?>