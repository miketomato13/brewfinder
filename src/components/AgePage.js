import React from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class AgePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: true, ageOver21: false
    };
  }
componentDidMount(){

}

  handleYes = () => {
    this.setState({ show: false });
  }

  handleNo = () => {
    window.location.href = 'https://www.niaaa.nih.gov/alcohol-health/special-populations-co-occurring-disorders/underage-drinking'
  }

  render() {
    return (
        <Modal show={this.state.show}
        style ={{backgroundColor:"black"}}>
        <div className="Age">
        <div className="modalHeader">
          <Modal.Header>
            <Modal.Title><img src={require('../Media/beer2.png')} alt='' width='80px' height='80px'/>
            <img src={require('../Media/coollogo_com-11970664.png')} alt= '' width='200px' height='80px'/></Modal.Title>
          </Modal.Header>
          </div>
          <Modal.Body style ={{fontFamily: 'Oswald', fontSize: '2rem'}}>Are you over 21?</Modal.Body>
          <Modal.Footer>
           <Button variant="primary" onClick={this.handleYes}
           style ={{backgroundColor:"black", fontFamily: 'Oswald'}}>
             Yes
            </Button>

          <Button variant="secondary" onClick={this.handleNo}
          style ={{backgroundColor:"black", fontFamily: 'Oswald'}}>
              No
            </Button>
          </Modal.Footer>
          </div>
        </Modal>
    );
  }
}

export default AgePage
