import { useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField, Button as MuiButton } from "@mui/material";
import { Input as AntInput } from "antd";
import { Form } from "react-bootstrap";
import { Input } from "@chakra-ui/react";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop7.module.css";
const Desktop7 = () => {
  const navigate = useNavigate();

  const onRectangle3Click = useCallback(() => {
    navigate("/desktop-9");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/desktop-8");
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

  const onJoinTextClick = useCallback(() => {
    navigate("/desktop-8");
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

  const onFrameContainer2Click = useCallback(() => {
    navigate("/desktop-8");
  }, [navigate]);

  

  return (
    <div className={styles.desktop7}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <b className={styles.yourName}>Your Name</b>
        <div className={styles.abc123gmailcom}>abc123@gmail.com</div>
        <div className={styles.frameInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.meetings}>Meetings</div>
        <div className={styles.frameChild1} onClick={onRectangle3Click} />
        <div className={styles.frameChild2} onClick={onRectangle4Click} />
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
        <div className={styles.join} onClick={onJoinTextClick}>
          Join
        </div>
        <img
          className={styles.uileditIcon}
          alt=""
          src="/uiledit.svg"
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
      <div className={styles.desktop7Child} />
      <div className={styles.desktop7Item} />
      <div className={styles.desktop7Inner} />
      <div className={styles.goodMorningUser}> Good Morning, User</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild5} />
        <div className={styles.meetings1}>Meetings</div>
        <img
          className={styles.mdivirtualMeetingIcon}
          alt=""
          src="/mdivirtualmeeting.svg"
        />
        <img
          className={styles.zondiconslocation}
          alt=""
          src="/zondiconslocation.svg"
        />
        <img className={styles.carbontimeIcon} alt="" src="/carbontime.svg" />
        <TextField
          className={styles.inputstandard}
          sx={{ width: 468 }}
          color="primary"
          variant="standard"
          type="text"
          label="Title"
          size="medium"
          margin="none"
          required
        />
        <Form.Group className={styles.textareastandardFormgroup}>
          <Form.Control as="textarea" placeholder="Description" />
        </Form.Group>
        <Input
          className={styles.dtPickerfilled}
          variant="filled"
          width="324px"
          focusBorderColor="#4832cf"
          type="dateTime-local"
        />
        <MuiButton
          className={styles.buttonoutlinedText}
          variant="outlined"
          color="primary"
        >
          Create Meeting
        </MuiButton>
        <TextField
          className={styles.inputoutlined}
          sx={{ width: 468 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Location"
          size="medium"
          margin="none"
          required
        />
        <AntInput
          className={styles.inputtwoIcons}
          type="text"
          style={{ width: "478px" }}
          prefix={<UserOutlined />}
          suffix={<QuestionCircleOutlined />}
          size="middle"
          placeholder="Evet URL"
        />
      </div>
      <div className={styles.noMeetingsAs}>No meetings as of now created!</div>
      <div
        className={styles.rectangleContainer}
        onClick={onFrameContainer2Click}
      >
        <div className={styles.frameChild6} />
        <b className={styles.title}>Title</b>
      </div>
      <b className={styles.dateTime}>{`Date & Time`}</b>
    </div>
  );
};

export default Desktop7;
