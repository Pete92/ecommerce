import React from "react";
import {Card, Col} from 'react-bootstrap';
import Button from '../custom/Button';




const ProductCard = ({item}) => { //Shop sivulla lähetettiin state ja täällä käyttöön
    
    //Card kuvan koko määritys
    const imgSize = {
        width: '120px',
        margin: '0 auto',
        padding: '10px 0',
        height: '195px'
    }
    //Card muokkaus, pituus ja varjostus
    const cardStyle = {
        height: '97%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
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
                        <Card.Text as='div'>
                        <h5>{item.price} $</h5>
                        </Card.Text>
                        <Button item={item} />
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default ProductCard;