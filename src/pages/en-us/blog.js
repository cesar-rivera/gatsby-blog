import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { Card, Container, Title } from "rbx"
import Layout from "../../components/layout"

export default ({ data }) => (
  <Layout locale="en-us">
    <Container css={css`margin:20px auto`}>
      <Title size={2}>Posts pulled from <span css={css`color:red;`}>Contentstack</span></Title>
      {data.allContentstackArticles.nodes.map((node) => (
        <div key={node.id}>
          <Card>
            <Link
                to={"en-us/blog" + node.url + "/"}
                css={css`
                  text-decoration:none;
                  color:inherit
                `}
              >
              <Card.Content>
                <Title>{node.title}{" "}
                  <span className="is-size-6 has-text-grey">— {node.date}</span></Title>
                <p>{node.body}</p>
              </Card.Content>
            </Link>
          </Card>
        </div>
      ))}
    </Container>
  </Layout>
)

export const pageQuery = graphql`
    query HomeQueryEnUs {
      allContentstackArticles(sort: {fields: [date], order: DESC}, filter: {locale: {eq: "en-us"}}, limit: 3) {
        nodes {
          id
          title
          date(formatString: "DD MMMM, YYYY")
          body
          url
        }
      }
    }
`