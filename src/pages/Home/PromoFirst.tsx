import { useState, useEffect } from "react";

import Section from "src/components/Section/Section";
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import { getSmartPhones } from "src/store/product/smartPhoneSlice";
import ListProduct from "src/components/ListProduct/ListProduct";
import { Pagination } from "antd";
import Slider from "react-slick";
import NextArrow from "src/components/Slick/NextArrow";
import PrevArrow from "src/components/Slick/PrevArrow";
import ProductCard from "src/components/ProductCard/ProductCard";

const PromoFirst = () => {
  const { banner } = useAppSelector((state) => state.banner.promo.firstpromo);

  const handlePageChange = (page: number) => {
    // setCurrentPage(page - 1);
  };

  const fakeData = [
    {
      id: 1,
      name: "Đèn LED Ốp Trần 24W Vuông Viền Đen Dimmer HT Light Level",
      price: 945000,
      salePrice: 925000,
      star: 5,
      totalReview: 325,
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/01/den-led-op-tran-24W-vuong-vien-den.jpg",
    },
    {
      id: 2,
      name: "Đèn LED Ốp Trần 24W Tròn Viền Đen Dimmer",
      price: 920000,
      salePrice: 900000,
      star: 5,
      totalReview: 1325,
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/01/op-tran-tron-24w.png",
    },
    {
      id: 3,
      name: "Đèn LED Ốp Trần 6W Vuông Viền Đen Dimmer",
      price: 180000,
      salePrice: 170000,
      star: 5,
      totalReview: 355,
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/04/den-led-bulb-ht-light-level-200x240.jpg",
    },
    {
      id: 4,
      name: "Đèn LED Ốp Trần 12W Tròn Viền Đen Dimmer",
      price: 1250000,
      salePrice: 1200000,
      star: 5,
      totalReview: 355,
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/10/den-led-spotlight-am-tran-8091-21W-ht-200x240.jpg",
    },
    {
      id: 5,
      name: "Đèn Pha LED 5059 400W",
      price: 6850000,
      salePrice: 6750000,
      star: 5,
      totalReview: 365,
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/04/den-pha-led-5059-400W-ht-01-200x240.jpg",
    },
    {
      id: 6,
      name: "Đèn LED Ốp Trần 12W Tròn Viền Đen Dimmer",
      price: 710000,
      salePrice: 700000,
      star: 5,
      totalReview: 355,
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/10/den-roi-ray-8017-vo-trang-ht.jpg",
    },
  ];
  return (
    <Section styles={`rounded-xl overflow-hidden `}>
      <>
        <div>
          <img
            src={
              "https://cdn.tgdd.vn/2022/08/banner/TGDD---Tagline-hotsale-1200x95-1200x95.png"
            }
            className="w-full object-cover"
          />
        </div>
        <div className="w-full  ">
          {/* <ListProduct
            products={smartPhone?.data}
            isSlide={false}
            category={"smartphone"}
          /> */}
          <Slider
            slidesToShow={5}
            slidesToScroll={1}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {fakeData?.map((product: any) => (
              <div className="w-full" key={""}>
                <div className="mx-4">
                  <ProductCard
                    docquyen
                    key={product.id}
                    category="ledOpTran"
                    product={product}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </>
    </Section>
  );
};

export default PromoFirst;

