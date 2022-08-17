import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => (
  <div>
    <Head>
      <title>Adektris.com</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Navbar />
      <Header />
      <About />
      <Journey />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default Home;
