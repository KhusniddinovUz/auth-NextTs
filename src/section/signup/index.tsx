"use client";

import React, { useState } from "react";
import BaseLayout from "@/layouts/base-layout";
import Button from "@/components/button";
import Input from "@/components/input";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import { FlexColumnContainer, TitleWrapper } from "@/section/login/login.style";
import Typography from "@/components/typography";
import Checkbox from "@/components/input/checkbox";
import Link from "next/link";
import { useSignupUserMutation } from "@/store/actions/auth";
import useTypedSelector from "@/hooks/useTypedSelector";
import { useRouter } from "next/navigation";
import { errorHandle } from "@/utils/errorHandle";
import toast from "react-hot-toast";
import { Simulate } from "react-dom/test-utils";
import Loader from "@/utils/loader";

const SignupSection = () => {
  const loading = useTypedSelector((state) => state.auth.loading);
  const router = useRouter();
  const [mutation] = useSignupUserMutation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const signupHandler = () => {
    if (password1 !== password2) {
      errorHandle("Passwords do not match");
    } else {
      mutation({ username, email, password: password1 });
      // .unwrap()
      // .then(() => {
      //   toast.success("Successfully signed up");
      //   router.push("/");
      // })
      // .catch((error) => {
      //   errorHandle(error.data);
      // });
    }
  };

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
        onChange={(e) => {
          setUsername(e.currentTarget.value);
        }}
        icon={<PersonIcon />}
        placeholder={"Username"}
        $marginTop={"25px"}
      />
      <Input
        onChange={(e) => {
          setEmail(e.currentTarget.value);
        }}
        icon={<EnvelopeIcon />}
        placeholder={"Email"}
        $marginTop={"10px"}
      />
      <Input
        onChange={(e) => {
          setPassword1(e.currentTarget.value);
        }}
        icon={<ShieldIcon />}
        placeholder={"Password"}
        $marginTop={"10px"}
      />
      <Input
        onChange={(e) => {
          setPassword2(e.currentTarget.value);
        }}
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
      <Button
        onClick={signupHandler}
        color={"white"}
        $backgroundcolor={"primary"}
      >
        {loading ? <Loader /> : "SIGNUP"}
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
        <Link href={"/login"}>
          <Typography
            $align={"center"}
            $textSize={"paragraph"}
            $textWeight={"w_700"}
            color={"primary"}
          >
            Login now
          </Typography>
        </Link>
      </div>
    </BaseLayout>
  );
};

export default SignupSection;
