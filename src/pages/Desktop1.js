import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Button, Icon } from "@mui/material";
import { Button as AntButton } from "antd";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop1.module.css";
const Desktop1 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFeaturesText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='featuresText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onButtonClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onIcbaselineDiscordIconClick = useCallback(() => {
    window.open("https://curiousdevelopers.in/");
  }, []);

  const onIcbaselineFacebookIconClick = useCallback(() => {
    window.open("https://curiousdevelopers.in/");
  }, []);

  const onRiinstagramFillIconClick = useCallback(() => {
    window.open("https://curiousdevelopers.in/");
  }, []);

  const onMdilinkedinIconClick = useCallback(() => {
    window.open("https://curiousdevelopers.in/");
  }, []);

  const onButton1Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <>
      <div className={styles.desktop1}>
        <div className={styles.whatIsMentorAndMenteeConnWrapper}>
          <div className={styles.whatIsMentor}>
            What is Mentor And Mentee connect?
          </div>
        </div>
        <div className={styles.features} data-scroll-to="featuresText">
          Features
        </div>
        <div className={styles.frame}>
          <div className={styles.frameParent}>
            <div className={styles.frame1}>
              <div className={styles.home}>Home</div>
              <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
                About Us
              </div>
              <div className={styles.features1} onClick={onFeaturesText1Click}>
                Features
              </div>
              <Button
                className={styles.buttoncontainedTextAndIco}
                variant="contained"
                color="secondary"
                endIcon={<Icon>arrow_forward_sharp</Icon>}
                onClick={openFrame}
              >
                Login
              </Button>
            </div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.mentorMenteesConnectParent}>
            <img
              className={styles.mentorMenteesConnect}
              alt=""
              src="/mentor-mentees-connect.svg"
            />
            <div
              className={styles.designedSpeciallyFor}
            >{`Designed specially for students of Shaheed Rajguru College of Applied Sciences for Women `}</div>
            <AntButton
              className={styles.button}
              style={{ width: "166px" }}
              type="dashed"
              size="large"
              shape="round"
              onClick={onButtonClick}
            >
              Get Started
            </AntButton>
          </div>
        </div>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <div className={styles.frame2}>
          <div className={styles.offlineMonthlyMeetups}>
            Offline Monthly meetups
          </div>
          <div className={styles.frame3}>
            <div className={styles.frameItem} />
            <div className={styles.onlineMeetups}>Online Meetups</div>
            <div className={styles.frameInner} />
            <div className={styles.onlineMonthlyMeetups}>
              Online Monthly meetups
            </div>
          </div>
        </div>
        <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
        <div className={styles.frame4}>
          <div className={styles.frame5}>
            <div className={styles.handsOnExperience}>Hands on Experience</div>
          </div>
          <div className={styles.frame6}>
            <div className={styles.onlineDoubtSolvibng}>
              Online Doubt Solvibng
            </div>
          </div>
        </div>
        <div className={styles.frame7}>
          <div className={styles.frame8}>
            <a
              className={styles.frameGroup}
              href="https://www.youtube.com/@einsteinia6305"
              target="_blank"
            >
              <div className={styles.frameDiv} />
              <img
                className={styles.undrawScheduleMeeting52nu1Icon}
                alt=""
                src="/undraw-schedule-meeting-52nu-1@2x.png"
              />
              <b className={styles.viewPastEvents}>View Past Events</b>
              <b className={styles.accessAllTheContainer}>
                <p className={styles.accessAll}>{`Access All `}</p>
                <p className={styles.accessAll}>The Past Events Here</p>
              </b>
            </a>
            <a
              className={styles.undrawCommunityReCyrm1Parent}
              href="https://curiousdevelopers.in/"
            >
              <img
                className={styles.undrawCommunityReCyrm1Icon}
                alt=""
                src="/undraw-community-re-cyrm-1@2x.png"
              />
              <b className={styles.community}>Community</b>
              <b className={styles.accessTheLearningContainer}>
                <p className={styles.accessAll}>{`Access The `}</p>
                <p className={styles.accessAll}>Learning Community Here</p>
              </b>
            </a>
          </div>
          <a
            className={styles.undrawBookshelvesReLxoy1Parent}
            href="https://curiousdevelopers.in/"
            target="_blank"
          >
            <img
              className={styles.undrawBookshelvesReLxoy1Icon}
              alt=""
              src="/undraw-bookshelves-re-lxoy-1@2x.png"
            />
            <b className={styles.accessResources}>Access Resources</b>
            <b className={styles.accessTheLearningContainer1}>
              <p className={styles.accessAll}>{`Access The `}</p>
              <p className={styles.accessAll}>Learning Resources Here</p>
            </b>
          </a>
        </div>
        <footer className={styles.madeByKajalLanjhiyanaWithParent}>
          <div className={styles.madeByKajalContainer}>
            <p className={styles.accessAll}>Made by Kajal Lanjhiyana with ❤</p>
          </div>
          <div className={styles.frame9}>
            <img className={styles.followUsOn} alt="" src="/follow-us-on.svg" />
            <img
              className={styles.icbaselineDiscordIcon}
              alt=""
              src="/icbaselinediscord.svg"
              onClick={onIcbaselineDiscordIconClick}
            />
            <img
              className={styles.icbaselineFacebookIcon}
              alt=""
              src="/icbaselinefacebook.svg"
              onClick={onIcbaselineFacebookIconClick}
            />
            <img
              className={styles.riinstagramFillIcon}
              alt=""
              src="/riinstagramfill.svg"
              onClick={onRiinstagramFillIconClick}
            />
            <img
              className={styles.mdilinkedinIcon}
              alt=""
              src="/mdilinkedin.svg"
              onClick={onMdilinkedinIconClick}
            />
          </div>
        </footer>
        <div className={styles.frame10}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-26@2x.png"
          />
          <img
            className={styles.frameChild1}
            alt=""
            src="/rectangle-30@2x.png"
          />
          <div className={styles.frame11}>
            <img
              className={styles.frameChild2}
              alt=""
              src="/rectangle-28@2x.png"
            />
            <img
              className={styles.frameChild3}
              alt=""
              src="/rectangle-29@2x.png"
            />
            <div className={styles.pastEvents}>Past Events</div>
          </div>
          <div className={styles.frameWrapper} data-scroll-to="frameContainer">
            <div className={styles.frame12}>
              <div className={styles.theMentorMenteeConnectAppWrapper}>
                <div className={styles.theMentorMenteeConnect}>
                  The mentor-mentee connect app is designed to offer a
                  user-friendly interface, enabling individuals to create a
                  comprehensive profile highlighting their skills, interests,
                  and areas of expertise. Mentees can search and browse through
                  a database of mentors, considering factors such as industry,
                  experience level and specialization to find the most suitable
                  match for their specific needs.
                </div>
              </div>
              <div className={styles.workerHelpingEachOtherForWrapper}>
                <img
                  className={styles.workerHelpingEachOtherForIcon}
                  alt=""
                  src="/worker-helping-each-other-for-business-group-illustration-concept-vector02-generatedremovebgpreview-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <AntButton
          className={styles.button1}
          type="dashed"
          size="large"
          shape="round"
          onClick={onButton1Click}
        >
          Join us today
        </AntButton>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Desktop1;
