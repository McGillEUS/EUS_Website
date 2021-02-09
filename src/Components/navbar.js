import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "gatsby"
import "./../style.css"

const NavBar = () => {
  return (

    <div id="Navbar">
      <Navbar expand="lg" variant="light" bg="light">

        <div id="Links">
          <Link id="NavLinkss" href="#home">Home</Link>
          <Link id="NavLinkss" href="#features">Sponsors</Link>
          <Link id="NavLinkss" href="#pricing">Get Involved</Link>
          <Link id="NavLinkss" href="#features">Events </Link>
          <Link id="NavLinkss" href="#pricing">Contact Us</Link>
        </div>
      </Navbar>

    </div>





  )

}

export default NavBar