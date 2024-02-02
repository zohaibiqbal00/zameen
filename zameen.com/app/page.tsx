import Image from "next/image";
import Header from "./wajid/Header/page"
import Navbar from "./wajid/navbar/page"
import Banner from "./wajid/Banner/page"

export default function Home() {
  return (
     <main className="h-screen  ">
       <Header />
       <Navbar/>
        <Banner/>
     </main>
  );
}
