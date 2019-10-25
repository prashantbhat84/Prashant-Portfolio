import React from "react"
import { Link } from "gatsby"

const about = () => {
  return (
    <div>
      <h1>This is my About page</h1>
      <p>
        Need a developer? <Link to="/contact">Connect with Me</Link>
      </p>
    </div>
  )
}

export default about
