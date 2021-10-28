import "../../App.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";


/* REGISTER COMPONENTTI */
const Register = () => {
   const history = useHistory();
   const Register_URL = "http://localhost/REST_API/user/register.php";

   const  handleSubmit = (e) => {
      e.preventDefault()
      const { name, email, password, passwordSecond } = e.target.elements
      console.log({name: name.value, email: email.value, password: password.value, passwordSecond: passwordSecond.value })


      if(password.value !== passwordSecond.value){
         console.log("Salasanat eivät tästää")

         return;
      }

       axios.post(Register_URL, { name: name.value, email: email.value, password: password.value }).then((response) => {
          if(response.data.success === 1){
               console.log(response.data);
                history.push("/login"); //siirretään käyttäjä /shop sivulle
          } else  {
              return console.log("Epäonnistui kokeiluu uudelleen");
          }  
    });
  }


    return (
        <Container>
        <Col md={6} style={{margin: "0 auto", textAlign: "center"}}>
           <div className="header-title">
              <h2 className="wv-heading--subtitle">
                 Rekisteröidy Mahtavaan Verkkokauppaan!
              </h2>
           </div>
        </Col>
        <Row>
           <Col md={4} style={{margin: "0 auto"}}>
              <Form onSubmit={handleSubmit}>
                    <Form.Group className="formGroup">
                       <input type="text" name="name"  className="form-control my-input" id="name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="formGroup">
                       <input type="email" name="email"  className="form-control my-input" id="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="formGroup">
                       <input type="password" name="password"  className="form-control my-input" id="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="formGroup">
                       <input type="password" name="passwordSecond"  className="form-control my-input" id="passwordSecond" placeholder="Password Again" />
                    </Form.Group>
                    <Col md={12} >
                       <div className="login-or">
                          <hr className="hr-or" />   
                       </div>
                    </Col>
                    <Form.Group>
                        <Button type="submit" variant="" className="g-button">
                           Register
                        </Button>
                    </Form.Group>
              </Form>
           </Col>
        </Row>
    </Container>
    )
}

export default Register;