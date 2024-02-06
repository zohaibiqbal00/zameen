import Image from "next/image";
import Nav from './Components/Navbar/page'
import Header from './Components/Header/page'
import Properties from './Components/Properties/page'
import Footer from './Components/Footer/page';
import Project from './Components/Project/page'
import Tabs from './Components/Tabs/page'
import Community from './Components/Community/page'

import Explore from './Components/Explore/page'
import Slider from './Components/Project/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <Nav />
      <Properties />

      {/* <Slider/> */}
      <Community/>

      <Explore/>
      <Project/>

      <Tabs/>
      <Footer/>
    </main>
  );
}
