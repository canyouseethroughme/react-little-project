import React from "react";
import Header from "../components/header";
import Navigation from "../components/navigation";
import globalStyles from "../assets/globalStyles";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
      modalVisible: false
    };
  }

  handleChange = e => {
    const {
      target: { value }
    } = e;

    this.setState({ color: value });
  };

  render() {
    const { color, modalVisible } = this.state;

    return (
      <div>
        {globalStyles()}
        <Header />
        <Navigation />
        <p>This is the about page</p>
        <style jsx>{`
          p {
            color: red;
            font-size: 14px;
          }

          .div-modal {
            height: 300px;
            width: 300px;
            position: fixed;
            top: 20%;
            left: calc(50% - 150px);
            border: 2px solid #fafafa;
            background-color: #fff;
          }

          .div-color {
            background-color: ${color};
            height: 200px;
            width: 200px;
            margin: 0 auto;
          }
        `}</style>

        <button
          onClick={() => {
            this.setState(prevState => ({
              modalVisible: !prevState.modalVisible
            }));
          }}
        >
          Toggle modal
        </button>

        {modalVisible && (
          <div className="div-modal">
            Change color
            <input type="color" value={color} onChange={this.handleChange} />
            <button
              onClick={() => {
                this.setState(prevState => ({
                  modalVisible: false
                }));
              }}
            >
              Cancel
            </button>
            <div className="div-color" />
          </div>
        )}
      </div>
    );
  }
}
