import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop6.module.css";
import Axios from 'axios';

const Desktop6 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onMenteeTextClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const [Name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [dob, setDOB] = useState("");
  const [password, setPassword] = useState("");
  const [exp, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [job_desc, setJobDesc] = useState("");
  const [qualification, setQualification] = useState("");
  const submit = () =>{
    Axios.post("http://localhost:8081/mentor", {
      Name: Name, password: password, email: email, phone: phone, year: year, dob: dob, exp: exp, job_desc: job_desc, qualification: qualification
    }).then(()=>{alert("Successful insert!")})
  };

  return (
    <div className={styles.desktop6}>
      <img className={styles.desktop6Child} alt="" src="/rectangle-1.svg" />
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
          onChange={(e)=>{
            setName(e.target.value);
          }}
        />
        <TextField
          className={styles.frameInner}
          sx={{ width: 460 }}
          color="primary"
          variant="standard"
          type="text"
          label="Mobile Number"
          size="medium"
          margin="none"
          required
          onChange={(e)=>{
            setPhone(e.target.value);
          }}
        />
        <TextField
          className={styles.frameTextfield}
          sx={{ width: 215 }}
          color="primary"
          variant="standard"
          type="number"
          label="Year"
          placeholder="Years of experience in mentoring"
          size="medium"
          margin="none"
          required
          onChange={(e)=>{
            setYear(e.target.value);
          }}
        />
        <TextField
          className={styles.frameChild1}
          sx={{ width: 215 }}
          color="primary"
          variant="standard"
          type="date"
          label="Date"
          placeholder="Date of Birth"
          size="medium"
          margin="none"
          required
          onChange={(e)=>{
            setDOB(e.target.value);
          }}
        />
        <TextField
          className={styles.frameChild2}
          sx={{ width: 466 }}
          color="primary"
          variant="standard"
          type="email"
          label="Gmail"
          placeholder="Email"
          size="medium"
          margin="none"
          required
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
        />
        <TextField
          className={styles.frameChild3}
          sx={{ width: 466 }}
          color="primary"
          variant="standard"
          type="text"
          label="Job Description"
          placeholder="Job overview"
          size="medium"
          margin="none"
          required
          onChange={(e)=>{
            setJobDesc(e.target.value);
          }}
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
          placeholder="Password"
          size="medium"
          margin="none"
          required
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
        />
        <TextField
          className={styles.frameChild5}
          sx={{ width: 464 }}
          color="primary"
          variant="standard"
          type="text"
          label="Qualification"
          size="medium"
          margin="none"
          required
          onChange={(e)=>{
            setQualification(e.target.value);
          }}
        />
        <Input.TextArea
          className={styles.textareaborderInputtextarea}
          style={{ width: "471px" }}
          size="middle"
          placeholder="Any Experience"
          onChange={(e)=>{
            setExperience(e.target.value);
          }}
        />
      </div>
      <div className={styles.submitWrapper} onClick={submit}>
        <div className={styles.submit}>Submit</div>
      </div>
      <div className={styles.menteeParent} onClick={onFrameContainer2Click}>
        <div className={styles.mentee} onClick={onMenteeTextClick}>
          {" "}
          Mentee
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.mentor}>Mentor</div>
      </div>
    </div>
  );
};

export default Desktop6;
