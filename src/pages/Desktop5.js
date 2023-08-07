import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import styles from "./Desktop5.module.css";
const Desktop5 = () => {
  return (
    <div className={styles.desktop5}>
      <div className={styles.desktop5Inner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.desktop5Child} />
      <div className={styles.back}>Back</div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <Form.Group className={styles.wrapper}>
          <Form.Control type="text" />
        </Form.Group>
        <div className={styles.dob}>DOB</div>
        <Form.Group className={styles.container}>
          <Form.Control type="date" />
        </Form.Group>
        <div className={styles.gmail}>Gmail</div>
        <Form.Group className={styles.frame}>
          <Form.Control type="email" />
        </Form.Group>
        <div className={styles.skills}>Skills</div>
        <div className={styles.bio}>Bio</div>
        <div className={styles.year}>Year</div>
        <Form.Group className={styles.rectangleFormgroup}>
          <Form.Control type="number" />
        </Form.Group>
        <div className={styles.course}>Course</div>
        <div className={styles.name}>Name</div>
        <TextField
          className={styles.frameInner}
          sx={{ width: 434 }}
          color="primary"
          variant="outlined"
          type="text"
          size="medium"
          margin="none"
          required
        />
        <div className={styles.ellipseParent}>
          <div className={styles.ellipseDiv} />
          <img
            className={styles.iconamoonprofileThin}
            alt=""
            src="/profileimage@2x.jpg"
          />
          <div className={styles.rectangleDiv} />
          <div className={styles.yourName}>Your name</div>
          <img
            className={styles.solaruploadLinearIcon}
            alt=""
            src="/solaruploadlinear@2x.jpg"
          />
        </div>
        <div className={styles.frameChild1} />
        <div className={styles.saveChanges}>Save Changes</div>
        <TextField
          className={styles.rectangleTextfield}
          sx={{ width: 434 }}
          color="primary"
          variant="outlined"
          type="text"
          size="medium"
          margin="none"
          required
        />
        <Form.Group className={styles.textareastandardFormgroup}>
          <Form.Control as="textarea" placeholder="Textarea placeholder" />
        </Form.Group>
      </div>
    </div>
  );
};

export default Desktop5;
