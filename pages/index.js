import Navigation from "../components/navigation";
import Header from "../components/header";

const Index = () => (
  <div>
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
      * {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Index;
