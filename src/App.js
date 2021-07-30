import React, { useState } from "react";
import "./styles.css";
import bg from "./images/background.svg";
import happy from "./images/happy.svg";
import unhappy from "./images/unhappy.svg";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";

import CloseIcon from "@material-ui/icons/Close";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

let dateInput = "";
let luckyNo = 0;

const happyImgDiv = (
  <img alt="happyImage" src={happy} width="100%" height="200px" />
);
const unhappyImgDiv = (
  <img alt="unhappyImage" src={unhappy} width="100%" height="200px" />
);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const [displayResult, setDisplayResult] = useState(["", ""]);

  function checkBtnHandler(e) {
    const dateArray = dateInput.split("-");
    let sum = 0;

    dateArray.map((string) => {
      for (let i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
    });

    if (sum % Number(luckyNo) === 0) {
      setDisplayResult(["Hurray!!You are a lucky person!", happyImgDiv]);
    } else {
      setDisplayResult([
        "Oops!!Your birthday is not a lucky number!",
        unhappyImgDiv
      ]);
    }
  }

  return (
    <div className="App">
      <div
        className="parallax"
        style={{
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundImage: `url("${bg}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div className="titleofpage">
          <h1>Is Your Birthday Lucky?</h1>
          <a href="#mainSection">scroll down to checkout</a>
        </div>
      </div>

      <section id="mainSection" className="section">
        <div>
          {/* <div className="notice">
            <strong>Privacy Notice!</strong> We are not storing your data.
          </div> */}

          <Collapse in={open}>
            <Alert
              severity="info"
              style={{
                padding: "0.5rem 1rem"
              }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <span id="notice">
                <strong>Privacy Notice!</strong> we are not storing your data
              </span>
            </Alert>
          </Collapse>
        </div>

        <h2>Enter Your Birthdate and lucky number to continue...</h2>
        <form onSubmit={checkBtnHandler}>
          <label className="label" htmlFor="datePicker">
            Select your Birth date:
          </label>
          <input
            id="datePicker"
            onChange={(e) => {
              dateInput = e.target.value;
            }}
            type="date"
            required
          />

          <label className="label" htmlFor="luckyNo">
            Enter your Lucky Number:
          </label>
          <input
            id="luckyNo"
            min="1"
            step="1"
            required
            onChange={(e) => {
              luckyNo = e.target.value;
            }}
            type="number"
          />
          <button type="submit">check</button>
        </form>

        <div className="output">
          <div className="label">{displayResult[0]}</div>
          {displayResult[1]}
        </div>

        <footer>
          <ul>
            <li className="footerLink">
              <a href="https://github.com/SuryanshChopra">
                {" "}
                <GitHubIcon />
              </a>
            </li>
            <li className="footerLink">
              <a href="https://www.instagram.com/choprasuryansh/">
                {" "}
                <InstagramIcon />
              </a>
            </li>
            <li className="footerLink">
              <a href="https://www.linkedin.com/in/suryanshchopra">
                {" "}
                <LinkedInIcon />
              </a>
            </li>
            <li className="footerLink">
              <a href="https://ankitabagale-portfolio.netlify.app/">
                <i className="fas fa-briefcase"></i>
              </a>
            </li>
          </ul>

          <div className="legacyText">
            © 2021 | SuryanshChopra |{" "}
            <a
              href="#alertBox"
              onClick={() => {
                setDisplayAlert("flex");
              }}
              style={{ cursor: "pointer", color: "Black" }}
            >
              Privacy Policy
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}
