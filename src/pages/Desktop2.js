import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop2.module.css";
const Desktop2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onBackTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  const onMentorTextClick = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  return (
    <div className={styles.desktop2}>
      <img className={styles.desktop2Child} alt="" src="/rectangle-1.svg" />
      <div className={styles.back} onClick={onBackTextClick}>
        Back
      </div>
      <div className={styles.mdirenameBoxOutlineParent}>
        <div className={styles.mdirenameBoxOutline} />
        <div className={styles.frameChild} />
        <TextField
          className={styles.frameItem}
          sx={{ width: 466 }}
          color="primary"
          variant="standard"
          type="text"
          label="Full Name"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className={styles.frameInner}
          sx={{ width: 460 }}
          color="primary"
          variant="standard"
          type="tel"
          label="Mobile Number"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className={styles.frameTextfield}
          sx={{ width: 464 }}
          color="primary"
          variant="standard"
          type="text"
          label="Course"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className={styles.frameChild1}
          sx={{ width: 215 }}
          color="primary"
          variant="standard"
          type="number"
          label="Year"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className={styles.frameChild2}
          sx={{ width: 215 }}
          color="primary"
          variant="standard"
          type="date"
          label="DOB"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className={styles.frameChild3}
          sx={{ width: 466 }}
          color="primary"
          variant="standard"
          type="email"
          label="Gmail"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className={styles.frameChild4}
          sx={{ width: 466 }}
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
          label="Password"
          size="medium"
          margin="none"
          required
        />
        <Input.TextArea
          className={styles.textareaborderInputtextarea}
          style={{ width: "471px" }}
          size="middle"
          placeholder="Any Experience"
        />
      </div>
      <div className={styles.submitWrapper} onClick={onFrameContainer1Click}>
        <div className={styles.submit}>Submit</div>
      </div>
      <div className={styles.menteeParent}>
        <div className={styles.mentee}> Mentee</div>
        <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
        <div className={styles.mentor} onClick={onMentorTextClick}>
          Mentor
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
