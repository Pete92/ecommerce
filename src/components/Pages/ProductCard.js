import {Card, Col, Button} from 'react-bootstrap';
import { CartState } from "../../context/Context";
import { Link } from "react-router-dom";





const ProductCard = ({item}) => { //Shop sivulla lähetettiin state ja täällä käyttöön
    
    
    const {
        state: { cart },
        dispatch,
    } = CartState();



    console.log(cart);



    
    //Card kuvan koko määritys
    const imgSize = {
        width: '120px',
        margin: '0 auto',
        padding: '10px 0',
        height: '150px'
    }
    //Card muokkaus, pituus ja varjostus
    const cardStyle = {
        height: '97%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        padding: "20px 0"
    }

    //Palautetaan Bootsrapin Card jossa on item.id, title, price
    return(
            <Col xs={12} md={6} xl={4}>
                <Card style={cardStyle} >
                    <Card.Img variant="top" style={imgSize} src={item.image} />
                    <Card.Body>
                        <Card.Title>
                            <h5 style={{fontSize: '1rem'}}>{item.title}</h5>
                        </Card.Title> {/* linkki vie tämän id:en tuote sivulle */}
                        <Card.Text as='div' style={{padding: "12px 0"}}>
                        <h5>{item.price} $</h5>
                        </Card.Text>
                        <Col className="buttonsCol">
                            <Link to={`/shop/${item.id}`}>
                                <Button variant="" className="shopButton">
                                    Details
                                </Button>
                            </Link>
                            <Button className="shopButton" variant="" style={{margin: "0 5px"}} onClick={() =>{
                                    dispatch({
                                        type: 'ADD_TO_CART',
                                        payload: item
                                    })
                                }}>
                                Add to cart
                            </Button>
                        </Col>
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default ProductCard;