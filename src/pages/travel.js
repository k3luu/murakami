import React from "react"
import styled from "@emotion/styled"
import FlightRoundedIcon from "@material-ui/icons/FlightRounded"
import DriveEtaRoundedIcon from "@material-ui/icons/DriveEtaRounded"
import HotelRoundedIcon from "@material-ui/icons/HotelRounded"
import LocationCityRoundedIcon from "@material-ui/icons/LocationCityRounded"
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Row = styled.div`
  display: flex;
  margin: 50px 0;

  @media (max-width: 767px) {
    display: block;
  }

  div:first-child {
    margin-left: 0;
  }
`

const Card = styled.div`
  width: 32%;
  margin: 0 10px;

  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
  }

  h2 > svg {
    margin: -2px 10px -2px 0;
  }
`

const TravelPage = () => (
  <Layout>
    <SEO title="Travel" />
    <h1>Travel</h1>

    <Row>
      <Card>
        <h2>
          <FlightRoundedIcon />
          Air Travel
        </h2>
        <p>
          If you are flying in, here are the nearby airports:
          <br />
          <br />
          <ol>
            <li>
              San Franscisco International Airport (SFO) - 1hr 30 minute drive
              to Sonoma
            </li>
            <li>
              Oakland International Airport (OAK) - 1hr 15 minute drive to
              Sonoma
            </li>
            <li>San Jose International Airport (SJC) - 2hr drive to Sonoma</li>
            <li>
              Charles M. Schulz Sonoma County Airport (STS) - You have arrived
            </li>
          </ol>
          {/* San Franscisco International Airport (SFO) - 1hr 30 minute drive to
          Sonoma
          <br />
          Oakland International Airport (OAK) - 1hr 15 minute drive to Sonoma
          <br />
          San Jose International Airport (SJC) - 2hr drive to Sonoma
          <br />
          Charles M. Schulz Sonoma County Airport (STS) - You have arrived
          <br /> */}
          <br />
          These quotes are for drive times without traffic, and Bay Area traffic
          is absolutely a real thing, even on weekends. So please plan your
          flights and driving time accordingly.
        </p>
      </Card>
      <Card>
        <h2>
          <DriveEtaRoundedIcon />
          Transport
        </h2>
        <p>
          Getting to Sonoma - Whether you're local or flying in to one of the
          bigger airports, getting to Sonoma is probably best by car.
          <br />
          <br />
          Getting around in Sonoma - Ubers (and other Rideshare apps, I guess)
          are available throughout Sonoma and Napa, but ETA's can take a bit
          longer so please plan accordingly if you're taking one to the wedding.
        </p>
      </Card>
      <Card>
        <h2>
          <HotelRoundedIcon />
          Hotels / Lodging
        </h2>
        <p>
          Hotels - More info on hotel blocks to come. Please check back.
          <br />
          <br />
          Airbnbs - We tend to find that Airbnbs are more affordable, especially
          this time of year, so get a group together and book a house early!
        </p>
      </Card>
    </Row>

    <Row>
      <Card>
        <h2>
          <LocationCityRoundedIcon />
          Getting to the Venue
        </h2>
        <p>
          Address - Viansa Sonoma Winery -{" "}
          <a
            href="http://maps.google.com/maps?q=25200 Arnold Dr, Sonoma, CA 95476"
            target="_blank"
          >
            25200 Arnold Dr, Sonoma, CA 95476
          </a>
          <br />
          <br />
          Arrival - When you arrive at the address, take the long driveway up
          the hill. The ceremony will take place on the upper lawn.
          <br />
          <br />
          Parking - There is plenty of parking if you choose to drive there, but
          we highly recommend those imbibing to take an Uber.
        </p>
      </Card>
      <Card>
        <h2>
          <StarBorderRoundedIcon />
          Recommendations
        </h2>
      </Card>
      <Card />
    </Row>
  </Layout>
)

export default TravelPage
