import { useEffect, useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  TextField,
  Button as MuiButton,
  Input as AntInput
} from "@mui/material";
import { Form } from "react-bootstrap";
import { Input } from "@chakra-ui/react";
import Axios from 'axios';
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

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLoc] = useState("");
  const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [t, setT] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  const create = () => {
    Axios.post("http://localhost:8081/meet", {
      title: title, date: date, location: location, meet: url, desc: desc
    }).then(() => { alert("Successful insert!") });
  };
  
  const get_Title = () => {
    Axios.get("http://localhost:8081/meet").then((response) => {
      const last = response.data[response.data.length - 1]; // Get the last item
      setLastItem(last);
      setT(response.data);
    });
  }
  useEffect(() => {
    get_Title(); // Call the get_Title function when the component is mounted
  }, []);

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
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
        />
        <Form.Group className={styles.textareastandardFormgroup}>
          <Form.Control as="textarea" placeholder="Description" 
          onChange={(e)=>{
            setDesc(e.target.value);
          }}/>
        </Form.Group>
        <Input
          className={styles.dtPickerfilled}
          variant="filled"
          width="324px"
          focusBorderColor="#4832cf"
          type="dateTime-local"
          onChange={(e)=>{
            setDate(e.target.value);
          }}
        />
        <MuiButton
          className={styles.buttonoutlinedText}
          variant="outlined"
          color="primary"
          onClick={create}
          // onClick={get_Title}
          
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
          onChange={(e)=>{
            setLoc(e.target.value);
          }}
        />
        <AntInput
          className={styles.inputtwoIcons}
          type="text"
          style={{ width: "478px" }}
          prefix={<UserOutlined />}
          suffix={<QuestionCircleOutlined />}
          size="middle"
          placeholder="Evet URL"
          required
          onChange={(e)=>{
            setUrl(e.target.value);
          }}
        />
      </div>
      <div className={styles.noMeetingsAs}>No meetings as of now created!</div>
      <div
        className={styles.rectangleContainer}
        onClick={onFrameContainer2Click}
      >
      <div className={styles.frameChild6} />
      <div className={styles.title}>{lastItem?.Title}</div>
      </div>
      <div className={styles.dateTime}>{lastItem?.Date}</div>
    </div>
  );
};

export default Desktop7;
