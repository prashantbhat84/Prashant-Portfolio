import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const about = () => {
  return (
    <div>
      <Layout>
        <h1>This is my About page</h1>
        <p>
          Need a developer? <Link to="/contact">Connect with Me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default about
