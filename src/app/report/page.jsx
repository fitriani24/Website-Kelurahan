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
            <p className="text-lg">Beranda</p>
            <p className="text-lg text-black ml-2">&gt; Laporan</p>
          </span>
          <h1 className="text-3xl text-lime-500 font-semibold underline">
            Laporan
          </h1>
          <div className="px-0 mt-12 text-center">
            <h2 className="font-semibold my-2 text-2xl">
              DAFTAR LAPORAN KELURAHAN TANJUNG TAHUN 2024
            </h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nama
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Deskripsi
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Unduh
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
                    <td className="px-6 py-4">Abdul</td>
                    <td className="px-6 py-4">Laporan Kejadian</td>
                    <td className="px-6 py-4">
                      <button className="p-2 bg-lime-500 hover:bg-lime-400 rounded-md text-white">
                        Download
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      2
                    </th>
                    <td className="px-6 py-4">Apis</td>
                    <td className="px-6 py-4">Laporan Peristiwa</td>
                    <td className="px-6 py-4">
                      <button className="p-2 bg-lime-500 hover:bg-lime-400 rounded-md text-white">
                        Download
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      3
                    </th>
                    <td className="px-6 py-4">Vio</td>
                    <td className="px-6 py-4">Laporan Warga</td>
                    <td className="px-6 py-4">
                      <button className="p-2 bg-lime-500 hover:bg-lime-400 rounded-md text-white">
                        Download
                      </button>
                    </td>
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
