import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  bg: {
    textAlign: "center",
    backgroundColor: "grey",
    padding: 12,
    maxWidth : "100%",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.bg}>
        <Typography>
          {" "}
          Copyright © 2025 All rights reserved | Made with ♥ by Crypto Creed Team
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
