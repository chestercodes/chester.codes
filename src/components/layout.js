import * as React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import Bio from "./bio"

const getLinks = first => {
  const firstOrNull = !first ? [] : [
    {
      name: first,
      link: '/'
    }
  ]
  return firstOrNull.concat([
    {
      name: 'cv',
      link: '/cv'
    },
    {
      name: 'projects',
      link: '/projects'
    },
    // {
    //   name: 'talks',
    //   link: '/talks'
    // }    
    {
      name: 'github',
      link: 'https://github.com/chestercodes'
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/chestercodes'
    },
  ])
}
const homeLinks = getLinks(null)
const codesLinks = getLinks("chester.codes")

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <div style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around"
        }}>
          
          <div style={{
            //width: '40%',
            padding: '1vw'
          }}>
            {Bio(false)}
          </div>

          <div style={{
            //width: '60%',
            padding: '1vw'
          }}>
            {Nav(homeLinks)}
          </div>
          

        </div>

      </>
    )
  } else {
    header = (
      <>
        {Nav(codesLinks)}
      </>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
      </header>

      <main>{children}</main>

    </div>
  )
}

export default Layout
