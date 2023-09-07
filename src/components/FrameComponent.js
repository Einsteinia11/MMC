import { useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./FrameComponent.module.css";
import Axios from 'axios';

const FrameComponent = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onDontHaveAnClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onButtonOutlinedClick = useCallback(() => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    Axios.post("http://localhost:8081/login", { email, password })
      .then((response) => {
        if (response.data.success) {
          // Redirect to Desktop4.js after successful login
          navigate("/desktop-4"); // Change this to match your route for Desktop4.js
        } else {
          alert("Invalid email or password. Please try again.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while logging in. Please try again later.");
      });
  }, [navigate]);



  return (
    <div className={styles.passwordParent}>
      <div className={styles.password}>Password</div>
      <div className={styles.frameChild} />
      <div className={styles.heyThere}>Hey There!</div>
      <Form.Group className={styles.wrapper}>
        <Form.Control type="text" id="email" placeholder="Enter your email" />
      </Form.Group>
      <div className={styles.frameItem} />
      <div className={styles.email}>Email</div>
      <div className={styles.dontHaveAnContainer} onClick={onDontHaveAnClick}>
        <span>{`Don't have an account yet? `}</span>
        <i className={styles.signUp}>{`Sign up -> `}</i>
      </div>
      <Form.Select className={styles.selectdefaultFormselect} id="LA">
        <option>Login As</option>
        <option value="Admin">Admin</option>
        <option value="Mentee">Mentee</option>
        <option value="Mentor">Mentor</option>
      </Form.Select>
      <Button
        className={styles.buttonoutlined}
        variant="outline-primary"
        size="lg"
        onClick={onButtonOutlinedClick}
      >
        Login
      </Button>
      <TextField
          className={styles.inputstandardWithIcon}
          sx={{ width: 357 }}
          color="primary"
          variant="standard"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          id="password"
          placeholder="Password"
          size="medium"
          margin="none"
        />
      <Button
        className={styles.buttonoutlined}
        variant="outline-primary"
        size="lg"
        onClick={onButtonOutlinedClick}
      >
        Login
      </Button>
    </div>
  );
};

export default FrameComponent;
