import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => (
  <Wrapper>
    <Header />
    <InnerWrapper>
      <Outlet />
      <Footer />
    </InnerWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const InnerWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
