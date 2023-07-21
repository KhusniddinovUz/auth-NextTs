import React from "react";
import BaseLayout from "@/layouts/base-layout";
import Button from "@/components/button";
import Input from "@/components/input";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import { FlexColumnContainer, TitleWrapper } from "@/section/login/login.style";
import Typography from "@/components/typography";
import Checkbox from "@/components/input/checkbox";
const SignupSection = () => {
  return (
    <BaseLayout
      title={"Join us!"}
      subTitle={"Just go through the boring process creating an account."}
    >
      <TitleWrapper>
        <Typography
          $align={"center"}
          $textSize="title"
          $textWeight={"w_700"}
          color={"black"}
        >
          Create your account
        </Typography>
        <Typography
          $align={"center"}
          $textSize={"subTitle"}
          $textWeight={"w_400"}
          color={"text"}
        >
          Unlock all Features!
        </Typography>
      </TitleWrapper>
      <Input
        icon={<PersonIcon />}
        placeholder={"Username"}
        $marginTop={"25px"}
      />
      <Input
        icon={<EnvelopeIcon />}
        placeholder={"Email"}
        $marginTop={"10px"}
      />
      <Input
        icon={<ShieldIcon />}
        placeholder={"Password"}
        $marginTop={"10px"}
      />
      <Input
        icon={<ShieldIcon />}
        placeholder={"Confirm Password"}
        $marginTop={"10px"}
      />
      <FlexColumnContainer>
        <div className="flex-center-row">
          <Checkbox />
          <Typography
            $textSize={"paragraph"}
            $textWeight={"w_400"}
            color={"text"}
            $align={"left"}
          >
            Accept
          </Typography>
          <Typography
            $textSize={"paragraph"}
            $textWeight={"w_400"}
            color={"primary"}
          >
            terms and condition
          </Typography>
        </div>
      </FlexColumnContainer>
      <Button color={"white"} $backgroundcolor={"primary"}>
        SIGNUP
      </Button>
      <div className="flex-center-row">
        <Typography
          $align={"center"}
          $textSize={"paragraph"}
          $textWeight={"w_400"}
          color={"text"}
        >
          You have account?
        </Typography>
        <Typography
          $align={"center"}
          $textSize={"paragraph"}
          $textWeight={"w_700"}
          color={"primary"}
        >
          Login now
        </Typography>
      </div>
    </BaseLayout>
  );
};

export default SignupSection;
