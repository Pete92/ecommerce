import { Form, Button, Container } from "react-bootstrap";
import { useContext } from 'react';
import { UserContext} from '../../context/UserContext';
import axios from "axios";



/* LOGIN COMPONENTTI */
const Login = () => {
    const { user, setUser } = useContext(UserContext);
    const API_URL = "http://localhost/php-login-registration-api/login.php";


    function handleSubmit(e) {
        e.preventDefault()
        const {email, password } = e.target.elements
        console.log({email: email.value, password: password.value })



        axios.post(API_URL, { email: email.value, password: password.value }).then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data));
          setUser(response.data.token);
        }

        return response.data;
      });



    }


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Login;