import React from "react"
import { Link } from "gatsby"
//import "./header.scss"
import classes from "./header.module.scss"
const header = () => {
  return (
    <div>
      <header className={classes.header}>
        <Link className={classes.title} to="/">
          <h1>Prashant Bhat</h1>
        </Link>
        <nav>
          <ul className={classes.navlist}>
            <li>
              <Link
                className={classes.navItem}
                activeClassName={classes.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={classes.navItem}
                activeClassName={classes.activeNavItem}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={classes.navItem}
                activeClassName={classes.activeNavItem}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={classes.navItem}
                activeClassName={classes.activeNavItem}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default header
