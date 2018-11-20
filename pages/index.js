import Navigation from "../components/navigation";
import Header from "../components/header";
import globalStyles from "../assets/globalStyles";

const Index = () => (
  <div>
    {globalStyles()}
    <Header />
    <Navigation />
    <div className="div-paragraph">
      <p>First paragraph</p>
      <p>Second paragraph</p>
    </div>
    <dic className="div-img">
      <img src="/static/LT-Marshmallow.jpg" />
      <img src="/static/LT-Marshmallow.jpg" />
      <img src="/static/LT-Marshmallow.jpg" />
      <img src="/static/LT-Marshmallow.jpg" />
    </dic>
    <style jsx>{`
      .div-paragraph {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      p {
        color: red;
        font-size: 14px;
      }
      .div-img {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
      }
      img {
        border: 1px solid green;
        height: 30vh;
        width: 100%;
      }
    `}</style>
  </div>
);

export default Index;
