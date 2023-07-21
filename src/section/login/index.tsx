import React from "react";
import BaseLayout from "@/layouts/base-layout";
import Input from "@/components/input";
import Button from "@/components/button";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import Typography from "@/components/typography";
import Checkbox from "@/components/input/checkbox";
import { FlexColumnContainer, TitleWrapper } from "@/section/login/login.style";
import Link from "next/link";

const LoginSection = () => {
  return (
    <BaseLayout
      title={"Connect with any device."}
      subTitle={"Everything you need is an internet connection."}
    >
      <TitleWrapper>
        <Typography
          $align={"center"}
          $textSize="title"
          $textWeight={"w_700"}
          color={"black"}
        >
          Login to your Account
        </Typography>
        <Typography
          $align={"center"}
          $textSize={"subTitle"}
          $textWeight={"w_400"}
          color={"text"}
        >
          Welcome back! Select method to log in!
        </Typography>
      </TitleWrapper>
      <Input icon={<EnvelopeIcon />} placeholder="Email" $marginTop={"25px"} />
      <Input icon={<ShieldIcon />} placeholder="Password" $marginTop={"10px"} />
      <FlexColumnContainer>
        <div className="flex-center-row">
          <Checkbox />
          <Typography
            $textSize={"paragraph"}
            $textWeight={"w_400"}
            color={"text"}
            $align={"left"}
          >
            Remember me
          </Typography>
        </div>
        <Link href={"/forgot-password"}>
          <Typography
            $textSize={"paragraph"}
            $textWeight={"w_600"}
            color={"primary"}
            $align={"right"}
          >
            Forgot Password?
          </Typography>
        </Link>
      </FlexColumnContainer>
      <Button color="white" $backgroundcolor="primary">
        LOG IN
      </Button>
      <div className="flex-center-row">
        <Typography
          $align={"center"}
          $textSize={"paragraph"}
          $textWeight={"w_400"}
          color={"text"}
        >
          Don't have account?
        </Typography>
        <Link href={"/signup"}>
          <Typography
            $align={"center"}
            $textSize={"paragraph"}
            $textWeight={"w_700"}
            color={"primary"}
          >
            Create an account
          </Typography>
        </Link>
      </div>
    </BaseLayout>
  );
};

export default LoginSection;
