import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Banner_wrapper from './Components/Banner_wrapper/Banner_wrapper'
import Explore from './Components/Explore/Explore'
import LeadingUniversities from './Components/Leading-Banner/Leading-banner'
import Collegesection from './Components/CollegeSection/Collegesection'
import Expertslider  from './Components/Expertslider/Expertslider'
import FaqSection from './Components/faq-section/faq'
import ContactUs from './Components/Formsection/Contactus'


function App() {

  return (
    <>
      <Navbar />
      <Banner_wrapper />
      <Explore />
      <LeadingUniversities />
      <Collegesection />
      <Outlet />
      <Expertslider />
      <FaqSection />
      <ContactUs />
    </>
  )
}

export default App
