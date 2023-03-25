import React from "react";
import styled from "styled-components";
import AuthLayout from "../../components/AuthLayout";
import Logo from "../../components/Logo";
import NewPasswordForm from "../../components/NewPasswordForm";

export default function NewPassword() {
  const StyledSpan = styled.span`
    color: ${(props) => props.theme.palette.lightYellow};
    cursor: pointer;
  `;

  const Line = styled.hr`
    width: 100%;
    background-color: #c6c6c6;
  `;

  const StyledMsg = styled.p`
    color: ${(props) => props.theme.palette.text.main};
  `;

  return (
    <AuthLayout height={"75%"}>
      <Logo width={"85px"} height={"85px"} />
      <h3 className='welcome-text'>Welcome to BugHive</h3>
      <NewPasswordForm />
      <div className='login-footer'>
        <StyledSpan>Forgot Password</StyledSpan>
        <Line />
        <StyledMsg>
          New to BugHive <StyledSpan>SignUp</StyledSpan>
        </StyledMsg>
      </div>
    </AuthLayout>
  );
}
