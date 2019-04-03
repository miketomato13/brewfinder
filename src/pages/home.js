import React from 'react'
import NavBar from '../components/NavBar'
import './Home.css'
import AgePage from '../components/AgePage'

const Home = () => {
  return(
    <div>
      <AgePage/>
        <NavBar/>

        <div className="logo">
            <img src={require('../Media/coollogo_com-11970664.png')} alt='' width='300px' height='100px'/>
        </div>
    <div className="searchResults">

      <div className="welcome">
        <h1>Welcome to <em>brewfinder!</em></h1>
      </div>
      <div className="pFont">
        <p>With a pint in our hand, brewfinder has made it easier for you to find the greatest breweries around the US. We believe in good beer and variety, and there's nothing better than a beer date after a long day. so, go ahead, search on, and find your new favorite spot.</p>
      </div>
    </div>

    </div>
  )
}

export default Home
