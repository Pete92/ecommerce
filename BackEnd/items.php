<?php
	// includataan CORS headers
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
	header('Access-Control-Allow-Headers: X-Requested-With');
	header('Content-Type: application/json');


	//liitetään toiminta tiedosto(jossa suoritetaan POST, GET, PUT, DELET)
	include_once 'db.php';


	//Tehdään uusi objecti items class
	$items = new Database();


	//Otetaan urlin HTTP methodi 
	$api = $_SERVER['REQUEST_METHOD'];

	
	//otetaan id urlista
	$id = intval($_GET['id'] ?? '');

	
	//otetaan kaikki tai 1 item tietokannasta
	if ($api == 'GET') {
	  if ($id != 0) {
	    $data = $items->fetch($id);
	  } else {
	    $data = $items->fetch();
	  }
	  echo json_encode($data);
	}


	//Tallenetaan tietokanaan uusi item
	if ($api == 'POST') {
	  $title = $items->test_input($_POST['title']);
	  $description = $items->test_input($_POST['description']);
	  $price = $items->test_input($_POST['price']);
	  $image = $items->test_input($_POST['image']);

	  if ($items->insert($title, $description, $price, $image)) {
	    echo $items->message('Item added successfully!',false);
	  } else {
	    echo $items->message('Failed to add an Item!',true);
	  }
	}


	//Päivitetään item tietokantaan
	if ($api == 'PUT') {
	  parse_str(file_get_contents('php://input'), $post_input);

	  $title = $items->test_input($post_input['title']);
	  $description = $items->test_input($post_input['description']);
	  $price = $items->test_input($post_input['price']);
	  $image = $items->test_input($post_input['image']);

	  if ($id != null) {
	    if ($items->update($title, $description, $price, $image)) {
	      echo $items->message('Item updated successfully!',false);
	    } else {
	      echo $items->message('Failed to update an item!',true);
	    }
	  } else {
	    echo $items->message('Item not found!',true);
	  }
	}


	//Poistetaan item tietokannasta
	if ($api == 'DELETE') {
	  if ($id != null) {
	    if ($items->delete($id)) {
	      echo $items->message('Item deleted successfully!', false);
	    } else {
	      echo $items->message('Failed to delete an item!', true);
	    }
	  } else {
	    echo $items->message('Item not found!', true);
	  }
	}

?>