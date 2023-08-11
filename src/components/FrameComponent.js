import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";
const FrameComponent = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onDontHaveAnClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onButtonOutlinedClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  return (
    <div className={styles.passwordParent}>
      <div className={styles.password}>Password</div>
      <div className={styles.frameChild} />
      <div className={styles.heyThere}>Hey There!</div>
      <Form.Group className={styles.wrapper}>
        <Form.Control type="text" placeholder="Enter your email" />
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
        type={showPassword ? "text" : "text"}
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
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
    </div>
  );
};

export default FrameComponent;
