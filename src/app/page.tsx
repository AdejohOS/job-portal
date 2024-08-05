import Hero from "@/components/hero";
import Jobs from "@/components/jobs";
import Image from "next/image";

export default async function Home() {
  // Get the URL to redirect the user to AuthKit to sign in

  return (
    <main className="">
      <Hero />
      <Jobs />
    </main>
  );
}
