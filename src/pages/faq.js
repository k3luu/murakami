import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const Table = styled.table`
  td:first-child {
    width: 20px;
  }
`

const FaqPage = () => (
  <Layout>
    <SEO title="Frequently Asked Questions" />
    <h1>Frequently Asked Questions</h1>

    <Table>
      <tbody>
        <tr>
          <td>1.</td>
          <td>Where can we stay?</td>
        </tr>
        <tr>
          <td></td>
          <td>A list of hotels for guests will be added soon!</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Are children allowed?</td>
        </tr>
        <tr>
          <td></td>
          <td>No.</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Are dogs allowed?</td>
        </tr>
        <tr>
          <td></td>
          <td>Yes.</td>
        </tr>
      </tbody>
    </Table>
  </Layout>
)

export default FaqPage
