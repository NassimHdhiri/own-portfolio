import './App.css'
import AboutMeMain from './components/About_me/AboutMeMain'
import AboutMeTitle from './components/About_me/AboutMeTitle'
import Contact from './components/Contact_us/Contact'
import ExpAcademic from './components/Experiences/Academic/ExpAcademic'
import ExpSocial from './components/Experiences/Social/ExpSocial'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import Picture from './components/Profile-resume/Picture/Picture'
import ProfilBtns from './components/Profile-resume/ProfilBtns'
import Resume from './components/Profile-resume/Resume'
import Main from './components/Profile-resume/main'
import Project from './components/Projects/Project'
import Repaire from './components/Repaire/Repaire'


function App() {

  return (
    <>

      <Layout>
          <Main/>
          {/* <Repaire/> */}
          <AboutMeMain/>
          <ExpAcademic/>
          <ExpSocial/>
          <Project/>
          <Contact/>
          <Footer/>
      </Layout>
      
     
      
      

    </>
  )
}

export default App
