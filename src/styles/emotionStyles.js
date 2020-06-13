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
    background-color: ${palette.white};
    color: #3c6373;
    font-weight: 600;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 1px 26px 6px #75adc170;
    margin-bottom: 50px;
    position: relative;

    &:before {
      content: "";
      -webkit-animation: pulsate 2s ease-out;
      -webkit-animation-iteration-count: infinite;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;
      border-radius: 10px;
    }

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

  @-webkit-keyframes pulsate {
    0% {
      -webkit-transform: scale(0.1, 0.1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1.2, 1.2);
      opacity: 0;
    }
  }

  @keyframes pulsate {
    0% {
      box-shadow: 0 0 0 0px #75adc170;
    }
    100% {
      box-shadow: 0 0 25px 30px rgba(0, 0, 0, 0);
    }
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
