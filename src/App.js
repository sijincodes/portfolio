import Navbar from "./scenes/Navbar"
import DotGroup from "./scenes/DotGroup"
import Landing from "./scenes/Landing"
import Projects from "./scenes/Projects"
import Contact from "./scenes/Contact"
import Footer from "./scenes/Footer"
import {useState,useEffect} from "react"
import useMediaQuery from "./hooks/useMediaQuery"


function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = ()=>{
      if(window.scrollY===0) setIsTopOfPage(true)
      if(window.scrollY===!0) setIsTopOfPage(false)
    }
  window.addEventListener("scroll",handleScroll)
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  }, [])
  
  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
          selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-5/6 mx-auto">
          <Projects />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
          <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
