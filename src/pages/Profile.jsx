import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import Navbar from "../components/Navbar";

const Profile = ({ user, applicationStatus, paymentStatus }) => {
  return (
    <>
    <Navbar/>
    <hr />
      <Paper
        elevation={3}
        style={{ padding: "20px", margin: "20px", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          User Profile
        </Typography>

        {/* Display User Information */}
        {user && (
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h5" gutterBottom>
              User Information:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary={`Name: ${user.firstName} ${user.lastName}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Email: ${user.email}`} />
              </ListItem>
              {/* Add more user details as needed */}
            </List>
          </div>
        )}

        {/* Display Application Status */}
        {applicationStatus && (
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Application Status:
            </Typography>
            <Typography>{applicationStatus}</Typography>
          </div>
        )}

        {/* Display Payment Status */}
        {paymentStatus && (
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Payment Status:
            </Typography>
            <Typography>{paymentStatus}</Typography>
          </div>
        )}
      </Paper>
    </>
  );
};

export default Profile;
