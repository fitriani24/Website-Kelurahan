import React from "react";
import Navbar from "@/components/Navbar";
import GalleryCardContainer from "@/components/GalleryCardContainer";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-full h-screen mt-20">
        <div className="container px-5 md:px-8">
          <span className="text-lime-500 text-nowrap flex items-center">
            <p className="text-lg">Beranda</p>
            <p className="text-lg text-black ml-2">&gt; Galeri</p>
          </span>
          <span className="flex text-3xl text-lime-500 font-semibold items-center">
            <h1 className="underline mr-2">Album Galeri</h1>
          </span>
          <div className="px-0 mt-6 text-center font-semibold">
            <h1 className="text-3xl">Galeri</h1>
          </div>
          <GalleryCardContainer />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Gallery;
