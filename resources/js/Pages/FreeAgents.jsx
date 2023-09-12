import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";


export default function FreeAgents({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Free Agents" />
      <Navbar />
      <h1>Free Agents</h1>
    </>
  )
}