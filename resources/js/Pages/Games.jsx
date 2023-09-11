import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";


export default function Games({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Games" />
      <Navbar />
      <h1>Games</h1>
    </>
  )
}