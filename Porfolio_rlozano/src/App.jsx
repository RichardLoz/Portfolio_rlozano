import "./App.scss"
import Header from "./Components/Header/Header"
import Social from "./Components/Social/Social"
import About from "./Pages/About/About"
import Home from "./Pages/Home/Home"
import Projects from "./Pages/Projects/Projects"

import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"
import whatsapp from "./assets/whatsapp.png"
import facebook from "./assets/facebook.png"
import discord from "./assets/discord.png"
import twitter from "./assets/twitter.png"


function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <div className="page" id="home">
          <Home/>
        </div>

        <div className="page" id="about">
          <About/>
        </div>
        <div className="socials-wrapper">
          <h2 className="quick-links">Enlaces Rapidos</h2>
          <div className="socials">
            <Social logo={github} title="GitHub"/>
            <Social logo={linkedin} title="Linkedin"/>
            <Social logo={whatsapp} title="Whatsapp"/>
            <Social logo={facebook} title="Facebook"/>
            <Social logo={discord} title="Discord"/>
            <Social logo={twitter} title="Twitter"/>
          </div>
        </div>

        <div className="page" id="projects">
          <Projects/>
        </div>
      </main>
    </div>
  )
}

export default App
