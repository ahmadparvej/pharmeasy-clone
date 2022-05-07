// import React, { Component } from "react";
// import OtpInput from "react-otp-input";
// import { useNavigate } from "react-router-dom";

// export default class App extends Component {
//     state = { otp: "" };

//     navigate = useNavigate

//   handleChange = (otp) => this.setState({ otp });

//     handleClick = () => {
//         let path = `success`;
//         this.navigate(path);
//     }

//   render() {
//     return (
//       <div >
//         <OtpInput
//           style={{ margin: "auto" }}
//           value={this.state.otp}
//           onChange={this.handleChange}
//           numInputs={4}
//           separator={<span>-</span>}
//         />
//         <button onClick={ this.handleClick}>Submit</button>
//       </div>
//     );
//   }
// }

import React from "react";
import "./OTP.css";

class Otpinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value1, event) {
    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event) {
    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 5) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  render() {
    return (
      <div className="body">
        <div id="container">
          <form onSubmit={this.handleSubmit}>
            <h3>Mobile phone verification</h3>
            <div>
              <p class="text">
                Enter the code we just send on your mobile phone
              </p>
              <p class="num_resend">+91 *******233</p>
            </div>

            <div className="otpContainer">
              <input
                name="otp1"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={this.state.otp1}
                onKeyPress={this.keyPressed}
                onChange={(e) => this.handleChange("otp1", e)}
                tabIndex="1"
                maxLength="1"
                onKeyUp={(e) => this.inputfocus(e)}
              />
              <input
                name="otp2"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={this.state.otp2}
                onChange={(e) => this.handleChange("otp2", e)}
                tabIndex="2"
                maxLength="1"
                onKeyUp={(e) => this.inputfocus(e)}
              />
              <input
                name="otp3"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={this.state.otp3}
                onChange={(e) => this.handleChange("otp3", e)}
                tabIndex="3"
                maxLength="1"
                onKeyUp={(e) => this.inputfocus(e)}
              />
              <input
                name="otp4"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={this.state.otp4}
                onChange={(e) => this.handleChange("otp4", e)}
                tabIndex="4"
                maxLength="1"
                onKeyUp={(e) => this.inputfocus(e)}
              />

              <input
                name="otp5"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={this.state.otp5}
                onChange={(e) => this.handleChange("otp5", e)}
                tabIndex="5"
                maxLength="1"
                onKeyUp={(e) => this.inputfocus(e)}
              />
            </div>
            <div className="btn">
              <button className="primary" type="submit">
                Submit
              </button>
            </div>
            <div>
              <p class="text">Don't receive the code?</p>
              <p class="num_resend">Resend</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Otpinput;
