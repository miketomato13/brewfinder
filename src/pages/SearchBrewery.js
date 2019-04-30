import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/NavBar'
import { Link } from 'react-router-dom'
import Map from './Map'


class SearchBrewery extends Component {
 state = { query:'', brew: [], repos: null}

 handleSearch = event => {
    const query = event.target.value
    this.setState({ query })
  }



submitData = async (event) => {
  event.preventDefault()
  const { query } = this.state
  const { data } = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${query}`)
  this.setState({ brew: data })

  if (!this.state.brew.length) {


    this.setState({repos: `BrewFindr has not explored ${ query } yet!`})

  } else {
    this.setState({repos: ''})
  }
}


render(){

  return(

    <div>
      <Navbar/>
           <div className="searchResults">
            <div className="searchTitle">
              <h2>Search Breweries</h2>
            </div>
          <div className="inputBar">
              <form id="formSubmit" onSubmit={this.submitData}>
              <input
                placeholder="City Name"
                type="search"
                value={this.state.query}
                onChange={this.handleSearch}
              />
              <button type="submit" className="btn-dark">
                Submit
              </button>
              </form>

            </div>



          <div className="results">
          {this.state.brew.length ? <Map breweries={this.state.brew} /> : null }

            {
              this.state.brew.map(result => {
                return(
                  <div key={result.name} className="result">
                    <Link to={`/brew/${result.id}`}>
                    <h3>{result.name}</h3>
                    </Link>
                  </div>
                )
              })
            }  <p>{this.state.repos}</p>
          </div>

          </div>
        </div>
      )
    }
  }

export default SearchBrewery
