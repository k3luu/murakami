import styled from "@emotion/styled"
import * as palette from "./palette"

export const Section = styled.div`
  padding-bottom: 50px;
  max-width: 950px;
  margin: 0 auto;

  @media (max-width: 1023px) {
    margin: 80px 20px;
  }

  &.home {
    padding-top: 80px;
  }

  h1 {
    text-align: center;
  }

  .center {
    text-align: center;
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

export const TextPhotoSection = styled.div`
  display: flex;

  .photo {
    width: 50%;
    min-width: 300px;
    margin: 0 30px;
  }

  @media (max-width: 1023px) {
    display: block;

    .photo {
      margin: 0;
      min-width: unset;
      width: 100%;
    }
  }
`

export const pageContainer = styled.div`
  overflow: auto;
  padding: 20px;
  flex-grow: 1;
  margin-left: 500px;

  @media (max-width: 1023px) {
    max-height: unset;
    height: unset;
    margin-left: unset;
  }
`

export const Linebreak = styled.div`
  width: 60px;
  height: 2px;
  background: ${palette.primaryColor};
  margin: 60px auto;
`
