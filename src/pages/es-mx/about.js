import React from "react"
import { graphql } from "gatsby"
import { Container, Section, Title } from "rbx"
import Layout from "../../components/layout"

export default ({ data }) => (
  <Layout locale="es-mx">
    <Container>
      <Section>
        <Title>Sobre {data.site.siteMetadata.title}</Title>
        <p>
          Texto de ejemplo en español
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
