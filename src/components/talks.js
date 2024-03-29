import * as React from "react"

const talks = [
  {
    "cover": "/talks/full_stack_development.png",
    "coverPosition":"",
    "title": "F#ll stack development",
    "code": "https://github.com/chestercodes/gitpitch-talks/tree/master/full-stack-development",
    "slides": "https://gitpitch.com/chestercodes/gitpitch-talks/master?p=full-stack-development",
    "abstract": "This talk explores a interesting set of F# libraries that allow code sharing across the server, browser and cross platform mobile clients.",
    "description": "The quixotic write-once-run-everywhere dream has had it's fair share of casualties over the years, with broken dreams and promises of full stack code sharing. Recent attempts at this goal, like the React(Native) set of technologies, have utilised the MVU pattern to create web and mobile applications with similar architectures.\nThis talk explores a interesting set of F# libraries that allow code sharing across the server, browser and cross platform mobile clients.\nNo previous knowledge of F# or the MVU pattern are required.",
    "sessions": [
      {
        "location": "DDD Southwest",
        "date": "2019/04/28"
      }
    ]
  },
  {
    "cover": "/talks/intro_to_fs.jpg",
    "coverPosition":"",
    "title": "Introduction to F#",
    "code": "https://github.com/chestercodes/IntroToFSharp",
    "slides": "https://gitpitch.com/chestercodes/IntroToFSharp",
    "abstract": "Internal talk about the main features of F#",
    "description": "Internal talk about the main features of F#",
    "sessions": [
      {
        "location": "Internal",
        "date": "2019/02/01"
      }
    ]
  },
  {
    "cover": "/talks/typosquatter_talk.jpg",
    "coverPosition":"",
    "title": "Hunting Typosquatters with F#",
    "code": "https://github.com/chestercodes/RepoHunt",
    "slides": "https://chestercodes.github.io/RepoHunt",
    "abstract": "In August 2017 a typosquatting attack was discovered in the popular code repository npm. For two weeks nobody noticed as hackers tricked users into installing malicious packages that exfiltrated developer’s credentials. In this talk I’ll describe the attack in detail and show how I used some of the awesome features of the F# language to hunt for other attacks.",
    "description": "npm is the world's largest software repository and is used to distribute JavaScript code to millions of developers.\nThe repository has experienced its fair share of security scares, one of the most recent was a significant typosquatting attack in August 2017. Although the attempt was not considered to have been very effective, it went unnoticed for two weeks and served as a catalyst for security companies to look for similar attacks.\nThis talk describes my efforts in this space using ideas from the attack to look for other active ones. Attendees should expect to learn about my investigative efforts and the awesome features of F# which made it easy and fun.",
    "sessions": [
      {
        "location": "F# Bristol",
        "date": "2018/03/14",
        "url": "https://www.meetup.com/FSharpBristol/events/248295668/"
      },
      {
        "location": "DDD East Anglia",
        "date": "2018/09/23",
        "url": "https://www.dddeastanglia.com/Session/Details/2136"
      }
    ]
  },
  // {
  //   "cover": "/talks/ddd_southwest_devops.jpg",
  //   "coverPosition": "",
  //   "title": "Seperation of concerns in Devops",
  //   "code": "https://github.com/chestercodes/SeparationOfConcernsInDevOpsTalk",
  //   "slides": "https://github.com/chestercodes/SeparationOfConcernsInDevOpsTalk/blob/master/SeperationOfConcernsInDevops.pdf",
  //   "abstract": "Seperation of concerns is a practice we all apply to our code, but can get lost when we implement our devops processes. This session describes some of these concerns, how they can get mixed up and some technologies to help prise them apart.",
  //   "description": "There are a few products to help easily implement continuous integration and automated deployment in the .NET space. \nThese products make things as simple as possible, but often lead developers down compromising paths due to their design (and business model). \nAll is not lost though! This session will describe and demonstrate technologies and patterns to help developers practice devops with pride. \nThis session stems from my experience mis-using Teamcity and Octopus Deploy and talks about the importance of seperating the concerns of orchestration and action in relation to building and deploying software.",
  //   "sessions": [
  //     {
  //       "location": "DDD Southwest 7",
  //       "date": "2017/05/06",
  //       "url": "https://dddsouthwest.com/"
  //     }
  //   ]
  // }
]

const Talks = () => {

  const toTalk = talk => (
    <div style={{
      padding: 10
    }}>
      <h4 style={{
        marginTop: 10,
        marginBottom: 10,
        //padding: 10
      }} >{talk.title}</h4>
      <p>
        <a href={talk.slides} >{talk.slides}</a> - {talk.abstract}
      </p>
    </div>
  )

  return (
    <div style={{
      margin: 20,
    }}>
      <h2 style={{
        padding: 10
      }} >Talks</h2>

      {talks.map(toTalk)}
    </div>
  )
}

export default Talks
