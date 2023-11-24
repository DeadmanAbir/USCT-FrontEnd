import Nav from "./Nav";
import Hero from "./Hero";
import Features from "./Features";
import Login from "./Login";
import { useLoaderData } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
function HomePage(){
    const data=useLoaderData();
    console.log(data);
    return(
    <>
    {/* <Nav /> */}
    <Hero />
    <Features />
    <Login checkState={data}/>
    </>
    )
  }

  export default HomePage;

  export function loader(){
  return auth.currentUser;
}