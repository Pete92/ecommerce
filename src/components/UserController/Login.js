import "../../App.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useContext, useState } from 'react';
import { UserContext} from '../../context/UserContext';
import axios from "axios";
import { useHistory } from "react-router-dom"; 

/* LOGIN COMPONENTTI */
const Login = () => {
    const history = useHistory();                  //Voidaan ohjata käyttäjä kirjautumisen jälkeen
    const { setUser } = useContext(UserContext);   //Laitetaan onnistuneen login jälkeen token stateen
    const [error, setError] = useState(false);     //Error message


    const LOGIN_URL = "https://backenddphp.herokuapp.com/user/login.php";


    function handleSubmit(e) {      //Formin käsittelijä
        e.preventDefault()
        const {email, password } = e.target.elements;
        //console.log({email: email.value, password: password.value });
         const inputs = {email: email.value, password: password.value};
         fetchUser(inputs);
      }
      
      const fetchUser = async ( inputs ) => {   //Kirjautumisen toiminta
         setError(false);
           const result = await axios.post(LOGIN_URL, inputs );
            if(result.data.success === 1){
               if (result.data.token) {
                  localStorage.setItem("token", JSON.stringify(result.data)); //Laitetaan result localStorageen(Ei käyttöä vielä)
                  setUser(result.data.token);
               }
               history.push("/shop"); 
               //console.log(result.data);
            } else {
               setError(true);
            }
      }
      
    return (
        <Container>
           <Row>
               <Col md={6} style={{margin: "0 auto", textAlign: "center"}}>
                     <div className="header-title">
                        <h2 className="wv-heading--subtitle">
                           Kirjaudu sisään, niin voit käyttää hakupalkkia.
                        </h2>
                     </div>
               </Col>
            </Row>
            <Row>
               <Col md={4} style={{margin: "0 auto"}}>
                  {
                     error && <div style={{color: `red`}}>Jokin meni pieleen, tarkista tiedot</div>
                  }
                  <Form onSubmit={handleSubmit}>
                        <Form.Group className="formGroup">
                           <input type="email" name="email"  className="form-control my-input" id="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="formGroup">
                           <input type="password" name="password"  className="form-control my-input" id="password" placeholder="Password" />
                        </Form.Group>
                        <Col md={12} >
                           <div className="login-or">
                              <hr className="hr-or" />   
                           </div>
                        </Col>
                        <Form.Group>
                              <Button type="submit" variant="" className="g-button">
                                 Login
                              </Button>
                        </Form.Group>
                  </Form>
               </Col>
            </Row>
        </Container>
    )
}

export default Login;