import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop8.module.css";
import Axios from 'axios';

const Desktop8 = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  const onMeetingsTextClick = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/desktop-9");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onConnectTextClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onNotificationsTextClick = useCallback(() => {
    navigate("/desktop-9");
  }, [navigate]);

  const onUileditIconClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/desktop-10");
  }, [navigate]);

  const onResourcesTextClick = useCallback(() => {
    navigate("/desktop-10");
  }, [navigate]);

  // const [meetDetails, setMeetDetails] = useState([]);

  // Axios.get("http://localhost:8081/info").then((response) => {
  //   meetDetails(response.data)
  //   console.log(response.data)
  // });

  return (
    <div className={styles.desktop8}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <b className={styles.yourName}>Your Name</b>
        <div className={styles.abc123gmailcom}>abc123@gmail.com</div>
        <div className={styles.frameInner} />
        <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
        <div className={styles.meetings} onClick={onMeetingsTextClick}>
          Meetings
        </div>
        <div className={styles.frameChild1} onClick={onRectangle3Click} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.connect} onClick={onConnectTextClick}>
          Connect
        </div>
        <div
          className={styles.notifications}
          onClick={onNotificationsTextClick}
        >
          Notifications
        </div>
        <div className={styles.join}>Join</div>
        <img
          className={styles.uileditIcon}
          alt=""
          src="/uiledit1.svg"
          onClick={onUileditIconClick}
        />
        <div className={styles.frameChild4} onClick={onRectangle6Click} />
        <div className={styles.resources} onClick={onResourcesTextClick}>
          Resources
        </div>
      </div>
      <div className={styles.quoteOfThe}>Quote of the day,</div>
      <div className={styles.whenSomethingIs}>
        “When something is important enough, you do it even if the odds aren’t
        in your favor.”
      </div>
      <div className={styles.desktop8Child} />
      <div className={styles.desktop8Item} />
      <div className={styles.desktop8Inner} />
      <div className={styles.goodMorningUser}> Good Morning, User</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild5} />
        <div className={styles.dateTimeParent}>
          <div className={styles.dateTime}>{`Date & Time`}</div>
          <img
            className={styles.healthiconsiScheduleSchool}
            alt=""
            src="/healthiconsischeduleschooldatetime.svg"
          />
        </div>
        <div className={styles.title}>title</div>
        <img
          className={styles.zondiconslocation}
          alt=""
          src="/zondiconslocation1.svg"
        />
        <div className={styles.fluentMdl2joinOnlineMeetinParent}>
          <img
            className={styles.fluentMdl2joinOnlineMeetinIcon}
            alt=""
            src="/fluentmdl2joinonlinemeeting.svg"
          />
          <div className={styles.join1}>Join</div>
        </div>
        {/* {t.map((item, index) => (
          <div className={styles.title} key={index}>{item.Title}</div>
        ))} */}
        <div className={styles.location}>Location:</div>
      </div>
    </div>
  );
};

export default Desktop8;
