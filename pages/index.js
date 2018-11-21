import Navigation from "../components/navigation";
import Header from "../components/header";
import globalStyles from "../assets/globalStyles";

const Index = () => (
  <div>
    {globalStyles()}
    <Header />
    <Navigation />
    <div className="div-paragraph">
      <p>First paragraph 50%</p>
      <p>Second paragraph 50%</p>
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
        border: 1px solid green;
        padding: 20px;
      }
      .div-img {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
        width: 100%;
        height: 100%;
      }
      img {
        border: 1px solid green;
        width: 100%;
        object-fit: cover;
      }
    `}</style>
  </div>
);

export default Index;
