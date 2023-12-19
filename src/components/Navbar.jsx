import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    // Retrieve userData from localStorage
    const userData = localStorage.getItem("userData");

    // Check if userData exists in localStorage
    if (userData) {
      // Parse userData if it's stored as a JSON string
      const parsedUserData = JSON.parse(userData);

      // Use parsedUserData as needed in your component
      setUserData(parsedUserData.user);
    }
  }, []); // Empty dependency array to run this effect only once when component mounts

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ py: 3 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography
          style={{
            fontWeight: 700,
            fontSize: "30px",
            fontFamily: "'Pattaya', sans-serif",
          }}
          onClick={handleClick}
        >
          YOGA CLASSES
        </Typography>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              cursor: "pointer",
            }}
            onClick={() =>
              userData && userData.name ? navigate("/form") : navigate("/login")
            }
          >
            Application Form
          </Typography>
          {userData && userData.name && (
            <Typography
              variant="h6"
              style={{
                fontWeight: 700,
                fontFamily: "'Montserrat', sans-serif",
              }}
              onClick={() => navigate("/profile")}
            >
              Profile
            </Typography>
          )}
          {userData.length === 0 && (
            <Typography
              variant="h6"
              style={{
                fontWeight: 700,
                fontFamily: "'Montserrat', sans-serif",
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Typography>
          )}
        </Box>
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 700,
            fontFamily: "'Montserrat', sans-serif",
          }}
        ></Typography>
      </Container>
    </>
  );
};

export default Navbar;
