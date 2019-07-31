import React from "react"
import { graphql } from "gatsby"
import { Container, Section, Title } from "rbx"
import Layout from "../components/layout"

export default ({ data }) => {
  let post = {};
  console.log("datacontent", data)
  if (data.markdownRemark !== null) {
    post = data.markdownRemark
    post.title = post.frontmatter.title;
    post.bodyHtml = post.html
  } else {
    post = data.contentstackArticles
    post.bodyHtml = post.body
  }
  return (
  <Layout>
    <Container>
      <Section>
        <Title>{post.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: post.bodyHtml}} />
      </Section>
    </Container>
  </Layout>
)}

export const query = graphql`
  query($slug: String!, $locale: String!) {
    contentstackArticles(locale: {eq: $locale}, url: {eq: $slug}) {
      title
      body
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
