import "../../App.css";
import {Card, Col, Button} from 'react-bootstrap';
import { CartState } from "../../context/Context";  //Hyödynnetään Contextia, jossa on ostoskori state.
import { Link } from "react-router-dom";
import { useState } from "react";                   


const ProductCard = ({item}) => {  //Shop sivulla annettiin pääsy tähän item stateen

    const [msg, setMsg] = useState();   //Stateen laitetaan vain teksti

    const {
        dispatch,  //Suorittaa tuotteen lisäyksen ostoskoriin
    } = CartState();
    //console.log(cart)
    return(
            <Col xs={12} md={6} xl={4}>
                <Card className="cardStyle">
                    <Card.Img 
                        variant="top" 
                        className="imgSize"  
                        src={item.image} 
                    />
                    <Card.Body>
                        <Card.Title>
                            <h5 style={{fontSize: '1rem'}}>
                                {item.title}
                            </h5>
                        </Card.Title> 
                        <Card.Text as='div' 
                            style={{padding: "12px 0"}}>
                            <h5>
                                {item.price} $
                            </h5>
                        </Card.Text>
                        <Col className="buttonsCol">
                            <Link to={`/shop/${item.id}`}> {/* linkki vie tämän id:en tuote sivulle */}
                                <Button variant="" className="shopButton">
                                    Details
                                </Button>
                            </Link>
                             <Button 
                                className="shopButton" 
                                variant="" style={{margin: "0 5px"}} 
                                onClick={() =>{         /* Muutetaan state ja lisätään ostoskoriin tuote */
                                    setMsg("Lisäys");
                                    dispatch({
                                        type: 'ADD_TO_CART',
                                        payload: item,
                                        
                                    })
                                    
                                }}>

                                    {/* Vaihdetaan napin teksti Staten mukaan */}
                                    {
                                        !msg ? 
                                            <span>Add to cart</span>
                                        :

                                        <span style={{color: "black"}}>Ostoskorissa</span>
                                    }
                                </Button>
    
                                
                        </Col>
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default ProductCard;