import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import BackgroundMerchen from "../../../assets/Produk/ProductpageMerch.png";
import Choco1 from "../../../assets/ProductChocolate/productChocolateJar2.png";
import Choco2 from "../../../assets/ProductChocolate/productChocolateJar1.png";
import Choco3 from "../../../assets/ProductChocolate/productChocolateJar4.png";
import Choco4 from "../../../assets/ProductChocolate/productChocolateJar3.png";
import Bar1 from "../../../assets/ChocoBar/productChocobar3.png";
import Bar2 from "../../../assets/ChocoBar/productChocobar1.png";
import Bar3 from "../../../assets/ChocoBar/productChocobar2.png";
import Bar4 from "../../../assets/ChocoBar/productChocobar4.png";
import { Button, Modal, Select, Slider } from "antd";
import Footer from "../../layout/Footer";
import Filter from "../../../assets/Filter.png";
import { RightOutlined, CloseOutlined } from "@ant-design/icons";

function ProductMerchen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const handlePriceRangeChange = (value) => {
    // Mengatur range harga yang dipilih
    setPriceRange(value);
  };

  const products = [
    {
        image: Choco1,
        name: "Hazelnut ChocoBox",
        description: "Chocolate",
        originalPrice: "Rp28.000",
        discountedPrice: "Rp24.000",
        rating: 4,
      },
      {
        image: Choco2,
        name: "Melon ChocoBox",
        description: "Chocolate",
        originalPrice: "Rp28.000",
        discountedPrice: "Rp24.000",
        rating: 4,
      },
      {
        image: Choco3,
        name: "Matcha ChocoBox",
        description: "Chocolate",
        originalPrice: "Rp28.000",
        discountedPrice: "Rp24.000",
        rating: 4,
      },
      {
        image: Choco4,
        name: "Taro ChocoBox",
        description: "Chocolate",
        originalPrice: "Rp28.000",
        discountedPrice: "Rp24.000",
        rating: 4,
      },
      {
        image: Bar1,
        name: "Taro Chocobar",
        description: "Chocolate",
        originalPrice: "Rp28.000",
        discountedPrice: "Rp24.000",
        rating: 4,
      },
      {
        image: Bar2,
        name: "Hazelnut Chocobar",
        description: "Chocolate",
        originalPrice: "Rp28.000",
        discountedPrice: "Rp24.000",
        rating: 4,
      },
      {
        image: Bar3,
        name: "Strawberry Chocobar",
        description: "Chocolate",
        originalPrice: "Rp28.000",
        discountedPrice: "Rp24.000",
        rating: 4,
      },
      {
        image: Bar4,
        name: "Sea Salt Chocobar",
        description: "Chocolate",
        originalPrice: "Rp28.000",
        discountedPrice: "Rp24.000",
        rating: 4,
      },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  // Fungsi untuk menutup modal
  const handleOk = () => {
    setIsModalVisible(false);
  };

  // Fungsi untuk menutup modal jika dibatalkan
  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };


  return (
    <div className="w-screen h-screen  ">
    <Navbar />

    <div className="hidden md:inline">
      <div className=" flex flex-col h-auto w-screen mx-auto ">
        <div className="mt-24">
          <>
            <div
              className="w-full h-[240px] p-4 mb-4 md:mb-0 relative text-white flex justify-center items-center"
              style={{
                backgroundImage: `url(${BackgroundMerchen})`,
                backgroundSize: "cover", // Menentukan lebar gambar latar belakang
              }}
            >
              {/* Konten Anda di sini */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#41644A] to-transparent h-[100%]"></div>
              <div className="z-0 text-center relative">
                <h1 className="text-7xl font-bold relative">
                  <span
                    className="text-transparent"
                    style={{
                      WebkitTextStroke: "1px white",
                    }}
                  >
                    Merch & <span className="text-white">Others</span>
                  </span>
                </h1>
              </div>
            </div>
          </>

          <>
            <div className="flex justify-center items-center w-full h-auto">
              <div className="w-[80rem] h-auto ">
                <h2 className="text-lg font-bold  mb-4 mt-4">
                  Filter Pencarian
                </h2>

                <div className="flex space-x-5">
                  <div className="w-1/3 ">
                    <div className="p-4 bg-white shadow-2xl rounded-lg">
                      <h2 className="text-lg text-[#41644A] font-medium  mb-4">
                        Urutkan Menu
                      </h2>{" "}
                      <select className="w-full border rounded-sm px-3 py-2 focus:outline-none focus:border-[#3B8F51] mt-2 border-[#3B8F51] text-[#3B8F51]">
                        <option value="terfavorite">Ter-Favorite</option>
                        <option value="kategori1">Kategori 1</option>
                        <option value="kategori2">Kategori 2</option>
                        {/* Tambahkan lebih banyak opsi jika diperlukan */}
                      </select>
                      <br />
                      <br />
                      <br />
                      <>
                        <div>
                          <h2 className="text-lg text-[#41644A] font-medium  mb-4">
                            Range Harga
                          </h2>
                          <Slider
                            range
                            min={0}
                            max={100000}
                            defaultValue={[0, 100000]}
                            value={priceRange}
                            onChange={handlePriceRangeChange}
                            className="slider-track-color"
                          />

                          {/* Tampilkan nilai range harga dalam format rupiah */}
                          <div className="flex justify-between">
                            <span>
                              Min:{" "}
                              {priceRange[0].toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                              })}
                            </span>
                            <span>
                              Max:{" "}
                              {priceRange[1].toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                              })}
                            </span>
                          </div>

                          {/* CSS custom dengan Tailwind */}
                          <style>{`
                    .slider-track-color .ant-slider-track {
                      background-color: #3B8F51; /* Ganti warna garis slider menjadi hijau */
                    }
                    .slider-track-color .ant-slider-handle {
                      border-color: #3B8F51; /* Ganti warna border buletan menjadi hijau */
                      background-color: #3B8F51; /* Ganti warna buletan menjadi hijau */
                    }
                    
                  `}</style>
                        </div>
                      </>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Looping untuk menampilkan konten produk */}
                      <>
                        {products.map((product, index) => (
                          <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-xl p-4"
                          >
                            {/* Isi konten produk */}
                            <img
                              className="rounded-md"
                              src={product.image}
                              alt={`Product ${index}`}
                            />
                            <h3 className="text-md font-semibold mb-2 mt-2">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {product.description}
                            </p>
                            <p className="text-[#E53C3C] font-semibold text-sm">
                              <s>{product.originalPrice}</s>
                            </p>
                            <div className="mt-2">
                              <div className="text-lg font-semibold text-[#3B8F51]">
                                {product.discountedPrice}{" "}
                                <span className="text-[#FFCA0C] ml-5">
                                  &#9733;
                                  <span className="text-sm text-[#3B8F51] ml-1">
                                    {product.rating}/5
                                  </span>
                                </span>
                              </div>
                            </div>
                            {/* Informasi lebih lanjut atau tombol beli */}
                          </div>
                        ))}
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>


