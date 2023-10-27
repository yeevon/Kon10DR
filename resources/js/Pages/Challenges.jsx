import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";


export default function Challenges({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Challenges" />
      <Navbar />
      <h1>Challenges</h1>
    </>
  )
}