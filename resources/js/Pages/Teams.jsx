import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";


export default function Teams({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Teams" />
      <Navbar />
      <h1>Teams</h1>
    </>
  )
}