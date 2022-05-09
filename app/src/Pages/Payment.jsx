import React from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import { Box, Form, Input, Label } from "./PaymentStyles";

function Payment() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/otp");
  };

  return (
    <Box>
      <Form>
        <h3>Enter Card Details</h3>
        <div className="Pay-nav-bar"></div>
        <div className="all">
          <Label className="ladal">Card Number</Label>
          <Input
            classNameName="Pay-input"
            type="number"
            placeholder="Card Number"
            id="cardnum"
            maxLength="9"
            required
          />
        </div>
        <div>
          <Label className="ladal">Expiry Date</Label>
          <div className="all" id="Paydatediv">
            <Input
              classNameName="Pay-input"
              type="text"
              id="month"
              placeholder="MM"
              maxLength="2"
              oninput="this.value=this.value.replace(/[^00-99]/g,'');"
              required
            />
            <p id="Payslash">/</p>
            <Input
              classNameName="Pay-input"
              type="text"
              id="year"
              placeholder="YY"
              maxLength="2"
              oninput="this.value=this.value.replace(/[^00-99]/g,'');"
              required
            />
          </div>
        </div>

        <div className="all">
          <Label className="ladal">CVV</Label>
          <Input
            classNameName="Pay-input"
            type="text"
            id="cvv"
            placeholder="•••"
            maxLength="3"
            onInput="this.value=this.value.replace(/[^000-999]/g,'');"
            required
          />
        </div>

        <div className="all">
          <Label className="ladal">Name</Label>
          <Input
            classNameName="Pay-input"
            type="text"
            id="name"
            placeholder="Enter Cardholder's Full Name"
            required
          />
        </div>
        <Input
          classNameName="Pay-input"
          onClick={handleClick}
          type="submit"
          value="PAY"
          required
        />
      </Form>
    </Box>
  );
}

export default Payment;
