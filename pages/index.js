import { useEffect, useRef, useState, useCallback } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  const wrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    const width = wrapperRef.current.offsetWidth;

    if (width < 769) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={wrapperRef}>
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
};

export default Home;
