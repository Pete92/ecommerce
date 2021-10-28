<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    include_once '../config/database.php';
    include_once '../class/items.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $item = new Items($db);
    
    $data = json_decode(file_get_contents("php://input"));
    
    $item->id = $data->id;
    
    // items values
    $item->title = $data->title;
    $item->description = $data->description;
    $item->price = $data->price;
    $item->image = $data->image;
    $item->gtin = $data->gtin;
    
    if($item->updateItem()){
        echo json_encode("Item data updated.");
    } else{
        echo json_encode("Data could not be updated");
    }
?>