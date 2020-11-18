import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="Latest articles" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        title
        content
        category
        desc
        date(formatString: "MMM Do YYYY")
        id
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default Blog
