import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import'./CSS/Page2.css'
export default class page2 extends Component {
  render() {
    return (
        <div className="Page2">
      
        <h1> welcome to second project</h1>
        <br/><br/>
     <Link to="/Page1">Go to Page 1</Link>
      <br/><br/>
      <Link to="/Page2">Go to Page 2</Link>
      <br/><br/>



      </div>
    )
  }
}
