import React from "react"
import Trips from "../components/Trips"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TripsPage = () => (
  <Layout>
    <SEO title="Trip" />
    <Trips heading="Our Favorite Destinations" />
  </Layout>
)

export default TripsPage
