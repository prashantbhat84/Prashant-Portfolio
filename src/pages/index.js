import React from "react"
import { Link } from "gatsby"

const index = () => {
  return (
    <div>
      <h1>My First Gatsby Site</h1>
      <h2>
        I am Prashant a react and react native developer from Bangalore,India
      </h2>
      <p>
        Work with Me <Link to="/contact">Connect</Link>
      </p>
    </div>
  )
}

export default index
