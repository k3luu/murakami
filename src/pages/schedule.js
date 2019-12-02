import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DateTitle = styled.div`
  display: flex;
  align-items: center;
`;

const Date = styled.div`
  border-radius: 100px;
  border: 1px solid #000;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
`;

const Weekday = styled.h6`
  font-family: "Sacramento";
  font-size: 24px;
  margin-left: 20px;
  margin-bottom: 0;
`;

const Note = styled.div`
  margin-left: 20px;
  font-size: 12px;
`;

const Day = styled.div`
  margin-left: 20px;
  border-left: 1px solid #000;
  position: relative;
`;

const Event = styled.div`
  padding: 20px;

  &::before {
    content: ' ';
    position: absolute;
    left: -4px;
    height: 7px;
    width: 7px;
    margin-top: 7px;
    border-radius: 100px;    
    background: #000;
  }
`;


const SchedulePage = () => (
  <Layout>
    <SEO title="Schedule" />
    <h1>Schedule</h1>

    <DateTitle>
      <Date>18</Date>
      <Weekday>Friday</Weekday>
    </DateTitle>
    <Day>
      <Event>3:30 - 5 Wine Tasting [Wedding Party only]</Event>
      <Event>5 - 6 Wedding Rehearsal [Wedding Party only]</Event>
      <Event>6 - 8 Rehearsal Dinner [Wedding Party only]</Event>
      <Event>8 - 10 Cocktail Reception [Everyone invited] - We'll be hosting a cocktail reception for guests who are arriving in Sonoma early. This is an optional event so don't feel obliged but we're happy to have you join in. Please RSVP <Link to="/rsvp">here</Link>.</Event>
    </Day>

    <DateTitle>
      <Date>19</Date>
      <Weekday>Saturday</Weekday>
      <Note>The wedding ceremony will begin at 5pm at Sonoma Winery located at 25200 Arnold Dr, Sonoma, CA 95476. Reception to follow.</Note>
    </DateTitle>
    <Day>
      <Event>5:00 Guests arrive</Event>
      <Event>5:30 Ceremony begins</Event>
      <Event>6:00-7:30 Cocktail hour</Event>
      <Event>7:30 - 11:00 Dinner</Event>
      <Event>9:00 - 11 Dancing</Event>
    </Day>

    <DateTitle>
      <Date>20</Date>
      <Weekday>Sunday</Weekday>
      <Note>There will be no hosted events on Sunday. We will leave it to you to make the most of the weekend in Sonoma. Check out our recommendations on the <Link to="/travel">Travel page</Link>.</Note>
    </DateTitle>
  </Layout>
)

export default SchedulePage
