import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";


export default function TermsOfUse({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Terms of Use" />
      <Navbar />
      <h1>Terms of Use</h1>
    </>
  )
}