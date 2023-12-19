import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const formData = state?.formData;

  const handlePayment = () => {
    console.log("Processing payment...");
    const currentDate = new Date().toLocaleDateString();
    navigate("/thankyou", { state: { formData, paymentDate: currentDate } });
  };

  return (
    <>
      <Card
        style={{
          maxWidth: "300px",
          margin: "auto",
          marginTop: "5%",
          background: "whitesmoke",
          padding: "40px",
          borderRadius: "12px",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Debit Card Payment
          </Typography>
          <Typography variant="body">Form Fee: Rs. 500</Typography>
          <form>
            <TextField
              label="Card Number"
              variant="outlined"
              fullWidth
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              style={{ margin: "10px" }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DemoContainer components={["DateField"]}> */}
                <DateField
                  label="Expiry Date"
                  variant="outlined"
                  fullWidth
                  value={expiryDate}
                  onChange={(newValue) => setExpiryDate(newValue)}
                  style={{ margin: "10px" }}
                />
              {/* </DemoContainer> */}
            </LocalizationProvider>

            <TextField
              label="CVV"
              variant="outlined"
              fullWidth
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              style={{ margin: "10px" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handlePayment}
              style={{ margin: "10px" }}
            >
              Pay Now
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/")}
              style={{ margin: "10px" }}
            >
              Pay Later
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default PaymentForm;
