import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";


export default function Watch({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Watch" />
      <Navbar />
      <h1>Watch</h1>
    </>
  )
}