{/* Layar HP */}

    <>
    <div className="sm:inline lg:hidden md:hidden sm:w-full mx-auto justify-start  py-2">
          <div className="mt-20">
          <>
              <div
                className="w-full h-[110px] p-4 mb-4 md:mb-0 relative text-white flex justify-center items-center"
                style={{
                  backgroundImage: `url(${BackgroundMerchen})`,
                  backgroundSize: "cover", // Menentukan lebar gambar latar belakang
                }}
              >
                {/* Konten Anda di sini */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#41644A] to-transparent h-[100%]"></div>
                <div className="z-0 text-center relative">
                  <h1 className="text-2xl font-bold relative">
                    <span
                      className="text-transparent"
                      style={{
                        WebkitTextStroke: "1px white",
                      }}
                    >
                    Merch & <span className="text-white">Others</span>
                    </span>
                  </h1>
                </div>
              </div>
            </>
            <div className="px-4">
         <div className=" flex  text-black ">
            
            {/* Filter */}

            <>
              <div className="w-full mt-1">
                <p className="text-[#41644A] text-sm">
                  Search{" "}
                  <span className="ml-5 mr-5">
                    {" "}
                    <RightOutlined />{" "}
                  </span>{" "}
                  “Coffee Beans”
                </p>
              </div>

              {/* FILTER */}
              <div className="w-1/3">
                <Button
                  className="flex items-center text-white bg-[#3B8F51] border border-[#3B8F51] rounded-full transition-colors duration-300 ease-in-out"
                  onClick={showModal}
                >
                  <img src={Filter} alt="filter" className="w-4 h-2" />
                  <span className="ml-1">Filter</span>
                </Button>

                {/* Modal */}
                <Modal
                  title={
                    <span className="text-[#3B8F51] text-xl font-bold">
                      Filter Pencarian
                    </span>
                  }
                  closeIcon={<CloseOutlined style={{ color: "#3B8F51" }} />}
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <h2 className="text-lg text-[#41644A] font-medium mt-5 mb-2">
                    Urutkan Menu
                  </h2>
                  <Select
                    className="w-full mt-2 border-[#3B8F51] text-[#3B8F51]"
                    onChange={handleSelectChange}
                    value={selectedOption || "0"} // Mengatur nilai default ke opsi pertama
                  >
                    <Option value="0" style={{ color: "#3B8F51" }}>
                      Ter-Favorite
                    </Option>
                    <Option value="1" style={{ color: "#3B8F51" }}>
                      Kategori 1
                    </Option>
                    <Option value="2" style={{ color: "#3B8F51" }}>
                      Kategori 2
                    </Option>
                    {/* Tambahkan lebih banyak opsi jika diperlukan */}
                  </Select>
                  <>
                    <div>
                      <h2 className="text-lg text-[#41644A] font-medium mt-5 mb-5">
                        Range Harga
                      </h2>
                      <Slider
                        range
                        min={0}
                        max={100000}
                        defaultValue={[0, 100000]}
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        className="slider-track-color"
                      />

                      {/* Tampilkan nilai range harga dalam format rupiah */}
                      <div className="flex justify-between">
                        <span>
                          Min:{" "}
                          {priceRange[0].toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </span>
                        <span>
                          Max:{" "}
                          {priceRange[1].toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </span>
                      </div>

                      {/* CSS custom dengan Tailwind */}
                      <style>{`
                      .slider-track-color .ant-slider-track {
                        background-color: #3B8F51; /* Ganti warna garis slider menjadi hijau */
                      }
                      .slider-track-color .ant-slider-handle {
                        border-color: #3B8F51; /* Ganti warna border buletan menjadi hijau */
                        background-color: #3B8F51; /* Ganti warna buletan menjadi hijau */
                      }
                      
                    `}</style>
                    </div>
                  </>
                </Modal>
              </div>
            </>
          </div>
          {/* PRODUK */}
          <>
            <div className="mt-5">
              {" "}
              <div className="sm:w-2/3 ml-0 sm:ml-6">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Looping untuk menampilkan konten produk */}
                  <>
                    {products.map((product, index) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md p-4"
                      >
                        {/* Isi konten produk */}
                        <img
                          className="rounded-md"
                          src={product.image}
                          alt={`Product ${index}`}
                        />
                        <h3 className="text-base font-semibold mb-2 mt-2">
                          {product.name}
                        </h3>
                        <p className="text-[10px] text-gray-600">
                          {product.description}
                        </p>
                        <p className="text-[#E53C3C] font-semibold text-[10px]">
                          <s>{product.originalPrice}</s>
                        </p>
                        <div className="mt-2">
                          <div className="text-xs text-[#3B8F51]">
                            {product.discountedPrice}{" "}
                            <span className="text-[#FFCA0C] ml-8">
                              &#9733;
                              <span className="text-xs text-[#3B8F51] ml-2">
                                {product.rating}/5
                              </span>
                            </span>
                          </div>
                        </div>
                        {/* Informasi lebih lanjut atau tombol beli */}
                      </div>
                    ))}
                  </>
                </div>
              </div>
            </div>
          </>
         </div>
          </div>
          </div>
    
    </>

    <Footer />
  </div>
  )
}

export default ProductMerchen
