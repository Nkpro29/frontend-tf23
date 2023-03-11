import React,{useContext,useState,useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { TbAlignLeft} from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
// import Menu from "./Menu";
import { baseUrl } from "../../API/api";
import axios from "axios";
import logo from "./logo.png";
import AuthContext from '../../auth/authContext';


const Navbar1 = ({ toggleDrawer }) => {
  const [user, setUser] = useState(false);
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();


  const navigateHandler = () => {
    navigate("/sign-in")
  }

  const navigateHomeHandler = () => {
    navigate("/")
  }

  useEffect(() => {
    axios
      .get(`${baseUrl}/user/getUserById`, {
        headers: {
          Authorization: "Bearer " + authContext.token,
        },
      })
      .then((result) => {
 
        setUser(result.data.user);
      })
      .catch((err) => {
          console.log(err);
      })
      
  }, [authContext.login])
  
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <TbAlignLeft />
        </DrawerButton>
        <Image src={logo} alt="" onClick={navigateHomeHandler}/>
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
            {!authContext.isUserLoggedIn && 
          <LoginButton onClick={navigateHandler}>Login</LoginButton>}
            {authContext.isUserLoggedIn && 
            <div style={{display: "flex", cursor: "pointer"}}>
              <FaRegUser style={{fontSize: "23px", marginRight: "5px"}}/>
              <Profile onClick="">Hi! {user.name}</Profile>              
              </div>
}

        </RightNav>
      </NavContainer>
    </SNavbar>
  );
}

export default Navbar1;

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  // color: #68fe04;
  z-index:1;
  @media (max-width: 780px) {
    font-size: 2rem;
  }
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
    width:20%;
    @media (max-width: 600px) {
      width: 50%;
    }
`;

const Profile = styled.h2`
@media (max-width: 900px){
  display: none;
}
`
const RightNav = styled.div`
  display: flex;
  gap: 1rem;
`;
const LoginButton = styled.button`
  padding: 8px 25px;
  margin-left: 0.6rem;
  font-size: 20px;
  color:#68fe04;
  background-color: black;
  border: 1px solid #68fe04;
  border-radius: 2rem;
  transition: 0.3s ease;
  align-self: flex-start;
  z-index:1;
  cursor:pointer;
  &:hover {
    transition: 0.3s ease;
    color: black;
    background-color:#68fe04;
    // border: 1px solid transparent;
    // box-shadow: 0px 0px 10px black;

  }
  @media (max-width: 600px){
    font-size: 12px;
    padding: 5px 16px;
  }
`;
// const NavRoutes = styled.div`
//   @media (max-width: 900px) {
//     display: none;
//   }
//   display: flex;
//   gap: 1rem;
//   font-size: 1rem;
//    z-index:1;
//   align-items: center;

// `;
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

