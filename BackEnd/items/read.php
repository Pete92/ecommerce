<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    // Incluudataan database, luokka ja uusi objectin teko
    include_once '../config/database.php';
    include_once '../class/items.php';
    $database = new Database();
    $db = $database->getConnection();

    $items = new Items($db);

    $stmt = $items->getItems();
    $itemCount = $stmt->rowCount();


    //echo json_encode($itemCount);

    if($itemCount > 0){
        
        $items = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $i = array(
                "id" => $id,
                "title" => $title,
                "description" => $description,
                "price" => $price,
                "image" => $image,
                "gtin" => $gtin
            );

            array_push($items, $i);
        }
        echo json_encode($items);
    }

    else{
        http_response_code(404);
        echo json_encode(
            array("message" => "No record found.")
        );
    }
?>