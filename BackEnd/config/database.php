<?php 
    class Database {
        private $host = "eu-cdbr-west-01.cleardb.com:3306";
        private $database_name = "heroku_7d21b7f82aa3508";
        private $username = "b557c649e98c21";
        private $password = "036c60b1";

        public $conn;

        public function getConnection(){
            $this->conn = null;
            try{
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database_name, $this->username, $this->password);
                $this->conn->exec("set names utf8");
            }catch(PDOException $exception){
                echo "Database could not be connected: " . $exception->getMessage();
            }
            return $this->conn;
        }
    }  
?>