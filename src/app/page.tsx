import Image from "next/image";
import NavBar from "./components/NavBar";
import Products from "./components/Products"

export default function Home() {
  return (
    <div className="w-full">
      
        <NavBar />
        <Products />

      
      

    </div>
  );
}
