import React, { useEffect, useState } from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import Navbar from "../components/Navbar";
import { format } from "date-fns";

const Profile = () => {
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
  }, []);
  return (
    <>
      <Navbar />
      <hr />
      <Paper
        elevation={3}
        style={{ padding: "20px", margin: "20px", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          User Profile
        </Typography>

        {/* Display User Information */}
        {userData && (
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h5" gutterBottom>
              User Information:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary={`Name: ${userData.name}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Email: ${userData.email}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Gender: ${userData.gender}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Age: ${userData.age}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Batch: ${userData.currentBatch}`} />
                <ListItemText primary={`Date: ${userData.startDates}`} />
              </ListItem>
              {/* Add more user details as needed */}
            </List>
          </div>
        )}

        {/* Display Application Status */}
        {/* {applicationStatus && (
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Application Status:
            </Typography>
            <Typography>{applicationStatus}</Typography>
          </div>
        )} */}

        {/* Display Payment Status */}

        <div style={{ marginTop: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Payment Status:
          </Typography>
          <Typography>
            Payment Successfull Completed for the {userData.currentBatch}
          </Typography>
        </div>
      </Paper>
    </>
  );
};

export default Profile;
