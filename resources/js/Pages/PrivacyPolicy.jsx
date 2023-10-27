import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";


export default function PrivacyPolicy({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Privacy Policy" />
      <Navbar />
      <h1>PrivacyPolicy</h1>
    </>
  )
}