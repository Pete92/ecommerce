<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function msg($success,$status,$message,$extra = []){
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ],$extra);
}


// Incluudataan database, luokka ja uusi objectin teko
include_once '../class/JwtHandler.php';
include_once '../config/database.php';
$database = new Database();
$db = $database->getConnection();


$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// Jos ei ole POST pyyntö
if($_SERVER["REQUEST_METHOD"] != "POST"):
    $returnData = msg(0,404,'Page Not Found!');

// Tarkistetaan tyhjät inputit
elseif(!isset($data->email) 
    || !isset($data->password)
    || empty(trim($data->email))
    || empty(trim($data->password))
    ):

    $fields = ['fields' => ['email','password']];
    $returnData = msg(0,422,'Please Fill in all Required Fields!',$fields);

// Jos ei ole tyhjiä inputteja
else:
    $email = trim($data->email);
    $password = trim($data->password);

    // Tarkistetaan onko sähköpostin muoto sähköposti
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)):
        $returnData = msg(0,422,'Invalid Email Address!');
    
    // Jos Salasana on vähemmän kuin 0, näytetään error
    elseif(strlen($password) < 8):
        $returnData = msg(0,422,'Your password must be at least 8 characters long!');

    // Jos ylemmät on oikein niin suoritetaan Login toiminta
    else:
        try{
            
            $fetch_user_by_email = "SELECT * FROM `users` WHERE `email`=:email";
            $query_stmt = $db->prepare($fetch_user_by_email);
            $query_stmt->bindValue(':email', $email,PDO::PARAM_STR);
            $query_stmt->execute();

            // Jos löytyy käyttäjän email
            if($query_stmt->rowCount()):
                $row = $query_stmt->fetch(PDO::FETCH_ASSOC);
                $check_password = password_verify($password, $row['password']);

                
                //Varmistetaan onko salasana oikein
                // Jos Salasana on oikein, niin lähetetään token
                if($check_password):

                    $jwt = new JwtHandler();
                    $token = $jwt->_jwt_encode_data(
                        'http://localhost/BackEnd/',
                        array("user_id"=> $row['id'])
                    );

                    
                    
                    $returnData = [
                        'success' => 1,
                        'message' => 'You have successfully logged in.',
                        'token' => $token
                    ];


                    
                // Väärä Salasana
                else:
                    $returnData = msg(0,422,'Invalid Password!');
                endif;

            // Jos ei löydy sähköpostia
            else:
                $returnData = msg(0,422,'Invalid Email Address!');
            endif;
        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }

    endif;

endif;

echo json_encode($returnData);