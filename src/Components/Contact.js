import React, { useState } from "react";
import {
  Button,
  Card,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { darkTheme } from "../theme"; // ✅ extracted theme
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    marginLeft: 560,
    color: "orange",
    fontFamily: "Open Sans",
  },
  tagline: {
    textAlign: "center",
    color: "darkgrey",
    fontWeight: 200,
  },
  location: {
    margin: "15px 0 auto 560px",
  },
  email: {
    margin: "15px 0 auto 550px",
  },
  call: {
    margin: "15px 0 auto 590px",
  },
  leftContent: {
    margin: "-300px 0 auto 300px",
  },
  rightContent: {
    margin: "15px 0 auto 0",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    margin: "50px 630px auto 150px",
    padding: "18px",
  },
  submitButton: {
    width: 100,
    height: 45,
    marginLeft: 220,
    backgroundColor: "orange",
  },
  iconLocation: {
    margin: "auto 0 1px 650px",
  },
  iconEmail: {
    margin: "15px 0 auto 655px",
  },
  iconPhone: {
    margin: "15px 0 auto 655px",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handles form submission
  const handleSubmit = async () => {
    if (!name || !email || !message) {
      setAlert({
        open: true,
        message: "Please fill all the Fields",
        type: "error",
      });
      return;
    }

    const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regExp.test(email)) {
      setAlert({
        open: true,
        message: "Please Enter Valid Email Address!",
        type: "error",
      });
    } else {
      setAlert({
        open: true,
        message: `Your Feedback/Query Has Been Sent Successfully!`,
        type: "success",
      });
      addDoc(messageRef, {
        name: name,
        email: email,
        message: message,
      });
    }
  };

  return (
    <>
      <Typography variant="h3" className={classes.title}>
        <div id="contact">Contact</div>
      </Typography>

      <br />

      <Typography variant="h5" className={classes.tagline}>
        We're always happy to hear from our visitors & <br />
        answer any questions you may have about cryptocurrencies, Please give us
        feedback.
      </Typography>

      <br />

      <div className={classes.rightContent}>
        <ThemeProvider theme={darkTheme}>
          <Card className={classes.card}>
            <TextField
              variant="filled"
              label="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />

            <TextField
              variant="filled"
              type="email"
              label="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />

            <TextField
              variant="filled"
              label="Enter Your Feedback/Query"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.submitButton}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Card>
        </ThemeProvider>
      </div>

      <div className={classes.leftContent}>
        <RoomIcon className={classes.iconLocation} htmlColor="orange" />
        <Typography variant="h6" className={classes.location}>
          Vansda,Navsari,Gujarat
        </Typography>

        <EmailIcon className={classes.iconEmail} htmlColor="orange" />
        <Typography variant="h6" className={classes.email}>
          hrsh.parakh02@gmail.com
        </Typography>

        <PhoneIcon className={classes.iconPhone} htmlColor="orange" />
        <Typography variant="h6" className={classes.call}>
          +91 94275 94784
        </Typography>

        <br />
        <br /> <br /> <br />
      </div>
    </>
  );
};

export default Contact;
