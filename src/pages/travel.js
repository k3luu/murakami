import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import Fab from "@material-ui/core/Fab"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted"
import FlightRoundedIcon from "@material-ui/icons/FlightRounded"
import DriveEtaRoundedIcon from "@material-ui/icons/DriveEtaRounded"
import HotelRoundedIcon from "@material-ui/icons/HotelRounded"
import LocationCityRoundedIcon from "@material-ui/icons/LocationCityRounded"
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded"
import { withStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as emotionStyles from "../styles/emotionStyles"
import * as palette from "../styles/palette"

const MenuFab = withStyles({
  root: {
    backgroundColor: "rgba(255,255,255)",
    boxShadow:
      "0px -1px 1px -1px rgba(0,0,0,0.2), 1px 1px 14px 0px rgba(0,0,0,0.14), -1px 2px 17px 0px rgba(0,0,0,0.12)",
    position: "fixed",
    bottom: 30,
    right: 30,
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, visibility 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover": {
      backgroundColor: "rgba(255,255,255)",
      boxShadow:
        "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
    },
  },
})(Fab)

const Card = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 100px 0;

  @media (max-width: 767px) {
    padding: 60px 0;
  }

  h2 > svg {
    margin: -2px 10px -2px 0;
  }
`

const TravelNav = styled.ol`
  margin: 0 40px;

  li {
    list-style-type: upper-roman;
  }
