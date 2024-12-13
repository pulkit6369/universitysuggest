import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for routing
import Banner_wrapper from './Components/Banner_wrapper/Banner_wrapper';
import Explore from './Components/Explore/Explore';
import LeadingUniversities from './Components/Leading-Banner/Leading-banner';
import Collegesection from './Components/CollegeSection/Collegesection';
import Expertslider from './Components/Expertslider/Expertslider';
import FaqSection from './Components/faq-section/faq';
import ContactUs from './Components/Formsection/Contactus';
import UniversityComparison from './Components/Comparison/Universitycom';
import Cardsection from './Components/Cardsection/Card';
import Universitiesspage from './Components/UniversitiesPaage/Universitiespage'
// login and signup import
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';

function App() {
  return (
    <>
     
      <Navbar />
      <Banner_wrapper />
      <Cardsection />
      <Explore />
      <UniversityComparison />
      <LeadingUniversities />
      <Collegesection />  

    
      <Routes>
      
   
        <Route path="/topuniversities" element={  <Universitiesspage />} /> 

        {/* Login and register route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
      </Routes>
      
      <Expertslider />
      <FaqSection />
      <ContactUs />
    </>
  );
}

export default App;