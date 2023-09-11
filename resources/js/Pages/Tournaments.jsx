import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";


export default function Tournaments({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Tournaments" />
      <Navbar />
      <h1>Tournaments</h1>
    </>
  )
}