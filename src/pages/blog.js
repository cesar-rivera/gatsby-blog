import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { Card, Container, Title, Divider } from "rbx"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <Container css={css`margin:20px auto`}>
      <Title size={2}>Posts pulled from <span css={css`color:red;`}>Contentstack</span></Title>
      {data.allContentstackArticles.nodes.map((node) => (
        <div key={node.id}>
          <Card>
            <Link
                to={"blog" + node.url + "/"}
                css={css`
                  text-decoration:none;
                  color:inherit
                `}
              >
              <Card.Content>
                <Title>{node.title}{" "}
                  <span className="is-size-6 has-text-grey">— {node.date}</span></Title>
                <p>{node.multi_line}</p>
              </Card.Content>
            </Link>
          </Card>
        </div>
      ))}
      <Divider color="black">Even more</Divider>
      <Title size={2}>Posts read from local <span css={css`color:red;`}>Markdown</span></Title>
      {data.allMarkdownRemark.nodes.map((node) => (
        <div key={node.id}>
          <Card>
            <Link
              to={"blog" + node.fields.slug}
              css={css`
                text-decoration:none;
                color:inherit
              `}
            >
              <Card.Content>
                <Title>{node.frontmatter.title}{" "}
                  <span className="is-size-6 has-text-grey">— {node.frontmatter.date}</span></Title>
                <p>{node.excerpt}</p>
              </Card.Content>
            </Link>
          </Card>
        </div>
      ))}
    </Container>
  </Layout>
)

export const pageQuery = graphql`
    query HomeQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
      allContentstackArticles(sort: {fields: [date], order: DESC}, limit: 3) {
        nodes {
          id
          title
          date(formatString: "DD MMMM, YYYY")
          multi_line
          url
        }
      }
    }
`