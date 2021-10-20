<?php
	// Tietokanta yhteys
	include_once 'config.php';

	//Luokka Items
	class Database extends Config {
	  // Haetaan kaikki tai yksi item tietokannasta. 
	  public function fetch($id = 0) {
	    $sql = 'SELECT * FROM items';
	    
		if ($id != 0) {
	     	$sql .= ' WHERE id = :id';
			$stmt = $this->conn->prepare($sql);
			$stmt->execute(['id' => $id]);
	    } else {
			$stmt = $this->conn->prepare($sql);
			$stmt->execute([]);
		}

		$rows = $stmt->fetchAll();
	    return $rows;
	  }


	  //Tallennetaan uusi item tietokantaan
	  public function insert($title, $description, $price, $image) {
	    $sql = 'INSERT INTO items (title, description, price, image) VALUES (:title, :description, :price, :image)';
	    $stmt = $this->conn->prepare($sql);
	    $stmt->execute(['title' => $title, 'description' => $description, 'price' => $price, 'image' => $image]);
	    return true;
	  }

	  //Päivitetään tämä item
	  public function update($title, $description, $price, $id) {
	    $sql = 'UPDATE items SET title = :title, description = :description, price = :price WHERE id = :id';
	    $stmt = $this->conn->prepare($sql);
	    $stmt->execute(['title' => $title, 'description' => $description, 'price' => $price, 'image' => $image, 'id' => $id]);
	    return true;
	  }

	  //Poistetään tämä id tietokannasta
	  public function delete($id) {
	    $sql = 'DELETE FROM items WHERE id = :id';
	    $stmt = $this->conn->prepare($sql);
	    $stmt->execute(['id' => $id]);
	    return true;
	  }
	}

?>