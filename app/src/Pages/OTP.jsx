import React from "react";
// import { useNavigate } from "react-router-dom";
import "./OTP.css";

class Otpinput extends React.Component {
  // navigate = this.useNavigate()

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
    // this.Navigate("success");
    // window.location('success')
    // onClick={()=> this.props.history.push('/')}
    this.props.history.push("/");
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
              <p className="text">
                Enter the code we just send on your mobile phone
              </p>
              <p className="num_resend">+91 *******233</p>
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
              <button
                className="primary"
                type="submit"
                // onClick={() => this.props.history.push("/")}
              >
                Submit
              </button>
            </div>
            <div>
              <p className="text">Don't receive the code?</p>
              <p className="num_resend">Resend</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Otpinput;
