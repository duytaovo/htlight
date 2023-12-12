import React from "react";

const Banner2 = () => {
  return (
    <div className="flex justify-center sm:flex-col sm:px-3 m-4">
      <div className="w-[30%] flex justify-center sm:w-full space-x-4">
        <img
          className="object-contain rounded sm:h-[300px] mr-10"
          src="images/uploads/2023/11/den-led-san-vuon.jpg"
          alt="ss"
        />
      </div>{" "}
      <div className="w-1/2 sm:w-full flex justify-center items-center">
        <div className="block ">
          <p className="uppercase text-mainColor font-bold mb-3">
            VỀ CHÚNG TÔI
          </p>

          <p className="text-[#808795] font-normal mt-3 sm:text-[12px]">
            HT LIGHT LEVEL luôn Lấy khách hàng làm trọng tâm, Công Ty TNHH Sản
            Xuất CCG cam kết tối đa làm thỏa mãn nhu cầu khách hàng. Chúng tôi
            lấy tín nhiệm của khách hàng làm mục đích hoạt động. HT MAX LIGHT
            cam kết giao sản phẩm đúng với chất lượng, đủ số lượng và đúng thời
            gian. Chúng tôi luôn mong muốn đem lại nhiều hiệu quả tối ưu theo
            nhu cầu sử dụng của khách hàng với phương châm phục vụ: ” Uy tín –
            Chất lượng – Nhanh chóng – Giá cả hợp lý“.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;

