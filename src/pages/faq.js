import React from "react"
import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as palette from "../styles/palette"
import * as emotionStyles from "../styles/emotionStyles"

const List = styled.ul`
  list-style: none;
  margin-left: 0;

  > li {
    border-bottom: 1px solid ${palette.mystic};
    padding: 30px 0;
  }

  > li > div:first-child {
    color: ${palette.primaryColor};
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 20px;
  }

  li > p {
  }
`

const SubList = styled.ul`
  li {
    border-bottom: 0;
    padding: 10px;
  }
`

const FaqPage = () => {
  const photo = useStaticQuery(graphql`
    query {
      pagePhoto: file(relativePath: { eq: "faq.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 6000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout className="secondary__page">
      <SEO title="Frequently Asked Questions" />
      <Img
        className="page__image"
        fluid={photo.pagePhoto.childImageSharp.fluid}
      />
      <emotionStyles.pageContainer>
        <h1>Frequently Asked Questions</h1>

        <List>
          <li>
            <div>When do I need to RSVP by?</div>
            <p>
              Please RSVP by November 12, 2020. We will be sending out
              invitations a few months prior to the wedding date.
            </p>
          </li>
          <li>
            <div>Can I bring a date?</div>
            <p>Please check with Jenny and Tyler about +1's.</p>
          </li>
          <li>
            <div>Are kids welcome?</div>
            <p>We have decided to make Saturday an adults-only event.</p>
          </li>
          <li>
            <div>Where is the wedding?</div>
            <p>
              Both the ceremony and reception will take place at Viansa Sonoma
              Winery located at 25200 Arnold Dr, Sonoma, CA 95476.
            </p>
          </li>
          <li>
            <div>Is the wedding indoors or outdoors?</div>
            <p>
              The ceremony and cocktail hour will hosted outdoors on the lawn.
              Dinner and dancing will be indoors in the paviliion.
            </p>
          </li>
          <li>
            <div>What if I have dietary restrictions?</div>
            <p>
              Please let Jenny or Tyler know if you have any dietary
              restrictions.
            </p>
          </li>
          <li>
            <div>Is this wedding open bar?</div>
            <p>
              The winery only has a permit to serve beer and wine, so hard
              alcohol is not allowed onsite. There will be a variety of wines
              from Viansa Winery and selection of beers. Plenty to ensure a
              fun-filled evening :)
            </p>
          </li>
          <li>
            <div>What should I wear?</div>
            <p>
              Cocktail attire for the wedding ceremony and reception on
              Saturday. Casual is fine if you're joining us for the cocktail
              reception on Friday.
            </p>
          </li>
          <li>
            <div>Are there Ubers available?</div>
            <p>
              Ubers (and other Rideshare apps, I guess) are available throughout
              Sonoma and Napa, but ETA's can take a bit longer so please plan
              accordingly if you're taking one to the wedding.
            </p>
          </li>
          <li>
            <div>I am coming from out of town. Where should I stay?</div>
            <p>
              Check our the <Link to="/travel">Travel page</Link> for more
              information on lodging.
            </p>
          </li>
          <li>
            <div>What if we can't make it to Sonoma?</div>
            <p>
              We understand it's a trek for a lot of people. We promise we won't
              hold it against you if you're not able to make it.{" "}
            </p>
          </li>
          <li>
            <div>
              Will there be any activities happening that I need to know about?
            </div>
            <p>
              Check out the <Link to="/schedule">Schedule page</Link> for
              details on the weekend's festivities. We also have some
              recommendations for you if you plan on getting to Sonoma early or
              are staying late under the <Link to="/travel">Travel page</Link>.
            </p>
          </li>
          <li>
            <div>
              Is it okay to take pictures with our phones and cameras during the
              wedding?
            </div>
            <p>
              We ask that you do not take any photography or video during the
              ceremony. We will have professional videography and photography
              and don't want your beautiful faces covered by a camera or phones!
            </p>
          </li>
          <li>
            <div>Is there a wedding hashtag that we should use?</div>
            <p>
              Alright, if anyone knows Tyler, you know he takes a lot of pride
              in his witty puns. Here were some of the contenders.
              <br />
              <br />
              <div>
                #JT2020WeddingExperience as long as you have your #LuuandTy
              </div>
              <div>#JennyMarriedKami</div>
              <div>#JennyTysTheKnot</div>
              <div>#JLuu&TyMuu</div>
              <div>#Jluu&TyToo020</div>
              <div>#TyedtoLuu</div>
              <br />
              <br />
              Ultimately, we're going with #Marriedkami so please tag us in so
              we can track all the memories!
              <br />
              Check out the <Link to="/photos">Photos page</Link> for your
              tagged photos!
            </p>
          </li>
          <li>
            <div>
              What should/could I do between the ceremony and the reception?
            </div>
            <p>
              There will be a cocktail hour between the ceremony and the
              reception. Viansa is an amazing venue and there is plenty of room
              for guests to explore and enjoy the breathtaking views of Sonoma.
            </p>
          </li>
          <li>
            <div>Where are we registered?</div>
            <SubList>
              <li>
                <a
                  href="https://www.zola.com/registry/tylerandjenny1212"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Zola Registry
                </a>
              </li>
              <li>
                <a
                  href="https://www.crateandbarrel.com/gift-registry/jenny-luu-and-tyler-murakami/r6061972"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Crate & Barrel
                </a>
              </li>
            </SubList>
          </li>
          <li>
            <div>Who built this beautiful website?</div>
            <p>Courtesy of Kathy Luu, Software Engineer & Maid of Honor.</p>
          </li>
        </List>
      </emotionStyles.pageContainer>
    </Layout>
  )
}

export default FaqPage
