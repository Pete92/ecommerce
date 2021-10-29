<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Incluudataan database, middleware auth ja uusi objectin teko
include_once '../config/database.php';
include_once '../middlewares/Auth.php';


$allHeaders = getallheaders();
$database = new Database();
$db = $database->getConnection();
$auth = new Auth($db,$allHeaders);

$returnData = [
    "success" => 0,
    "status" => 401,
    "message" => "Unauthorized"
];

if($auth->isAuth()){
    $returnData = $auth->isAuth();
}

echo json_encode($returnData);