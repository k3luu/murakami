import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DateTitle = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const Date = styled.div`
  border-radius: 100px;
  border: 1px solid #000;
  height: 50px;
  width: 50px;
  line-height: 50px;
  text-align: center;
`;

const Weekday = styled.h6`
  font-family: "Sacramento";
  font-size: 28px;
  letter-spacing: 1.2px;
  margin: 0 20px;
`;

const Note = styled.div`
  font-size: 12px;
  margin: 10px 0;
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
      <Event>
        <div>Wine Tasting [Wedding Party only]</div>
        <div>3:30 - 5</div>
      </Event>
      <Event>
        <div>Wedding Rehearsal [Wedding Party only]</div>
        <div>5 - 6</div>
      </Event>
      <Event>
        <div>Rehearsal Dinner [Wedding Party only]</div>
        <div>6 - 8</div>
      </Event>
      <Event>
        <div>Cocktail Reception [Everyone invited]</div>
        <div>8 - 10</div>
        <Note>We'll be hosting a cocktail reception for guests who are arriving in Sonoma early. This is an optional event so don't feel obliged but we're happy to have you join in. Please RSVP <Link to="/rsvp">here</Link>.</Note>
      </Event>
    </Day>

    <DateTitle>
      <Date>19</Date>
      <Weekday>Saturday</Weekday>
      <Note>The wedding ceremony will begin at 5pm at Sonoma Winery located at 25200 Arnold Dr, Sonoma, CA 95476. Reception to follow.</Note>
    </DateTitle>
    <Day>
      <Event>
        <div>Guests arrive</div>
        <div>5:00</div>
      </Event>
      <Event>
        <div>Ceremony begins</div>
        <div>5:30</div>
      </Event>
      <Event>
        <div>Cocktail hour</div>
        <div>6:00-7:30</div>
      </Event>
      <Event>
        <div>Dinner</div>
        <div>7:30 - 11:00</div></Event>
      <Event>
        <div>Dancing</div>
        <div>9:00 - 11</div>
      </Event>
    </Day>

    <DateTitle>
      <Date>20</Date>
      <Weekday>Sunday</Weekday>
      <Note>There will be no hosted events on Sunday. We will leave it to you to make the most of the weekend in Sonoma. Check out our recommendations on the <Link to="/travel">Travel page</Link>.</Note>
    </DateTitle>
  </Layout>
)

export default SchedulePage
