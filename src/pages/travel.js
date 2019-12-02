import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TravelPage = () => (
  <Layout>
    <SEO title="Travel" />
    <h1>Travel</h1>

    <h2>Air Travel</h2>
    <p>If you are flying in, here are the nearby airports:

San Franscisco International Airport (SFO) - 1hr 30 minute drive to Sonoma
Oakland International Airport (OAK) - 1hr 15 minute drive to Sonoma
San Jose International Airport (SJC) - 2hr drive to Sonoma
Charles M. Schulz Sonoma County Airport (STS) - You have arrived

These quotes are for drive times without traffic, and Bay Area traffic is absolutely a real thing, even on weekends. So please plan your flights and driving time accordingly.</p>

    <h2>Transport</h2>
    <p>Getting to Sonoma - Whether you're local or flying in to one of the bigger airports, getting to Sonoma is probably best by car.
    
Getting around in Sonoma - Ubers (and other Rideshare apps, I guess) are available throughout Sonoma and Napa, but ETA's can take a bit longer so please plan accordingly if you're taking one to the wedding.</p>

    <h2>Hotels / Lodging</h2>
    <p>"Hotels - More info on hotel blocks to come. Please check back.
    
Airbnbs - We tend to find that Airbnbs are more affordable, especially this time of year, so get a group together and book a house early!"</p>
    <h2>Getting to the Venue</h2>
    <p>"Address - Viansa Sonoma Winery - 25200 Arnold Dr, Sonoma, CA 95476
    
    Arrival - When you arrive at the address, take the long driveway up the hill. The ceremony will take place on the upper lawn.
    
Parking - There is plenty of parking if you choose to drive there, but we highly recommend those imbibing to take an Uber."</p>
    <h2>Recommendations</h2>
  </Layout>
)

export default TravelPage
