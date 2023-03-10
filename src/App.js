import "./index.css";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar/Navbar";
import Navigation from "./components/Navbar/Navigation.jsx"
import Footer from "./components/Footer/Footer";
import axios from "axios";
import SignUp from "./components/Signup/Signup";
import Aarambh from "./components/Events/Aarambh/Aarambh.js";
import Chemfor from "./components/Events/Chemfor/Chemfor.js";
import Electrica from "./components/Events/Electrica/Electrica.js";
import Genesis from "./components/Events/Genesis/Genesis.js";
import Karyarachna from "./components/Events/Karyarachna/Karyarachna.js";
import Kermis from "./components/Events/Kermis/Kermis.js";
import Mechanica from "./components/Events/Mechanica/Mechanica.js";
import Plexus from "./components/Events/Plexus/Plexus.js";
import Robozar from "./components/Events/Robozar/Robozar.js";
import Faq from "./components/faq/faq.js";
import Error404 from "./components/Error404/Error404";
import SignIn from "./components/Signin/Signin";
import DomainScreen from "./screens/domain/Domain.jsx";
import HomeScreen from "./screens/landingPage/HomeScreen";
import Workshop from "./workshop/workshops";
import Reset from "./components/resetPassword/resetPassword";
import UnderConstruction from "./components/Construction/underConstruction.js";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import Aboutus from '../src/screens/About us/AboutUs.jsx';
import UserDashboard from './components/userDashboard/userDash.jsx';
import OurTeam from './components/OurTeam/team.jsx';
import AuthContext from './auth/authContext';
import Verify from './components/verify/verify';
import Popup from './components/Popup/Popup.js';
import Events from './components/domain/OneCard.jsx';
import ErrorModel from './components/ErrorPopup/ErrorModel';
import Feedback from "./components/Feedback/feedback";
import Date from "./components/Date/Date"
import Datehorizontal from "./components/Datehorizontal/Datehorizontal";
import Merch from './components/merchandise/merchandise1.jsx';



function App() {
  const authContext = useContext(AuthContext);
  const { isUserLoggedIn, setUserLoggedIn } = authContext;
  const [errorMade, setErrorMade] = useState();
  let location = useLocation();
  const onErrorMadeHandle = () => {
    setErrorMade(null);
  };
  const logOutHandler = () => {
    setUserLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationDate");
  };


  // No of unique visitors implementation
  const [visitors, setVisitors] = useState(0);

  window.onload = () => {
    const getToken = localStorage.getItem("uniqueVisitor");
    const token = {
      token: getToken,
    };
    axios
      .post("https://www.techfestsliet.org/api/visitors/count", token)
      .then((res) => {
        if (res.status === 200) {
          setVisitors(res.data.count);
          localStorage.setItem("uniqueVisitor", res.data.token);
          return;
        } else if (res.status === 208) {
          setVisitors(res.data.count);
        } else {
          console.log(res);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(visitors);
  };
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey="6Ldug5YkAAAAAI6e4FMGtjuymWLsLXq3vQ7-HBJ4"
        useEnterprise="true"
        scriptProps={{
          async: true, // optional, default to false,
        }}
      >
        <div className="App">
           {location.pathname !== "/sign-up" &&
            location.pathname !== "/sign-in" && (
              <Navigation isAuth={isUserLoggedIn} onLogout={logOutHandler} />
            )}

          {location.pathname !== "/sign-up" &&
            location.pathname !== "/sign-in" &&
            location.pathname !== "/user-dashboard" && <Footer />}

          {location.pathname === '/' && 
            <Date />
          }
          {location.pathname === '/' && 
            <Datehorizontal />
          }
          
          <Routes>
            <Route path="/domains" element={<DomainScreen />} />
            <Route path="*" element={<Error404 />} />
            {/* <Route path="/visitors" element={<Visitor />} /> */}
            <Route path="/faq" element={<Faq />} />
            <Route path="/events/Aarambh" element={<Aarambh />} />
            <Route path="/events/chemfor" element={<Chemfor />} />
            <Route path="/events/electrica" element={<Electrica />} />
            <Route path="/events/genesis" element={<Genesis />} />
            <Route path="/events/Karyarachna" element={<Karyarachna />} />
            <Route path="/events/kermis" element={<Kermis />} />
            <Route path="/events/mechanica" element={<Mechanica />} />
            <Route path="/events/plexus" element={<Plexus />} />
            <Route path="/events/robozar" element={<Robozar />} />
            <Route path="/workshops" element={<Workshop />} />
            <Route path="/under-construction" element={<UnderConstruction />} />
            <Route path="/" element={<HomeScreen />} />
            {!authContext.isUserLoggedIn && (
              <Route path="/sign-in" element={<SignIn />} />
            )}
            {!authContext.isUserLoggedIn && (
              <Route path="/sign-up" element={<SignUp />} />
            )}
            <Route path="/reset-password" element={<Reset />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/popup" element={<Popup />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/events/:title" element={<Events />} />
            <Route path="/merchandise" element={<Merch />} />
            {authContext.isUserLoggedIn && <Route path="/user-dashboard" element={<UserDashboard />} />}

            <Route path="/feedback" element={<Feedback />} />
            {/* <Route path="/confirmedmail" element={<Confirmedmail/>}/> */}

          </Routes>
        </div>
        {errorMade && (
          <ErrorModel
            title={errorMade.title}
            message={errorMade.message}
            onErrorClick={onErrorMadeHandle}
          />
        )}
      </GoogleReCaptchaProvider>
    </>
  );
}

export default App;
