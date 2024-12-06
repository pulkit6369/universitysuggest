import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Banner_wrapper from './Components/Banner_wrapper/Banner_wrapper'
import Explore from './Components/Explore/Explore'
import LeadingUniversities from './Components/Leading-Banner/Leading-banner'
import Collegesection from './Components/CollegeSection/Collegesection'
import Expertslider  from './Components/Expertslider/Expertslider'
import FaqSection from './Components/faq-section/faq'
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
    </>
  )
}

export default App
