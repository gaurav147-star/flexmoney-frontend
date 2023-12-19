import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
const defaultTheme = createTheme();

const Form = () => {
  const host = process.env.REACT_APP_API_URL;
  const [userData, setUserData] = useState([]);
  const [usertoken, setUserToken] = useState(""); // Declare usertoken as a state variable

  useEffect(() => {
    // Retrieve userData from localStorage
    const userData = localStorage.getItem("userData");

    // Check if userData exists in localStorage
    if (userData) {
      // Parse userData if it's stored as a JSON string
      const parsedUserData = JSON.parse(userData);

      // Use parsedUserData as needed in your component
      setUserToken(parsedUserData.token);
      setUserData(parsedUserData.user);
    }
  }, []);

  const [formData, setFormData] = React.useState({
    name: userData.name,
    email: userData.email,
    gender: "",
    age: "",
    batch: "",
    start_date: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `${host}/api/user`,
        {
          userId: userData._id,
          gender: formData.gender,
          age: formData.age,
          currentBatch: formData.batch,
        },
        {
          headers: {
            authorization: usertoken, // Send the token in the Authorization header
          },
        }
      );

      // Assuming the response contains a token or user data you want to save in localStorage
      localStorage.setItem("userData", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4">
              Application Form
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                mt: 5,
                background: "whitesmoke",
                padding: "40px",
                borderRadius: "12px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Your Name"
                    autoFocus
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={8}>
                  <FormControl fullWidth required>
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      label="gender"
                      id="demo-simple-select"
                      value={formData.gender}
                      name="gender"
                      onChange={handleInputChange}
                      fullWidth
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    required
                    fullWidth
                    name="age"
                    label="Age"
                    type="age"
                    id="age"
                    autoComplete="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel id="demo-simple-select-label">Batch</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.batch}
                      label="Batch"
                      name="batch"
                      onChange={handleInputChange}
                      fullWidth
                    >
                      <MenuItem value="6AM-7AM">6AM-7AM</MenuItem>
                      <MenuItem value="7AM-8AM">7AM-8AM</MenuItem>
                      <MenuItem value="8AM-9AM">8AM-9AM</MenuItem>
                      <MenuItem value="5PM-6PM">5PM-6PM</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Form;
