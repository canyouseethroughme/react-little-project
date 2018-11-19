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
    <style jsx>{`
      .div-paragraph {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      p {
        color: red;
        font-size: 14px;
      }
    `}</style>
  </div>
);

export default Index;
