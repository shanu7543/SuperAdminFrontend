import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

 // Define the background image URL
 const backgroundImageUrl =
"https://cdn.wallpapersafari.com/73/33/P9b2gR.jpg"

const mainDivStyle: React.CSSProperties = {
 backgroundImage: `url(${backgroundImageUrl})`, // Set the background image
 backgroundSize: "cover", // Adjust the background size as needed
};



  return (
    <main
      className={` h-screen w-screen`} style={mainDivStyle}
    > 
     
     
      <div className="text-center  flex flex-col items-center justify-center h-screen w-screen" >
      
        <h1 className="text-4xl">
          <b>
            <i>Welcome to Vidychat Super Admin Portal...</i>{" "}
          </b>{" "}
        </h1>
        <div className="float-right">
      <Link className="text-white" href="/login">
          <button
            type="button"
            className="ml-1 w-16 rounded-3xl bg-black pb-1 text-center text-sm font-medium text-white transition
                duration-500 hover:scale-105"
          >
            Login
          </button>
        </Link>
      </div>
      </div>
      
    </main>
  );
}
