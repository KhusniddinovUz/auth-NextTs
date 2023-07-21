"use client";

import React, { useState } from "react";
import { TitleWrapper } from "@/section/login/login.style";
import Typography from "@/components/typography";
import Button from "@/components/button";
import BaseLayout from "@/layouts/base-layout";
import OtpInput from "react-otp-input";
import { OtpInputContainer, OtpInputSeperator } from "@/section/otp/otp.style";

const OtpSection = () => {
  const [otp, setOtp] = useState("");

  return (
    <BaseLayout
      title={"It's just OTP verification"}
      subTitle={"You are one step away from recovering your password."}
    >
      <TitleWrapper>
        <Typography
          $align={"center"}
          $textSize="title"
          $textWeight={"w_700"}
          color={"black"}
        >
          Enter OTP
        </Typography>
        <div className="flex-center-row" style={{ flexWrap: "wrap" }}>
          <Typography
            $align={"center"}
            $textSize={"subTitle"}
            $textWeight={"w_400"}
            color={"text"}
          >
            Sent OTP on
          </Typography>
          <Typography
            $textSize={"subTitle"}
            $textWeight={"w_600"}
            color={"primary"}
          >
            johndoe@gmail.com
          </Typography>
        </div>
      </TitleWrapper>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        placeholder={"------"}
        renderInput={(props) => (
          <OtpInputContainer>
            <input {...props} />
          </OtpInputContainer>
        )}
        renderSeparator={<OtpInputSeperator />}
        inputStyle={{
          border: "none",
          width: "100%",
          height: "100%",
          outline: "none",
          borderRadius: "10px",
          backgroundColor: "rgba(128, 152, 249, 0.10)",
          padding: "10px",
        }}
      />
      <Button color="white" $backgroundcolor="primary">
        SUBMIT
      </Button>
      <Typography
        $textSize={"paragraph"}
        $textWeight={"w_700"}
        color={"primary"}
        $align={"center"}
      >
        Resent OTP
      </Typography>
    </BaseLayout>
  );
};

export default OtpSection;
