import React from "react"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
/*In case you are wondering what the props.children as used in the Layout component is. Well, it is the JSX passed in-between the <Layout></Layout> tags in the different pages. That is pure React. Nothing special.
*/

const Layout = props => {
  return (
    <div>
      <NavBar/>
      {props.children}
      <Footer />
    </div>
  )
}




export default Layout