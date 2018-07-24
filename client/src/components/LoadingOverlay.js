import React, { Component } from "react";
import styled from "styled-components";

const LoadingOverlay = props => {

  return (
    <LoadingDiv>
      Loading network
    </LoadingDiv>
  )
};

export default LoadingOverlay;

const LoadingDiv = styled.div`
  color: white;
`


