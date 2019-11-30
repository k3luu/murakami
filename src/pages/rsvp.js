import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextInput from "../components/TextInput";

const ProposalPage = () => (
  <Layout>
    <SEO title="RSVP" />
    <h1>Reservations</h1>
    <form>
      <TextInput
        label="First Name"
        id="first_name"
        name="First Name"
        placeholder="First Name"
      />
      <TextInput
        label="Last Name"
        id="last_name"
        name="first_name"
        placeholder="Last Name"
      />
      <TextInput
        label="Email"
        id="email"
        name="email"
        placeholder="Email"
      />
    </form>
  </Layout>
)

export default ProposalPage
