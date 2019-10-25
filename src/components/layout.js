import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import classes from "./layout.module.scss"

export default function layout(props) {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Header />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}
