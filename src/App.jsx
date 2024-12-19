// import './App.css';


// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Navbar from './Components/Navbar/Navbar';
// import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for routing
// import Banner_wrapper from './Components/Banner_wrapper/Banner_wrapper';
// import Explore from './Components/Explore/Explore';
// import LeadingUniversities from './Components/Leading-Banner/Leading-banner';
// import Collegesection from './Components/CollegeSection/Collegesection';
// import Expertslider from './Components/Expertslider/Expertslider';
// import FaqSection from './Components/faq-section/faq';
// import ContactUs from './Components/Formsection/Contactus';
// import UniversityComparison from './Components/Comparison/Universitycom';
// import Cardsection from './Components/Cardsection/Card';
// import Universitiesspage from './Components/UniversitiesPaage/Universitiespage'
// // login and signup import
// import Login from './Components/Authentication/Login';
// import Register from './Components/Authentication/Register';
// import About from './Components/About/About';


// function App() {
//   return (
//     <>

//       <Navbar />
//       <Banner_wrapper />
//       <Cardsection />
//       <Explore />
//       <UniversityComparison />
//       <LeadingUniversities />
//       <Collegesection />


//       <Routes>

//         <Route path="/topuniversities" element={  <Universitiesspage />} />

//         {/* Login and register route */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/About" element={<About/> } />


//       </Routes>

//       <Expertslider />
//       <FaqSection />
//       <ContactUs />


//     </>
//   );
// }

// export default App;








// Another


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Banner_wrapper from './Components/Banner_wrapper/Banner_wrapper';
import Cardsection from './Components/Cardsection/Card';
import Collegesection from './Components/CollegeSection/Collegesection';
import UniversityComparison from './Components/Comparison/Universitycom';
import Expertslider from './Components/Expertslider/Expertslider';
import Explore from './Components/Explore/Explore';
import FaqSection from './Components/faq-section/faq';
import ContactUs from './Components/Formsection/Contactus';
import LeadingUniversities from './Components/Leading-Banner/Leading-banner';
import Navbar from './Components/Navbar/Navbar';
import Universitiesspage from './Components/UniversitiesPaage/Universitiespage';
import OnePageUniversity from './Components/UniversityVisit/OnePageUniversity';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner_wrapper />
            <Cardsection />
            <Explore />
            <UniversityComparison />
            <LeadingUniversities />
            <Collegesection />
            <Expertslider />
            <FaqSection />
            <ContactUs />

          </>
        } />
        <Route path="/topuniversities" element={<Universitiesspage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/onePageUniversity" element={<OnePageUniversity />} />


      </Routes>
    </>
  );
}

export default App;
