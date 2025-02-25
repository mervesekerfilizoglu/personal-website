import { useState } from 'react'
import Navbar from './componenets/Navbar'
import Introduce from './componenets/Introduce'
import Skils from './componenets/Skils'
import Profile from './componenets/Profile'
import Projects from './componenets/Projects'
import Footer from './componenets/Footer'
import { LanguageContexts } from './context/LanguageContexts'
function App() {
 

  return (
    <>
    <LanguageContexts>
     <Navbar/>
     <Introduce/>
     <Skils/>
     <Profile/>
     <Projects/>
     <Footer/>
     </LanguageContexts>
    </>
  )
}

export default App
