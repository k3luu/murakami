import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextInput from "../components/TextInput"
import RsvpForm from "../components/RsvpForm"

const ProposalPage = () => (
  <Layout>
    <SEO title="RSVP" />
    <h1>Reservations</h1>
    <RsvpForm />
  </Layout>
)

export default ProposalPage
