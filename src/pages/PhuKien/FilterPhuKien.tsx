import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Filter from "src/components/Filter/Filter";
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";

export interface DataPropsPhone {
  id: number;
  title: string;
  detail: any[];
  img?: string[];
}
const dataBrand = [
  {
    id: 1,
    title: "Apple",
    link: "https//cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png",
  },
  {
    id: 9,
    title: "Samsung",
    link: "https//cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png",
  },
  {
    id: 10,
    title: "Oppo",
    link: "https//cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg",
  },
  {
    id: 11,
    title: "Xiaomi",
    link: "https//cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png",
  },
  {
    id: 12,
    title: "Vivo",
    link: "https//cdn.tgdd.vn/Brand/1/vivo-logo-220-220x48-3.png",
  },
  {
    id: 13,
    title: "Realme",
    link: "https//cdn.tgdd.vn/Brand/1/Realme42-b_37.png",
  },
  {
    id: 14,
    title: "Nokia",
    link: "https//cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg",
  },
  {
    id: 15,
    title: "Mobell",
    link: "https//cdn.tgdd.vn/Brand/1/Mobell42-b_19.jpg",
  },
  {
    id: 16,
    title: "itel",
    link: "https//cdn.tgdd.vn/Brand/1/Itel42-b_54.jpg",
  },
  {
    id: 17,
    title: "Masstel",
    link: "https//cdn.tgdd.vn/Brand/1/Masstel42-b_0.png",
  },
];
const data2: any[] = [
  {
    id: 1,
    title: "Chơi game/Cấu hình cao",
  },
  {
    id: 2,
    title: "Chụp ảnh, quay phim",
  },
  {
    id: 6,
    title: "Mỏng nhẹ",
  },
  {
    id: 7,
    title: "Cao cấp, sang trọng",
  },
  {
    id: 8,
    title: "Nhỏ gọn dễ cầm",
  },
];
const data3: DataPropsPhone[] = [
  // {
  //   id: 0,
  //   title: "Hãng",
  //   detail: dataBrand,
  // },
  {
    id: 1,
    title: "Giá",
    detail: [
      "Dưới 2 triệu",
      "Từ 2 - 4 triệu",
      "Từ 4 - 7 triệu",
      "Từ 7 - 13 triệu",
      "Từ 13 - 20 triệu",
      "Trên 20 triệu",
    ],
  },
  {
    id: 2,
    title: "Loại đèn",
    detail: [
      "Đèn LED ốp trần Smart",
      "Đèn LED ốp trần cảm biến",
      "Đèn LED ốp trần chống bụi",
      "Đèn LED ốp trần đổi màu",
      "Đèn LED ốp trần 1 màu ánh sáng",
    ],
  },

  {
    id: 4,
    title: "Công suất",
    detail: ["1w-10w", "11w-20w", "21w-30w", "31w-40"],
  },
  {
    id: 5,
    title: "HÌNH DẠNG",
    detail: ["Đèn LED ốp trần tròn", "Đèn LED ốp trần vuông"],
  },

  {
    id: 7,
    title: "CÔNG NGHỆ KẾT NỐI",
    detail: ["Wifi", "Bluetooth Mesh"],
  },
];

interface Props {
  handle: (boolean: boolean) => void;
  brand: any;
  characteristic: any;
}

const FilterPhuKien = ({ handle, brand, characteristic }: Props) => {
  const dispatch = useAppDispatch();
  const { sort, filter } = useAppSelector<any>((state) => state.filter);

  interface DataPropsPhone {
    id: number;
    title: string;
    detail: string[] | { name: string; image: string }[];
  }

  const jsonString =
    '{"ram": ["2GB", "3GB", "4GB", "6GB", "8GB", "12GB"], "brand": null, "price": ["Dưới 2 triệu", "Từ 2 - 4 triệu", "Từ 4 - 7 triệu", "Từ 7 - 13 triệu", "Từ 13 - 20 triệu", "Trên 20 triệu"], "screen": ["OLED", "LCD", "Amoled"], "special": ["Kháng nước, kháng bụi", "Hỗ trợ 5G", "Bảo mật khuôn mặt 3D"], "charging": ["Sạc nhanh 20W", "Sạc siêu nhanh 60W", "Sạc không dây"], "characteristic": null, "smartphoneType": [{"name": "Android", "image": "https://cdn.tgdd.vn/ValueIcons/android.jpg"}, {"name": "IOS", "image": "https://cdn.tgdd.vn/ValueIcons/iphone.jpg"}], "storageCapacity": ["32GB", "64GB", "128GB", "256GB", "512GB", "1TB"]}';

  const filterData = JSON.parse(jsonString);

  const data: DataPropsPhone[] = [
    {
      id: 0,
      title: "Hãng",
      detail: brand?.data?.data,
    },
    {
      id: 1,
      title: "Giá",
      detail: filterData.price,
    },
    {
      id: 2,
      title: "Loại điện thoại",
      detail: ["Android", "IOS"],
    },
    {
      id: 3,
      title: "Nhu cầu",
      detail: characteristic?.data,
    },
    {
      id: 4,
      title: "RAM",
      detail: filterData.ram,
    },
    {
      id: 5,
      title: "ROM",
      detail: filterData.storageCapacity,
    },
    {
      id: 6,
      title: "Pin&Sạc",
      detail: filterData.charging,
    },
    {
      id: 7,
      title: "Tính năng đặc biệt",
      detail: filterData.special,
    },
    {
      id: 8,
      title: "Màn hình",
      detail: filterData.screen,
    },
  ];

  return (
    <div className="text-textWhiteMain max-w-[1200px] m-auto">
      <Filter handle={handle} data={data3} />
    </div>
  );
};

export default FilterPhuKien;

