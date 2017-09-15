import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
//import 'font-awesome.min.css';

const divStyle = {
  color: "#ccc",
  fontSize: "0.9rem",
  textDecoration: "none",
  paddingBottom: "1rem"
}

class LightningCounter extends React.Component{
  constructor(){
    super()
    this.state = {strikes: -1}
  }
  componentWillMount(){
    window.onload = () => {
      var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
      this.setState({strikes: (loadTime * (44/1000))})
    }
  }
  render(){
    return(
      <div style={divStyle}>
        <p style={divStyle}><i className="fa fa-bolt" /> This app took {Math.round(this.state.strikes)} lightning strikes to load. <i className="fa fa-bolt" /></p>
      </div>
    )
  }
}

export default LightningCounter;
