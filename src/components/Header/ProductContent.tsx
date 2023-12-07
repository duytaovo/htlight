import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import { getCategory } from "src/store/category/categorysSlice";
import path from "src/constants/path";
import { Dropdown, MenuProps } from "antd";
// const datafake = [
//   {
//     id: 1,
//     name: "Đèn Led Ốp Trần",
//     slug: "ledOpTran",
//     childCategories: [
//       {
//         id: 1,
//         name: "Đèn Led Ốp Trần",
//         slug: "ledOpTran",
//       },
//       {
//         id: 2,
//         name: "Đèn Led Âm Trần DownLigh",
//         slug: "ledAmTranDownLigh",
//       },
//       {
//         id: 3,
//         name: "Đèn Led Spotlight Âm Trần",
//         slug: "ledSpotlight",
//       },
//       {
//         id: 4,
//         name: "Đèn Led Panel",
//         slug: "ledPanel",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "",
//     slug: "led2",
//     childCategories: [
//       {
//         id: 1,
//         name: "Đèn Led Tuýp",
//         slug: "ledTuyp",
//       },
//       {
//         id: 2,
//         name: "Đèn Đường Led",
//         slug: "ledDuong",
//       },
//       {
//         id: 3,
//         name: "Đèn Led Bán Nguyệt",
//         slug: "ledBanNguyet",
//       },
//       {
//         id: 4,
//         name: "Đèn Led Nhà Xưởng",
//         slug: "ledNhaXuong",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "",
//     slug: "led3",
//     childCategories: [
//       {
//         id: 1,
//         name: "Đèn Led Buld",
//         slug: "ledBuld",
//       },
//       {
//         id: 2,
//         name: "Đèn Led Sân Vườn",
//         slug: "ledSanVuong",
//       },
//       {
//         id: 3,
//         name: "Đèn Pha Led",
//         slug: "ledPha",
//       },
//       {
//         id: 4,
//         name: "Đèn Rọi Ray",
//         slug: "ledRoiRay",
//       },
//     ],
//   },
// ];

const datafake = [
  {
    id: 8,
    name: "Đèn Rọi Ray",
    slug: "denRoiRay",
    childCategories: [
      {
        id: 1,
        name: "Đèn Led Mắt Ếch 8091",
        slug: "ledMatEch8091",
      },
      {
        id: 2,
        name: "Đèn Rọi Led 8012",
        slug: "roiLed8012",
      },
      {
        id: 3,
        name: "Đèn Rọi Led 8016",
        slug: "roiLed8016",
      },
      {
        id: 4,
        name: "Đèn Rọi Led 8017",
        slug: "roiLed8017",
      },
      {
        id: 5,
        name: "Đèn Rọi Led 8018",
        slug: "roiLed8018",
      },
      {
        id: 6,
        name: "Đèn Rọi Led 8019",
        slug: "roiLed8019",
      },
      {
        id: 7,
        name: "Đèn Rọi Led 8020",
        slug: "roiLed8020",
      },
      {
        id: 8,
        name: "Phụ Kiện Rọi Ray",
        slug: "phuKienRoiRay",
      },
    ],
  },
  {
    id: 9,
    name: "Đèn Sân Vườn",
    slug: "denSanVuon",
    childCategories: [
      {
        id: 1,
        name: "Đèn Led Buld",
        slug: "ledBuld",
      },
    ],
  },
  {
    id: 9,
    name: "Đèn Pha Led",
    slug: "denPhaLed",
    childCategories: [
      {
        id: 1,
        name: "Đèn Led Tàu Cá",
        slug: "ledTauCa",
      },
    ],
  },
  {
    id: 9,
    name: "Đèn Led Nhà Xưởng",
    slug: "ledNhaXuong",
    childCategories: [
      {
        id: 1,
        name: "Đèn Led Nhà Xưởng",
        slug: "ledNhaXuong",
      },
    ],
  },

  {
    id: 5,
    name: "Bóng Đèn Tuýp Led",
    slug: "ledTuyp",
    childCategories: [
      {
        id: 1,
        name: "Đèn Led Thuỷ Sinh",
        slug: "ledThuySinh",
      },
    ],
  },
  {
    id: 1,
    name: "Đèn Led Phổ Biến",
    slug: "ledOpTran",
    childCategories: [
      {
        id: 1,
        name: "Đèn Led Ốp Trần",
        slug: "ledOpTran",
      },
      {
        id: 2,
        name: "Đèn Led Panel",
        slug: "ledPanel",
      },
      {
        id: 3,
        name: "Đèn Led Bán Nguyệt",
        slug: "ledBanNguyet",
      },
      {
        id: 4,
        name: "Bóng Vòng Led",
        slug: "ledBongVong",
      },
    ],
  },
  {
    id: 2,
    name: "Đèn Led Âm Trần",
    slug: "ledAmTran",
    childCategories: [
      {
        id: 1,
        name: "Đèn Led Âm Trần 6055",
        slug: "ledAmTran6055",
      },
      {
        id: 2,
        name: "Đèn Led Âm Trần Gắn Nổi",
        slug: "ledAmTranGanNoi",
      },
      {
        id: 3,
        name: "Đèn Led Âm Trần Siêu Mỏng",
        slug: "ledAmTranSieuMong",
      },
    ],
  },
  {
    id: 3,
    name: "Đèn SpotLight Âm Trần",
    slug: "ledAmTranSpotLight",
    childCategories: [
      {
        id: 1,
        name: "Đèn Led mắt ếch 8093",
        slug: "ledMatEch8093",
      },
      {
        id: 1,
        name: "Đèn Led mắt ếch 8094",
        slug: "ledMatEch8094",
      },
      {
        id: 1,
        name: "Đèn Led mắt ếch 8095",
        slug: "ledMatEch8095",
      },
      {
        id: 1,
        name: "Đèn Led mắt ếch 8090",
        slug: "ledMatEch8090",
      },
    ],
  },
];

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
];
const ProductContent = () => {
  //
  return (
    <div className="grid grid-cols-4 text-gray-800 cursor-pointer">
      {datafake?.map((item: any, index: number) => {
        return (
          <ul
            key={index}
            className={clsx(
              index === 0 && "row-start-0 row-end-3",
              "mx-4 my-2",
            )}
          >
            <li className="font-bold text-2xl border-b py-2 uppercase">
              {item.name}
            </li>
            {item?.childCategories?.map((content: any, index: number) => {
              return (
                // <Dropdown
                //   menu={{ items }}
                //   className="py-2 hover:text-blue-600 cursor-pointer"
                //   key={index}
                // >
                //   <Link to={`${path.accessory}/${content?.slug}`}>
                //     {content.name}
                //   </Link>
                // </Dropdown>
                <li
                  className="py-2 hover:text-blue-600 cursor-pointer"
                  key={index}
                >
                  <Link to={`${path.accessory}/${content?.slug}`}>
                    {content.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default ProductContent;

