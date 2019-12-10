import React from "react"
import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as palette from "../styles/palette"
import * as emotionStyles from "../styles/emotionStyles"

const DateTitle = styled.div`
  display: flex;
  align-items: center;
  height: 80px;

  @media (max-width: 1023px) {
    height: auto;
    align-items: baseline;
    margin: 20px 0;
  }
`

const Date = styled.div`
  background: ${palette.primaryColor};
  border-radius: 100px;
  border: 1px solid ${palette.primaryColor};
  color: ${palette.white};
  font-weight: bold;
  height: 50px;
  min-height: 50px;
  width: 50px;
  min-width: 50px;
  line-height: 50px;
  text-align: center;
`

const DateSubtitle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 1023px) {
    display: block;
  }
`

const Weekday = styled.h6`
  margin-right: 20px;
`

const Note = styled.p`
  font-size: 14px;
  margin: 10px 20px 10px 0;
  max-width: 500px;
`

const Day = styled.div`
  margin-left: 25px;
  border-left: 1px solid ${palette.primaryColor};
  position: relative;
`

const Event = styled.div`
  font-size: 18px;
  padding: 20px 50px;

  &::before {
    content: " ";
    position: absolute;
    left: -4px;
    height: 7px;
    width: 7px;
    margin-top: 7px;
    border-radius: 100px;
    background: ${palette.primaryColor};
  }

  .title {
    font-weight: 500;
  }

  .time {
    font-size: 16px;
    font-style: italic;
    padding: 5px 0;
  }
`

const SchedulePage = () => {
  const photo = useStaticQuery(graphql`
    query {
      pagePhoto: file(relativePath: { eq: "schedule.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 6000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Schedule" />
      <Img
        className="page__image"
        style={{ maxHeight: 600 }}
        fluid={photo.pagePhoto.childImageSharp.fluid}
      />
      <emotionStyles.pageContainer>
        <h1>Schedule</h1>

        <DateTitle>
          <Date>18</Date>
          <DateSubtitle>
            <Weekday>Friday</Weekday>
          </DateSubtitle>
        </DateTitle>
        <Day>
          <Event>
            <div class="title">Wine Tasting [Wedding Party only]</div>
            <div class="time">3:30 PM - 5 PM</div>
          </Event>
          <Event>
            <div class="title">Wedding Rehearsal [Wedding Party only]</div>
            <div class="time">5 PM - 6 PM</div>
          </Event>
          <Event>
            <div class="title">Rehearsal Dinner [Wedding Party only]</div>
            <div class="time">6 PM - 8 PM</div>
          </Event>
          <Event>
            <div class="title">Cocktail Reception [Everyone invited]</div>
            <div class="time">8 PM - 10 PM</div>
            <Note>
              We'll be hosting a cocktail reception for guests who are arriving
              in Sonoma early. This is an optional event so don't feel obliged
              but we're happy to have you join in. Please RSVP{" "}
              <Link to="/rsvp">here</Link>.
            </Note>
          </Event>
        </Day>

        <DateTitle>
          <Date>19</Date>
          <DateSubtitle>
            <Weekday>Saturday</Weekday>
            <Note>
              The wedding ceremony will begin at 5pm at Sonoma Winery located at{" "}
              <a
                href="http://maps.google.com/maps?q=25200 Arnold Dr, Sonoma, CA 95476"
                target="_blank"
              >
                25200 Arnold Dr, Sonoma, CA 95476
              </a>
              . Reception to follow.
            </Note>
          </DateSubtitle>
        </DateTitle>
        <Day>
          <Event>
            <div class="title">Guests arrive</div>
            <div class="time">5:00 PM</div>
          </Event>
          <Event>
            <div class="title">Ceremony begins</div>
            <div class="time">5:30 PM</div>
          </Event>
          <Event>
            <div class="title">Cocktail hour</div>
            <div class="time">6:00 PM - 7:30 PM</div>
          </Event>
          <Event>
            <div class="title">Dinner</div>
            <div class="time">7:30 PM - 11:00 PM</div>
          </Event>
          <Event>
            <div class="title">Dancing</div>
            <div class="time">9:00 PM - 11 PM</div>
          </Event>
        </Day>

        <DateTitle>
          <Date>20</Date>
          <DateSubtitle>
            <Weekday>Sunday</Weekday>
            <Note>
              There will be no hosted events on Sunday. We will leave it to you
              to make the most of the weekend in Sonoma. Check out our
              recommendations on the <Link to="/travel">Travel page</Link>.
            </Note>
          </DateSubtitle>
        </DateTitle>
      </emotionStyles.pageContainer>
    </Layout>
  )
}

export default SchedulePage
