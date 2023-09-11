import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";


export default function AboutUs({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="About Us" />
      <Navbar />
      <h1>About Us</h1>
    </>
  )
}