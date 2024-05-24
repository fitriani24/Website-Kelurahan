import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaRssSquare } from "react-icons/fa";
import Pagination from "@/components/Pagination";
import { FaSearch } from "react-icons/fa";
import NewsCardContainer from "@/components/NewsCardContainer";

const News = () => {
  return (
    <div>
      <main className="min-h-screen">
        <Navbar />
        <div className="w-full h-screen mt-20">
          <div className="container px-5 md:px-8">
            <span className="text-lime-500 text-nowrap flex items-center">
              <p className="text-lg">Beranda</p>
              <p className="text-lg text-black ml-2">&gt; Berita</p>
            </span>
            <span className="flex text-3xl text-lime-500 font-semibold items-center">
              <h1 className="underline mr-2">Berita Terkini</h1>
              <FaRssSquare />
            </span>
            <div className="flex justify-end mt-2">
              <div className="flex items-center right-0 border-b border-gray-300 py-2">
                <FaSearch className="text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Pencarian Berita..."
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>
            </div>
            <NewsCardContainer />
          </div>
          <Pagination />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default News;
