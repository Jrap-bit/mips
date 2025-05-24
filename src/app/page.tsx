import Image from "next/image";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-center max-w-2xl">
          We are a team of dedicated professionals committed to providing the
          best services to our clients. Our mission is to deliver high-quality
          solutions that meet the needs of our customers.
        </p>
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          width={500}
          height={300}
          className="mt-8 rounded-lg shadow-lg"
        />
        <div className="mt-8">
          <a
            href="/About"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            Learn More
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
