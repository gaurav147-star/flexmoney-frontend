import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

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
            style={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}
            onClick={()=>navigate("/form")}
            >
            Application Form
          </Typography>
          <Typography
              variant="h6"
              style={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}
              onClick={()=>navigate("/profile")}
              >
            Profile
          </Typography>
          <Typography
              variant="h6"
            style={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}
          >
            Login
          </Typography>
        </Box>
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 700,
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
        </Typography>
      </Container>
    </>
  );
};

export default Navbar;