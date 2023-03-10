import React,{useContext} from "react";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import { GiDeliveryDrone} from "react-icons/gi";
// import Menu from "./Menu";
import Button from "./Button";
import logo from "./logo.png";
import AuthContext from '../../auth/authContext';

const Navbar1 = ({ toggleDrawer }) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const logOutHandler = async () => {
    authContext.logout();
    navigate("/");
  };

  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <GiDeliveryDrone />
        </DrawerButton>

        <Image src={logo} alt="" />
        <RightNav>     
          {/* <NavRoutes>
          <NavRoute
                  to="/"
                  key="Home"
                >
                  Home
                </NavRoute>
                <NavRoute
                  to="/under-construction"
                  key="Workshops"
                >
                  Workshops
                </NavRoute>
                <NavRoute
                  to="/about"
                  key="About Us"
                >
                  About Us
                </NavRoute>
                <NavRoute
                  to="/faq"
                  key="faq"
                >
                  FAQ
                </NavRoute>
                <NavRoute
                  to="/our-team"
                  key="our-team"
                >
                  Our Team
                </NavRoute>   
                <Menu/>
                {authContext.isUserLoggedIn && (
                <NavRoute
                  to="/dashboard"
                  key="dashboard"
                >
                  Dashboard
                </NavRoute>
                )}
          </NavRoutes> */}
          {/* {!authContext.isUserLoggedIn && (
              <Link to="/sign-in" className="signInButton">
                <LoginButton>Login</LoginButton>
              </Link>
            )}
            
            {authContext.isUserLoggedIn && (
              <Link to="/" className="signInButton" onClick={logOutHandler}>
                <LoginButton>Logout</LoginButton>
              </Link>
            )} */}
          <Button/>
          

        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar1;

const DrawerButton = styled.button`
  all: unset;
  font-size: 2rem;
  display: grid;
  // color: #68fe04;
  z-index:1;
  // @media (min-width: 780px) {
  //   display: none;
  // }
`;

const SNavbar = styled.nav`
      background-color: black;

  @media (max-width: 780px){
      opacity:100%;
    }
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 80px;
  max-width: 1400px; 
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const Image = styled.img`
@media (max-width: 900px){
  width:140px;
  // margin-left:-3.5rem;
  
  }
    width: 200px;
`;
const RightNav = styled.div`
  display: flex;
  gap: 1rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 1rem;
   z-index:1;
  align-items: center;

`;
// const NavRoute = styled(Link)`
//   text-decoration: none;
//   color: white;
//   padding: 0.5rem;
//   transition: 0.5s ease;
//   &:hover {
//     transition: 0.3s ease-in;
//     color: black;
//     border-radius: 10px;
//     background-color: #68fe04;
//   }
// `;

