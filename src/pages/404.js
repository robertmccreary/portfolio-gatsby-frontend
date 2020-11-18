import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <div className="section-center">
        <main className="error-page">
          <div className="error-container">
            <h1>Sorry, there's no page at this URL</h1>
            <Link to="/" className="btn">
              Return to Home
            </Link>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Error
