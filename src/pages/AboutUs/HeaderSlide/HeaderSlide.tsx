import React from "react";

import { useAppSelector } from "src/hooks/useRedux";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/store";
export const DataHeaderAboutUs = [
  {
    id: "Header_AboutUs_AboutUs",
    title: "HT Max Light Đèn Led Chiếu Sáng Chất Lượng",
    content:
      "Đèn LED Max Light được kiểm tra chặt chẽ bởi hệ thống quản lý ISO 9001:2015. Với thế mạnh dây chuyền hiện đại, sản phẩm HT Max Light được các nhà thiết kế, nhà thầu và người tiêu dùng tin tưởng lựa chọn.",
    arrayImg: [
      "https://htlightlevel.vn/wp-content/uploads/elementor/thumbs/472d6ce3ce55edcd651451f905ff8f24-qfj7wzlydqe9cw7cyjurphpotyz6rl3b49pgmft2fc.jpg",
      "https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f3788372d0e324dafc8f_bloomberglogo.svg",
      "https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f378c864d13f8763bda2_forbes-logo.svg",
      "https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f268577eec6e9601550e_techcrunch%20logo.png",
      "https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f265fdc36f271a970fa2_newyorktimeslogo.png",
      "https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f26576664076cce83df7_nbclogo.png",
      "https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f26630e2fc922c59a4d1_HuffPost.svg.png",
    ],
  },
];
const HeaderSlide = () => {
  return (
    <div className="flex-col items-stretch mb-[104px] flex">
      <div className="w-full flex-col self-center items-stretch  flex relative">
        <div
          className="w-full  bg-scroll rounded h-[400px] flex-col justify-end items-center p-9 flex"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 60%, #000 88%), url("https://htlightlevel.vn/wp-content/uploads/2023/11/snapedit_1700294979124.png")`,
            gridRowGap: "40px",
            backgroundPosition: "0 0,50% 71%",
            backgroundSize: "auto, auto 135%",
          }}
        >
          <h1 className="max-w-[22ch] text-center mx-auto text-black tracking-[-.04em] m-0 pd-0 text-[47px] font-bold leading-[106%] sm:text-[35px] sm:leading-[100%] ">
            <span className="text-white font-normal ">
              {DataHeaderAboutUs?.[0]?.title}
            </span>
          </h1>
          <span className="text-white font-normal max-w-[82ch]">
            {DataHeaderAboutUs?.[0]?.content}
          </span>
          <div
            className="w-full max-w-[1080px] bg-white rounded-2xl justify-between items-end  mb-[-120px] p-[32px_60px] sm:p-[10px_20px]"
            style={{
              gridColumnGap: "26px",
              gridRowGap: "26px",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "auto auto",
              gridAutoColumns: "1fr",
              display: "grid",
            }}
          >
            {DataHeaderAboutUs[0]?.arrayImg?.map((item, index) => (
              <img
                className="w-full max-h-[23px] max-w-[150px] object-contain flex-[0_auto] align-end border-none inline-block border-0"
                style={{ filter: "brightness(0%) grayscale()" }}
                src={DataHeaderAboutUs?.[0]?.arrayImg?.[index]}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlide;

