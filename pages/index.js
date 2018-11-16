import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/">
      <a style={{ fontSize: 20, marginRight: 15 }}>Home</a>
    </Link>
    <Link href="/about">
      <a style={{ fontSize: 20, marginRight: 15 }}>About</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
