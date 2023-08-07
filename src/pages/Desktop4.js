import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop4.module.css";
const Desktop4 = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  const onMeetingsTextClick = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/desktop-8");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNotificationsTextClick = useCallback(() => {
    navigate("/desktop-9");
  }, [navigate]);

  const onJoinTextClick = useCallback(() => {
    navigate("/desktop-8");
  }, [navigate]);

  const onUileditIconClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  const onResourcesTextClick = useCallback(() => {
    navigate("/desktop-10");
  }, [navigate]);

  return (
    <div className={styles.desktop4}>
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
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} onClick={onRectangle4Click} />
        <div className={styles.frameChild3} />
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.connect}>Connect</div>
        <div
          className={styles.notifications}
          onClick={onNotificationsTextClick}
        >
          Notifications
        </div>
        <div className={styles.join} onClick={onJoinTextClick}>
          Join
        </div>
        <img
          className={styles.uileditIcon}
          alt=""
          src="/uiledit1.svg"
          onClick={onUileditIconClick}
        />
        <div className={styles.frameChild4} />
        <div className={styles.resources} onClick={onResourcesTextClick}>
          Resources
        </div>
      </div>
      <div className={styles.quoteOfThe}>Quote of the day,</div>
      <div className={styles.whenSomethingIs}>
        “When something is important enough, you do it even if the odds aren’t
        in your favor.”
      </div>
      <div className={styles.desktop4Child} />
      <div className={styles.desktop4Item} />
      <div className={styles.desktop4Inner} />
      <div className={styles.goodMorningUser}> Good Morning, User</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild5} />
        <div className={styles.div}>1</div>
      </div>
    </div>
  );
};

export default Desktop4;
