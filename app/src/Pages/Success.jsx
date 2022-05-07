import React from "react";
import { useNavigate } from "react-router";
import { Box, Button, Image } from "./SuccessStyles";

function Success() {
    const navigate = useNavigate()
  const handleClick = () => {
      navigate('/')
  }
//   document.getElementById("order").innerHTML = Math.round(
//     Math.random() * 3311000
//   );

  return (
    <Box>
      <Image
        src="https://www.clipartmax.com/png/full/179-1795386_patient-success-success-icon-png.png"
        alt=""
      />
      <h2>Thank you for your purchase!</h2>
      <p>
        Your order id: <span id="order"></span>
      </p>

      <Button onClick={handleClick}>Continue Shopping</Button>
    </Box>
  );
}

export default Success;

// onclick = { handleClick };
