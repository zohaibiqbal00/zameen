import Image from "next/image";
import Nav from './Components/Navbar/page'
import Header from './Components/Header/page'
import Properties from './Components/Properties/page'
import Footer from './Components/Footer/page';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <Nav />
      <Properties />
      <Footer/>
    </main>
  );
}
