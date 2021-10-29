<?php


    class Items{

        // Yhteys
        private $conn;

        // Taulu
        private $db_table = "items";

        // Columns
        public $id;
        public $title;
        public $description;
        public $price;
        public $image;
        public $gtin;

        // Tietokanta yhteys
        public function __construct($db){
            $this->conn = $db;
        }

        // Hae Kaikki
        public function getItems(){
            $sqlQuery = "SELECT id, title, description, price, image, gtin FROM " . $this->db_table . "";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        // Tee uusi talletus
        public function createItem(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        title = :title, 
                        description = :description, 
                        price = :price, 
                        image = :image,
                        gtin = :gtin"; 
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->title=htmlspecialchars(strip_tags($this->title));
            $this->description=htmlspecialchars(strip_tags($this->description));
            $this->price=htmlspecialchars(strip_tags($this->price));
            $this->image=htmlspecialchars(strip_tags($this->image));
            $this->gtin=htmlspecialchars(strip_tags($this->gtin));
        
            // bind data
            $stmt->bindParam(":title", $this->title);
            $stmt->bindParam(":description", $this->description);
            $stmt->bindParam(":price", $this->price);
            $stmt->bindParam(":image", $this->image);
            $stmt->bindParam(":gtin", $this->gtin);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // Hae yksittäinen item
        public function getSingleItem(){
            $sqlQuery = "SELECT
                        id, 
                        title, 
                        description, 
                        price, 
                        image,
                        gtin
                      FROM
                        ". $this->db_table ."
                    WHERE 
                       id = ?
                    LIMIT 0,1";

            $stmt = $this->conn->prepare($sqlQuery);

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $this->title = $dataRow['title'];
            $this->description = $dataRow['description'];
            $this->price = $dataRow['price'];
            $this->image = $dataRow['image'];
            $this->gtin = $dataRow['gtin'];
        }        

        // Päivitä 
        public function updateItem(){
            $sqlQuery = "UPDATE
                        ". $this->db_table ."
                    SET
                        title = :title, 
                        description = :description, 
                        price = :price, 
                        image = :image,
                        gtin = :gtin
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->title=htmlspecialchars(strip_tags($this->title));
            $this->description=htmlspecialchars(strip_tags($this->description));
            $this->price=htmlspecialchars(strip_tags($this->price));
            $this->image=htmlspecialchars(strip_tags($this->image));
            $this->gtin=htmlspecialchars(strip_tags($this->gtin));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":title", $this->title);
            $stmt->bindParam(":description", $this->description);
            $stmt->bindParam(":price", $this->price);
            $stmt->bindParam(":image", $this->image);
            $stmt->bindParam(":gtin", $this->gtin);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // Poista
        function deleteItem(){
            $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
        
            if($stmt->execute()){
                return true;
            }
            return false;
        }

    }
?>