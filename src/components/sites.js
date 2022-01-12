import * as React from "react"

const sites = [
  {
    name: "Life calendar",
    description: "Site to generate a life calendar",
    url: "https://life-cal.com"
  }
]

const Projects = () => {

  const toSite = site => (
    <div style={{
      padding: 10
    }}>
      <h4 style={{
        marginTop: 10,
        marginBottom: 10,
        //padding: 10
      }} >{site.name}</h4>
      <p>
        <a href={site.url} >{site.url}</a> - {site.description}
      </p>
    </div>
  )

  return (
    <>
      <div style={{
        margin: 20,
      }}>
        <h2 style={{
          padding: 10
        }} >Sites</h2>

        {sites.map(toSite)}
      </div>
    </>
  )
}

export default Projects
