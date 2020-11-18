import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="All Projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        description
        title
        url
        id
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
