import * as React from "react"

const DatedComponent = ({ comparisonDate, showWarning, children }) => {
  let prodHostName = "chester.codes"
  //prodHostName = "localhost"
  const isDev = window && (window.location.hostname !== prodHostName)
  
  const postDate = Date.parse(comparisonDate)
  const now = Date.now()
  const showPost = postDate.valueOf() < now.valueOf() || isDev
  
  const notYet = showWarning ? <p>Will be published on {comparisonDate}</p> : <></>

  return (
    <div>
      {showPost ? children : notYet}
    </div>
  )
}

export default DatedComponent
