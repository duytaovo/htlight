import { Link } from "react-router-dom";
import clsx from "clsx";
import path from "src/constants/path";
const datafake = [
  {
    id: 1,
    name: "",
    slug: "policy1",
    childCategories: [
      {
        id: 1,
        name: "Chính Sách Chung",
        slug: "policyChung",
      },
      {
        id: 2,
        name: "Chính Sách Đại Lý",
        slug: "policyDaiLy",
      },
      {
        id: 3,
        name: "Chính Sách Đổi Trả",
        slug: "policyDoiTra",
      },
      {
        id: 4,
        name: "Chính Sách Giao Nhận",
        slug: "policyGiaoNhan",
      },
    ],
  },
  {
    id: 2,
    name: "",
    slug: "policy2",
    childCategories: [
      {
        id: 1,
        name: "Chính Sách Mua Hàng",
        slug: "policyMuaHang",
      },
      {
        id: 2,
        name: "Chính Sách Thanh Toán",
        slug: "policyThanhToan",
      },
    ],
  },
];
const PolicyContent = () => {
  //
  return (
    <div className="grid grid-cols-2 text-gray-800">
      {datafake?.map((item: any, index: number) => {
        return (
          <ul
            key={index}
            className={clsx(
              index === 0 && "row-start-1 row-end-4",
              "mx-4 my-2",
            )}
          >
            <li className="font-bold text-2xl border-b py-2 uppercase">
              {item.name}
            </li>
            {item?.childCategories?.map((content: any, index: number) => {
              return (
                <li className="py-2 hover:text-blue-600" key={index}>
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

export default PolicyContent;

