import "../../App.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";        //Voidaan ohjata käyttäjä login sivulle
import { useState } from "react";


/* REGISTER COMPONENTTI */
const Register = () => {

   const history = useHistory();

   const [error, setError] = useState(false);                  /* Error ilmoitukset statessa */
   const [errorPassword, setPasswordError] = useState(false);


   const REGISTER_URL = "http://localhost/BackEnd/user/register.php";      

   const  handleSubmit = (e) => {   //Formin käsittelijä
      e.preventDefault()
      const { name, email, password, passwordSecond } = e.target.elements
      
      if(password.value !== passwordSecond.value){
         //console.log("Salasanat eivät tästää");
         return setPasswordError(true);
      }

      const inputs = {name: name.value, email: email.value, password: password.value};
      registerUser(inputs);
   }

   const registerUser = async ( inputs ) => {      //Rekisteröitymisen toiminta
      setError(false);
        const result = await axios.post(REGISTER_URL, inputs );
            if(result.data.success === 1){
               history.push("/login"); 
               //console.log(result.data);
            } else {
               setError(true);
            }
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
              {/* Error Viestit */}
               {
                 error && <div style={{color: `red`}}>Jokin meni pieleen, tarkista tiedot</div>
               }
               {
                 errorPassword && <div style={{color: `red`}}>Salasanat eivät täsmää</div>
               }
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