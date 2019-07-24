import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { Card, Container, Title, Divider } from "rbx"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <Container>
      <Title size={2}>Posts pulled from <span css={css`color:red;`}>Contentstack</span></Title>
      {data.allContentstackArticles.nodes.map((node) => (
        <div key={node.id}>
          <Card>
            <Card.Content>
              <Title>{node.title}</Title>
              <p>{node.multi_line}</p>
            </Card.Content>
          </Card>
        </div>
      ))}
      <Divider color="black">Even more</Divider>
      <Title size={2}>Posts read from local <span css={css`color:red;`}>Markdown</span></Title>
      {data.allMarkdownRemark.nodes.map((node) => (
        <div key={node.id}>
          <Card>
            <Card.Content>
              <Title>{node.frontmatter.title}{" "}
                — {node.frontmatter.date}</Title>
              <p>{node.excerpt}</p>
            </Card.Content>
          </Card>
        </div>
      ))}
    </Container>
  </Layout>
)

export const pageQuery = graphql`
    query HomeQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
      allContentstackArticles {
        nodes {
          id
          title
          date
          multi_line
          url
        }
      }
    }
`