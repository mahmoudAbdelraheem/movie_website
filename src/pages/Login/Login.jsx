import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {StringManager} from "../../core/constants/StringManager";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: " ",
    passwordError: " ",
  });

  const [isPassHidden, setTogglePassword] = useState(true);

  const togglePasswordVisablity = () => {
    console.log(isPassHidden);
    setTogglePassword(!isPassHidden);
  };

  const onInputChange = (event) => {
    let emailRegEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (event.target.name == "email") {
      setUser({ ...user, email: event.target.value });
      setErrors({
        ...errors,
        emailError:
          event.target.value.length == 0
            ? "Email Is Required"
            : emailRegEx.test(event.target.value)
            ? ""
            : "Invalid Email",
      });
    } else if (event.target.name == "password") {
      setUser({ ...user, password: event.target.value });
      setErrors({
        ...errors,
        passwordError:
          event.target.value.length == 0
            ? "Password is required"
            : event.target.value.length < 8
            ? "Password Should be more than 8 characters."
            : "",
      });
    }
  };


    const navigate = useNavigate();

    let  navTo=(path)=>{
      navigate(path);
    }

  const userLogin = (event) => {
    event.preventDefault();
    if (!errors.emailError && !errors.passwordError) {
      //! nav to Home Page
       navTo(StringManager.homePage);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row m-5 d-flex justify-content-center">
          <Form
            className="col-6 border rounded p-5 bg-light"
            onSubmit={(e) => userLogin(e)}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
              <p className="text-danger">{errors.emailError}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={isPassHidden ? "password" : "text"}
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
              <p className="text-danger">{errors.passwordError}</p>
              {isPassHidden == true ? (
                <FaRegEyeSlash onClick={() => togglePasswordVisablity()} />
              ) : (
                <FaRegEye onClick={() => togglePasswordVisablity()} />
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
