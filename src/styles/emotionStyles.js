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
    padding-top: 120px;
  }

  > div.notice {
    background-color: #b1e5cd91;
    color: #095122;
    font-weight: 600;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 1px 26px 6px #b1e5cd;
    margin-bottom: 50px;

    .notice__header {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      svg {
        transform: rotate(-25deg);
        animation: bell 4s 2s infinite;

        &:hover {
          animation: none;
        }
      }

      h3 {
        margin: 0 10px;
      }
    }

    p {
      letter-spacing: 0.2px;
    }
  }

  h1 {
    text-align: center;
  }

  img {
    border-radius: 4px;
  }

  @-webkit-keyframes bell {
    0%,
    10%,
    25%,
    40%,
    50% {
      -webkit-transform: translateY(0) rotate(-25deg);
      transform: translateY(0) rotate(-25deg);
    }

    20% {
      -webkit-transform: translateY(-20px) rotate(-25deg);
      transform: translateY(-20px) rotate(-25deg);
    }

    30% {
      -webkit-transform: translateY(-5px) rotate(-25deg);
      transform: translateY(-5px) rotate(-25deg);
    }
  }

  @keyframes bell {
    0%,
    10%,
    25%,
    40%,
    50% {
      -webkit-transform: translateY(0) rotate(-25deg);
      transform: translateY(0) rotate(-25deg);
    }

    20% {
      -webkit-transform: translateY(-20px) rotate(-25deg);
      transform: translateY(-20px) rotate(-25deg);
    }

    30% {
      -webkit-transform: translateY(-5px) rotate(-25deg);
      transform: translateY(-5px) rotate(-25deg);
    }
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
  margin: 15px 0;

  &.center {
    text-align: center;
  }
`

export const TextPhotoSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  .photo {
    width: 50%;
    min-width: 300px;
    margin: 0 30px;

    &.first {
      margin-left: 0;
    }
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

  &.rsvp {
    padding: 0;
  }
`

export const Linebreak = styled.div`
  width: 60px;
  height: 1px;
  background: ${palette.primaryColor};
  margin: 60px auto;
`
