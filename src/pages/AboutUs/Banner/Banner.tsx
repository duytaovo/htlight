import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center sm:flex-col sm:px-3">
      <div className="w-1/2 sm:w-full  flex justify-center items-center">
        <div className="block ">
          <p className="uppercase text-mainColor font-bold mb-3">
            VỀ CHÚNG TÔI
          </p>

          <h2 className="text-2xl sm:text-[15px] text-black sm:font-semibold">
            Công Ty TNHH Thương Mại Sản Xuất CCG được thành lập vào ngày
            19/04/2016, kênh phân phối khắp khu vực TP.HCM và các tỉnh thành với
            hơn 500 đại lý và nhà phân phối.
          </h2>
          <h2 className="mt-3 text-2xl sm:text-[15px] text-black sm:font-semibold">
            Sứ mệnh Cung cấp các sản phẩm, dịch vụ, hệ thống & giải pháp chiếu
            sáng xanh tiết kiệm năng lượng, thân thiện môi tường, bảo vệ sức
            khỏe và hạnh phúc con người, nâng cao chất lượng cuộc sống và gia
            tăng giá trị cho cổ đông, nhân viên và khách hàng. Tận tâm phụng sự
            khách hàng.
          </h2>

          <p className="text-[#808795] font-normal mt-3 sm:text-[12px]">
            Đèn LED chiếu sáng mang Thương Hiệu HT MAX LIGHT được khách hàng
            biết đến qua các dòng sản phẩm chất lượng cao, mẫu mã đa dạng, hiện
            đại. Tất cả các sản phẩm HT MAX LIGHT được kiểm tra chặc chẽ bởi hệ
            thống quản lý chất lượng ISO 9001:2015. Với thế mạnh dây chuyền hiện
            đại, sản phẩm HT MAX LIGHT được các nhà thiết kế, nhà thầu, và người
            tiêu dùng tin tưởng lựa chọn trong suốt thời gian qua.
          </p>
        </div>
      </div>
      <div className="w-[30%] flex justify-center sm:w-full">
        <img
          className="object-contain rounded-full sm:h-[300px]"
          src="images/uploads/elementor/thumbs/472d6ce3ce55edcd651451f905ff8f24-qfj7wzlydqe9cw7cyjurphpotyz6rl3b49pgmft2fc.jpg"
          alt="ss"
        />
      </div>{" "}
    </div>
  );
};

export default Banner;

