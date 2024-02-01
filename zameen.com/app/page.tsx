import Image from "next/image";
import Nav from './Components/Navbar/page'
import Header from './Components/Header/page'
import Properties from './Components/Properties/page'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Nav />
      <Properties />


    </main>
  );
}
