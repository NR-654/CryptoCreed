import React, { useState } from "react";
import { Box, Button, makeStyles, TextField } from "@material-ui/core";


 const useStyles = makeStyles((theme) => ({
    recaptchaContainer: {
      marginLeft : 30,
    },
    phone: {
      height : "20px",
    },
  }));

 return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "18px",
          marginTop : "-5px",
        }}
      >
        <TextField
          variant="outlined"
          type="textarea"
          label="Enter Name"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          fullWidth
        />

        <div className={classes.phone}>
          <PhoneInput
            defaultCountry="IN"
            value={number}
            onChange={setNumber}
            placeholder="Enter Phone Number"
          />
        </div>

        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "orange" }}
          onClick={getOtp}
        >
          Send OTP
        </Button>
        <div id="recaptcha-container" className={classes.recaptchaContainer} />

        <TextField
          type="number"
          variant="outlined"
          label="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "orange" }}
          onClick={verifyOtp}
        >
          Verify OTP
        </Button>

        <TextField
          variant="outlined"
          type="password"
          label="Enter Secret Key"
          value={secreteKey}
          onChange={(e) => setSecreteKey(e.target.value)}
          fullWidth
        />

        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "orange" }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </>
  );
};

export default Login;
