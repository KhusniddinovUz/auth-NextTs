import React from "react";
import { TitleWrapper } from "@/section/login/login.style";
import Typography from "@/components/typography";
import Input from "@/components/input";
import Button from "@/components/button";
import BaseLayout from "@/layouts/base-layout";
import ShieldIcon from "@/components/icons/ShieldIcon";

const NewPasswordSection = () => {
  return (
    <BaseLayout
      title={"This is the end."}
      subTitle={
        "After entering the new password you will gain access to your account"
      }
    >
      <TitleWrapper>
        <Typography
          $align={"center"}
          $textSize="title"
          $textWeight={"w_700"}
          color={"black"}
        >
          Enter your new password
        </Typography>
        <Typography
          $align={"center"}
          $textSize={"subTitle"}
          $textWeight={"w_400"}
          color={"text"}
        >
          This is the last step in recovering your password.
        </Typography>
      </TitleWrapper>
      <Input icon={<ShieldIcon />} placeholder="Password" $marginTop={"25px"} />
      <Input
        icon={<ShieldIcon />}
        placeholder="Confirm Password"
        $marginTop={"10px"}
      />
      <Button color="white" $backgroundcolor="primary">
        SUBMIT
      </Button>
    </BaseLayout>
  );
};

export default NewPasswordSection;
