import React from "react"
import styled from "@emotion/styled"

export const Section = styled.div`
  padding-bottom: 50px;
  max-width: 950px;
  margin: 0 auto;

  @media (max-width: 1023px) {
    margin: 80px 20px;
  }
`

export const Title = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 4px;
`

export const Subtitle = styled.div`
  font-weight: 500;
`

export const Text = styled.p`
  margin: 30px 0;
`

export const pageContainer = styled.div`
  max-height: calc(100vh - 90px);
  height: calc(100vh - 90px);
  overflow: auto;
  padding: 20px;
  flex-grow: 1;

  @media (max-width: 1023px) {
    max-height: unset;
    height: unset;
  }
`
