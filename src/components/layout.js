import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

export default function layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
