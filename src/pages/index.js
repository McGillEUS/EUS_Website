/*Any files inside this folder automatically become static pages with paths based on their filename.*/

import React from "react"

import Layout from "../components/layout"

const index = () => {
  return (
    <Layout>
      <div id="homePage">
        <div id="WelcomeMessage">
          <div >Welcome to</div>
          <div >the EUS</div>
        </div>

        <div id="introMessage">
          <p ><strong>The McGill Engineering Undergraduate Society</strong> is the representative body of the undergraduate students of engineering at McGill University. Explore our website to learn more about involvement opportunities, events, sponsors and so much more!</p>

        </div>
      </div>

      <div id="about">

        <p id="aboutTitle">About Us </p>
        <div id="aboutContent">
          <div id="aboutLeftCol">
            <p id="aboutParagraphs">In the remote learning environment, the McGill EUS is always seeking to inform and connect with its members. Checkout our newsroom for important announcements!</p>
            <div>
            <button class="button" id = "aboutLeftButton">Newsroom</button>
            </div>
         
          </div>
          <div id="aboutRightCol">
            <p id="aboutParagraphs">In the remote learning environment, the McGill EUS is always seeking to inform and connect with its members. Checkout our newsroom for important announcements!</p>
            <button class="button">EUS Wiki</button>
          </div>

        </div>

      </div>


    </Layout>
  )
}

export default index

