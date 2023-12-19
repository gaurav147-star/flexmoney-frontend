import React from "react";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

const ThankYou = () => {
  const paymentAmount = 500;

  const location = useLocation();
  const { state } = location;
  const { formData, paymentDate } = state || {};

  return (
    <>
      <Paper
        elevation={3}
        style={{ padding: "20px", margin: "20px", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          Thank You for Your Payment!
        </Typography>
        <Typography>
          Your payment of {paymentAmount} rupees has been successfully
          processed on {paymentDate}.
        </Typography>

        {formData && (
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Form Details:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary={`First Name: ${formData.firstName}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Last Name: ${formData.lastName}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Email: ${formData.email}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Gender: ${formData.gender}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Age: ${formData.age}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Batch: ${formData.batch}`} />
              </ListItem>
            </List>
          </div>
        )}
      </Paper>
      <NavLink
        to="/"
        style={{ margin: "auto", display: "block", textAlign: "center" }}
      >
        Return to home page
      </NavLink>
    </>
  );
};

export default ThankYou;
