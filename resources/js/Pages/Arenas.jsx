import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";


export default function Arenas({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Arenas" />
      <Navbar />
      <h1>Arenas</h1>
    </>
  )
}