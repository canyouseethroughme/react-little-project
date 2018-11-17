import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <header>
      <h1>Header H1</h1>
    </header>
    <div className="div-paragraph">
      <p>First paragraph</p>
      <p>Second paragraph</p>
    </div>
    <style jsx>{`
      a {
        margin-right: 15px;
      }

      .div-paragraph {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      * {
        font-size: 20px;
        text-align: center;
      }

      p {
        color: red;
        font-size: 14px;
      }
    `}</style>
  </div>
);

export default Index;
