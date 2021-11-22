import * as React from "react"

const Nav = (links) => {
  return (
    <nav>
      <ul style={{
        margin: "0.5vw",
        listStyleType: 'none',
        display: 'flex',
        width: '100wv',
        fontFamily: "Montserrat"
      }}>
        {links.map(l => {
          return (
            <li key={l.link} style={{
              margin: "0 1vw"
            }}>
              <a href={l.link} style={{
                textDecoration: 'none',
                fontSize: "1.5em"
              }}>{l.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Nav
