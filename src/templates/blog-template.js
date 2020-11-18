import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = ({ data }) => {
  const { content } = data.blog
  console.log({ data })
  return (
    <Layout>
      <section className="section-center">
        <article className="blog-content">
          <ReactMarkdown source={content} />
        </article>
        <Link className="btn center-btn">Blog</Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

export default ComponentName
