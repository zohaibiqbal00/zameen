import Image from "next/image";
import Header from "./Components/Header/page"
import Navbar from "./Components/navbar/page"
import Banner from "./Components/Banner/page"

export default function Home() {
  return (
     <main className="h-screen  ">
       <Header />
       <Navbar/>
        <Banner/>
     </main>
  );
}
