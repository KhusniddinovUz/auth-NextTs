import React from "react";
import { TitleWrapper } from "@/section/login/login.style";
import Typography from "@/components/typography";
import Input from "@/components/input";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import Button from "@/components/button";
import BaseLayout from "@/layouts/base-layout";

const ForgotPasswordSection = () => {
  return (
    <BaseLayout
      title={"Forgot your password?"}
      subTitle={"You can get them back easily."}
    >
      <TitleWrapper>
        <Typography
          $align={"center"}
          $textSize="title"
          $textWeight={"w_700"}
          color={"black"}
        >
          Forgot your password?
        </Typography>
        <Typography
          $align={"center"}
          $textSize={"subTitle"}
          $textWeight={"w_400"}
          color={"text"}
        >
          Enter your email and get OTP to verification.
        </Typography>
      </TitleWrapper>
      <Input icon={<EnvelopeIcon />} placeholder="Email" $marginTop={"25px"} />
      <Input
        icon={<EnvelopeIcon />}
        placeholder="Repeat Email"
        $marginTop={"10px"}
      />
      <Button color="white" $backgroundcolor="primary">
        GET OTP
      </Button>
    </BaseLayout>
  );
};

export default ForgotPasswordSection;
