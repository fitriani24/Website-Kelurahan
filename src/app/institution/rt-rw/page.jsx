import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa";

export default function RtRw() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-full h-screen mt-20">
        <div className="container px-5 md:px-8">
          <span className="text-lime-500 text-nowrap flex items-center">
            <p className="text-lg">Beranda &gt; Lembaga</p>
            <p className="text-lg text-black ml-2">&gt; RT & RW</p>
          </span>
          <h1 className="text-3xl text-lime-500 font-semibold underline">
            RT/RW
          </h1>
          <div className="px-0 mt-12 text-center">
            <h2 className="font-semibold my-2 text-2xl">
              DAFTAR NAMA KETUA RT/RW KELURAHAN TANJUNG TAHUN 2024
            </h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      RT
                    </th>
                    <th scope="col" className="px-6 py-3">
                      RW
                    </th>
                    <th scope="col" className="px-6 py-3">
                      NAMA KETUA RT/RW
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ALAMAT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b  hover:bg-gray-50">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      1
                    </th>
                    <td className="px-6 py-4 text-lime-500">
                      <FaCheck />
                    </td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4">Abdul</td>
                    <td className="px-6 py-4">Legok Oncom</td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      2
                    </th>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4 text-lime-500">
                      <FaCheck />
                    </td>
                    <td className="px-6 py-4">Apis</td>
                    <td className="px-6 py-4">Legok Hangseur</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      3
                    </th>
                    <td className="px-6 py-4 text-lime-500">
                      <FaCheck />
                    </td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4">Vio</td>
                    <td className="px-6 py-4">Tasikmalaya</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
