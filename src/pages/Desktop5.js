import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop5.module.css";
const Desktop5 = () => {
  const navigate = useNavigate();

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onSaveChangesTextClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  return (
    <div className={styles.desktop5}>
      <div className={styles.desktop5Inner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.desktop5Child} />
      <div className={styles.back} onClick={onBackTextClick}>
        Back
      </div>
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
        <Form.Group className={styles.wrapper1}>
          <Form.Control type="text" />
        </Form.Group>
        <div className={styles.ellipseParent}>
          <div className={styles.frameInner} />
          <img
            className={styles.iconamoonprofileThin}
            alt=""
            src="/profileimage@2x.jpg"
          />
          <div className={styles.rectangleDiv} />
          <div className={styles.yourName}>Your name</div>
          <input className={styles.solaruploadLinear} type="file" required />
        </div>
        <div className={styles.frameChild1} />
        <div className={styles.saveChanges} onClick={onSaveChangesTextClick}>
          Save Changes
        </div>
        <Form.Group className={styles.wrapper2}>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className={styles.textareastandardFormgroup}>
          <Form.Control as="textarea" />
        </Form.Group>
      </div>
    </div>
  );
};

export default Desktop5;

