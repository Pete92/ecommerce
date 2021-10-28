import "../../App.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useContext } from 'react';
import { UserContext} from '../../context/UserContext';
import axios from "axios";
//Voidaan ohjata käyttäjä kirjautumisen jälkeen
import { useHistory } from "react-router-dom";





/* LOGIN COMPONENTTI */
const Login = () => {
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const LOGIN_URL = "http://localhost/BackEnd/user/login.php";


    function handleSubmit(e) {
        e.preventDefault()
        const {email, password } = e.target.elements
        console.log({email: email.value, password: password.value })



        axios.post(LOGIN_URL, { email: email.value, password: password.value }).then((response) => {
            if(response.data.success === 1){
                if (response.data.token) {
                    localStorage.setItem("token", JSON.stringify(response.data));
                    setUser(response.data.token);
                  }
                  history.push("/shop"); //siirretään käyttäjä /shop sivulle
          
                  return response.data;
            } else if (response.data.status === 422) {
                return console.log("väärä Käyttäjätunnus tai salasana")
            } 
      });
    }
    return (
        <Container>
           <Col md={6} style={{margin: "0 auto", textAlign: "center"}}>
           <div className="header-title">
              <h2 className="wv-heading--subtitle">
                 Kirjaudu sisään, niin voit käyttää hakupalkkia.
              </h2>
           </div>
        </Col>
        <Row>
           <Col md={4} style={{margin: "0 auto"}}>
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