`

const isBrowser = typeof window !== `undefined`

const TravelPage = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [coordinates, setCoordinates] = useState({
    x: isBrowser ? window.scrollX : 0,
    y: isBrowser ? -window.scrollY : 0,
    direction: "",
  })

  const listener = () => {
    console.log("scrolling", coordinates)
    const newScrollY = isBrowser ? -window.scrollY : 0
    setCoordinates(prev => ({
      x: isBrowser ? window.scrollX : 0,
      y: newScrollY,
      direction: prev.y > newScrollY ? "down" : "up",
    }))
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => window.removeEventListener("scroll", listener)
  }, [coordinates])

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const photo = useStaticQuery(graphql`
    query {
      pagePhoto: file(relativePath: { eq: "travel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 6000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout className="travel">
      <SEO title="Travel" />
      <Img
        className="page__image"
        fluid={photo.pagePhoto.childImageSharp.fluid}
      />

      <emotionStyles.pageContainer>
        <h1>Travel</h1>

        <TravelNav>
          <li>
            <a onClick={() => scrollTo("#air-travel")}>Air Travel</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#transport")}>Transport</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#hotels")}>Hotels/Lodging</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#venue")}>Venue</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#recs")}>Recommendations</a>
          </li>
        </TravelNav>

        <Card id="air-travel">
          <h2>
            <FlightRoundedIcon />
            Air Travel
          </h2>
          <p>If you are flying in, here are the nearby airports:</p>

          <ol>
            <li>
              <u>San Franscisco International Airport (SFO)</u> - 1hr 30 minute
              drive to Sonoma
            </li>
            <li>
              <u>Oakland International Airport (OAK)</u> - 1hr 15 minute drive
              to Sonoma
            </li>
            <li>
              <u>San Jose International Airport (SJC)</u> - 2hr drive to Sonoma
            </li>
            <li>
              <u>Charles M. Schulz Sonoma County Airport (STS)</u> - You have
              arrived
            </li>
          </ol>
          <p>
            These quotes are for drive times without traffic, and Bay Area
            traffic is absolutely a real thing, even on weekends. So please plan
            your flights and driving time accordingly.
          </p>
        </Card>
        <Card id="transport">
          <h2>
            <DriveEtaRoundedIcon />
            Transport
          </h2>
          <h5>Getting to Sonoma</h5>
          <p>
            Whether you're local or flying in to one of the bigger airports,
            getting to Sonoma is probably best by car.
          </p>
          <p>
            If you'd like to rent a car, you can get a discount by booking
            through this{" "}
            <a
              href="https://www.avis.com/content/dam/avis/na/us/common/bridge/meetings/weddings.html?AWD=E779930&amp;NAME=Luu-Murakami+Wedding&amp;FDATE=09182020&amp;TDATE=09202020&amp;LOCATION2=&amp;LOCATION1=San+Francisco,+CA&amp;ARCIATA=&amp;EVENT=0&amp;AA=0"
              target="_blank"
            >
              Avis Rental Car link
            </a>{" "}
            with a unique discount code for our wedding. The discount is valid
            for the seven days preceding and following the wedding.
          </p>
          <br />
          <h5>Getting around in Sonoma</h5>
          <p>
            Ubers (and other Rideshare apps, I guess) are available throughout
            Sonoma and Napa, but ETA's can take a bit longer so please plan
            accordingly if you're taking one to the wedding.
          </p>
        </Card>
        <Card id="hotels">
          <h2>
            <HotelRoundedIcon />
            Hotels / Lodging
          </h2>

          <h5>Hotels</h5>
          <ul>
            <li>
              <div>Sheraton Sonoma Wine Country</div>
              <p>
                We have a block of rooms set aside for guests to book at a
                discounted rate of $229 per night with a two-night minimum. You
                can book using the link below or by calling 1 (888) 627-8458.
                Let them know you're booking with the Luu & Murakami Wedding
                Block. The group rate can also be extended based upon hotel
                availability. The hotel is about 20-30 min drive to the wedding
                venue.
              </p>
              <div>
                <a
                  href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1576001826620&key=GRP&app=resvlink"
                  target="_blank"
                >
                  https://www.marriott.com/event-reservations/reservation-link.mi?id=1576001826620&key=GRP&app=resvlink
                </a>
              </div>
            </li>
            <li>
              <div>Courtyard Novato Marin/Sonoma</div>
              <p>
                We have a block of rooms set aside for guests to book at a
                discounted rate of $139 per night with a two-night minimum. You
                can book using the link below or by calling 1(800) 321-2211 or
                (415) 883-8950. Let them know you're booking with the Jenny Luu
                group. The hotel is about 20-30 min drive to the wedding venue.
              </p>
              <div>
                <a
                  href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1576607783144&key=GRP&app=resvlink"
                  target="_blank"
                >
                  https://www.marriott.com/event-reservations/reservation-link.mi?id=1576607783144&key=GRP&app=resvlink
                </a>
              </div>
            </li>
            <li>
              <div>The Lodge at Sonoma Renaissance Resort & Spa</div>
              <p>
                Let us know if you’re interested in staying at The Lodge, we’ll
                set-up a room block if there is enough interest.
              </p>
            </li>
          </ul>
          <br />
          <h5>Airbnbs</h5>
          <p>
            We tend to find that Airbnbs are more affordable, especially this
            time of year, so get a group together and book a house early!
          </p>
        </Card>
        <Card id="venue">
          <h2>
            <LocationCityRoundedIcon />
            Getting to the Venue
          </h2>
          <h5>Address</h5>
          <p>
            Viansa Sonoma Winery
            <div>
              <a
                href="http://maps.google.com/maps?q=25200 Arnold Dr, Sonoma, CA 95476"
                target="_blank"
              >
                25200 Arnold Dr, Sonoma, CA 95476
              </a>
            </div>
          </p>
          <br />
          <h5>Arrival</h5>
          <p>
            When you arrive at the address, take the long driveway up the hill.
            The ceremony will take place on the upper lawn.
          </p>
          <br />

          <h5>Parking</h5>
          <p>
            There is plenty of parking if you choose to drive there, but we
            highly recommend those imbibing to take an Uber.
          </p>
        </Card>
        <Card id="recs">
          <h2>
            <StarBorderRoundedIcon />
            Recommendations
          </h2>
          <p>
            As many of you know, we both are big foodies and love trying new
            restaurants wherever we are. This list of restaurants and wineries
            hold a special place in our relationship. While the Michelin Star
            system is well-known, some say the Murakami-star system is much more
            prestigious (see stars on left).
          </p>
          <h5>Restaurants in San Francisco</h5>
          <ul>
            <li>
              ***Kokkari Estiatorio - Might be our most memorable dinner in the
              city. This Greek restaurant is pretty incredible.
            </li>
            <li>
              **Tony's Pizza Napoletana- Ty proclaims this is the best pizza
              he's ever had in his life. Suggest ordering the New Yorker.
            </li>
            <li>
              **Umma - Jenny's favorite Korean restaurant in the city which
              serves delicious short ribs among other Korean staples.
            </li>
            <li>
              **La Taqueria - Voted best burrito in the country by
              FiveThirtyEight. Ty takes all his friends here anytime they visit
              from out of town.
            </li>
            <li>
              **Marufuku Ramen - After many bowls of ramen, this one is our
              favorite bowl with a milky tonkatsu broth in the heart of
              Japantown.
            </li>
            <li>
              *Zazie - Fantastic breakfast known for their crab benedict and
              spicy green salsa.
            </li>
            <li>
              *Cockscomb - Chris Cosentino's restaurant which is known for their
              selection of shared meat dishes (porchetta!).
            </li>
            <li>
              *Paprika - Goulash, Gnocchi, and German Beer? Hard to say no to
              that.
            </li>
            <li>
              *Pacific Cocktail Haven (Bar) - Ty's favorite cocktail bar in the
              city. Please order Thrilla in Manila (thank me later).
            </li>
            <li>
              Murakami Recommended: Beretta (Pizza), Dumpling Time (Chinese),
              Liholiho (Hawaiian), Al's Place (California-New).
            </li>
          </ul>
          <h5>Restaurants in Sonoma/Napa Valley</h5>
          <ul>
            <li>
              ***French Laundry - World famous and best meal we've shared
              together. Reservations open 2 months in advance :)
            </li>
            <li>
              **Bouchon - We'd recommend stopping in for lunch or at least
              stopping by the bakery next door.
            </li>
            <li>
              *Ad Hoc + Addendum- The more casual Thomas Keller Restaurants
              known for their delicious fried chicken.
            </li>
            <li>
              *Farmstead - After you have spent time wine tasting, we'd
              recommend coming here for shareable plates with a Southern BBQ
              twist, great steak tartare, and more wine!
            </li>
            <li>
              *Archetype - If you find yourself up north in need of a tasty
              brunch, we'd recommend coming to Archetype where we started
              Jenny's 30th bday celebration.
            </li>
            <li>
              *Auberge du Soleil - Come have a cup of coffee with a gorgeous
              view over Napa Valley. Stay for the delicious breakfast.
            </li>
            <li>
              Murakami Recommended: Boon Fly Cafe - local diner breakfast that
              is popular among locals, Oxbow Market - take a break from eating
              and drinking to come to a market full of eating and drinking.
            </li>
          </ul>
          <h5>Wineries in Sonoma/Napa Valley</h5>
          <ul>
            <li>
              Calmere Estate - We are club members here! Beautiful winery with
              bocce ball and a delicous rose.
            </li>
            <li>
              Titus - Quiet winery with large outdoor space for relaxation and
              beautiful views.
            </li>
            <li>
              Turnbull - This winery holds a special place in our relationship
              and is right off the main road.
            </li>
            <li>
              The Village at the Meritage Resort - 9 tasting rooms with a food
              markets. This outdoor area has outdoor games and is great for big
              groups.
            </li>
          </ul>
        </Card>

        <MenuFab
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ visibility: coordinates.y < -800 ? "visible" : "hidden" }}
        >
          <FormatListBulletedIcon style={{ color: palette.primaryColor }} />
        </MenuFab>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => scrollTo("#air-travel")}>
            I. Air Travel
          </MenuItem>
          <MenuItem onClick={() => scrollTo("#transport")}>
            II. Transport
          </MenuItem>
          <MenuItem onClick={() => scrollTo("#hotels")}>
            III. Hotels/Lodging
          </MenuItem>
          <MenuItem onClick={() => scrollTo("#venue")}>IV. Venue</MenuItem>
          <MenuItem onClick={() => scrollTo("#recs")}>
            V. Recommendations
          </MenuItem>
        </Menu>
      </emotionStyles.pageContainer>
    </Layout>
  )
}

export default TravelPage
