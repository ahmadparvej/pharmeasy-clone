import React from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/otp");
  };

  return (
    <div id="Paybody">
      <form id="Payform">
        <h3>Enter Card Details</h3>
        <div className="Pay-nav-bar"></div>
        <div className="all">
          <label className="ladal">Card Number</label>
          <input
            classNameName="Pay-input"
            type="number"
            placeholder="Card Number"
            id="cardnum"
            maxlength="9"
          />
        </div>
        <div>
          <label className="ladal">Expiry Date</label>
          <div className="all" id="Paydatediv">
            <input
              classNameName="Pay-input"
              type="text"
              id="month"
              placeholder="MM"
              maxlength="2"
              oninput="this.value=this.value.replace(/[^00-99]/g,'');"
            />
            <p id="Payslash">/</p>
            <input
              classNameName="Pay-input"
              type="text"
              id="year"
              placeholder="YY"
              maxlength="2"
              oninput="this.value=this.value.replace(/[^00-99]/g,'');"
            />
          </div>
        </div>

        <div className="all">
          <label className="ladal">CVV</label>
          <input
            classNameName="Pay-input"
            type="text"
            id="cvv"
            placeholder="•••"
            maxlength="3"
            oninput="this.value=this.value.replace(/[^000-999]/g,'');"
          />
        </div>

        <div className="all">
          <label className="ladal">Name</label>
          <input
            classNameName="Pay-input"
            type="text"
            id="name"
            placeholder="Enter Cardholder's Full Name"
          />
        </div>
        <input
          classNameName="Pay-input"
          onClick={handleClick}
          type="submit"
          value="PAY"
        />
      </form>
    </div>
  );
}

export default Payment;