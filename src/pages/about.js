import React from "react"
import { graphql } from "gatsby"
import { Container, Section, Title } from "rbx"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <Container>
      <Section>
        <Title>About {data.site.siteMetadata.title}</Title>
        <p>
          We're the only site running on your computer dedicated to showing the best
          photos and videos of pandas eating lots of food.
        </p>
      </Section>
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
