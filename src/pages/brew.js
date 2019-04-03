import React from 'react'
import NavBar from '../components/NavBar'



class Brew extends React.Component {
  state = { brewery: {} }

  componentDidMount(){
    const id = this.props.match.params.id
    console.log(id)
    fetch(`https://bypasscors.herokuapp.com/api/?url=https://api.openbrewerydb.org/breweries/${id}`)
      .then(response => response.json())
      .then(json => this.setState({ brewery: json }))
  }

  render(){
    return(
      <div>
        <NavBar/>
        <div className="searchResults">
          <div className="textTitle">
            <h1>{this.state.brewery.name}</h1>
            </div>
            <div className="text">
          {this.state.brewery.brewery_type && this.state.brewery.brewery_type.length > 0 &&
            <p>
              <b>Type of Brewery:</b><br/>

                {this.state.brewery.brewery_type}

            </p>
          }
          </div>
          <div className="text">
          {this.state.brewery.street && this.state.brewery.street.length > 0 &&
            <p>
              <b>Address:</b><br/>

                {this.state.brewery.street}

            </p>
          }
            </div>
            <div className="text">
            {this.state.brewery.city && this.state.brewery.city.length > 0 &&
            <p>
              <b>City:</b><br/>

                {this.state.brewery.city}

            </p>
          }
            </div>
            <div className="text">
            {this.state.brewery.state && this.state.brewery.state.length > 0 &&
            <p>
              <b>State:</b><br/>

                {this.state.brewery.state}

            </p>
          }
            </div>
            <div className="text">
              {this.state.brewery.website_url && this.state.brewery.website_url.length > 0 &&
                <p>Official Website:<br/>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={this.state.brewery.website_url}
                  >
                    {this.state.brewery.website_url}
                  </a>
                </p>
              }
            </div>
      </div>

      </div>
    )
  }
}

export default Brew
