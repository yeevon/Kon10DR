import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";


export default function News({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="News" />
      <Navbar />
      <h1>News</h1>
    </>
  )
}