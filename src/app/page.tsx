"use client"
import ShimmerButton from "@/components/ui/shimmer-button";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <header className="flex flex-col justify-center text-center h-[60vh] lg:h-[90vh]">
        <h1 className="text-6xl lg:text-8xl font-extrabold ">Spending Diary</h1>
        <h3 className="text-xl lg:text-2xl mt-6 mx-3 font-semibold">Track, Split, and Simplify Your Expenses with Friends.</h3>
        <div className="flex gap-5 mt-5 justify-center">
          <button onClick={() => router.push("/login")} className="border-2 border-black px-5 py-2 rounded-sm ml-2">Log In</button>
          <ShimmerButton borderRadius="15px" shimmerSize="0.08em" onClick={() => router.push("/register")}>Get Started</ShimmerButton>
        </div>
      </header>

      <section className="flex flex-col items-center text-center mt-8 p-2">
        <div>
          <h2 className="text-4xl font-bold">Track Expenses</h2>
          <p className="mt-5 text-xl">Easily record every expense you make, whether solo or with friends</p>
        </div>
        <div className="mt-10">
          <h2 className="text-4xl font-bold">Split Expenses</h2>
          <p className="mt-5 text-xl">Split expenses seamlessly between friends.</p>
        </div>
        <div className="mt-10">
          <h2 className="text-4xl font-bold">Track with Friends</h2>
          <p className="mt-5 text-xl">Track what you owe and what friends owe you to settle balances with fewer transactions.</p>
        </div>
      </section>
      <footer className="mt-10 bg-secondary pt-5 pb-3">
        <div className="w-[80%] md:w-[50%] lg:w-[30%] mx-auto flex justify-between">
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <p className="text-center mt-2">All rights reserved.</p>
      </footer>
    </div>
  );
}
