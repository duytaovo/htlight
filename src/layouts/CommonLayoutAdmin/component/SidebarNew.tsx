import React, { useState } from "react";

import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearLS } from "src/utils/auth";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Trang chủ", "/", <DashboardIcon />),
  getItem("Người dùng", "/users", <PersonOutlineIcon />),

  getItem("Sản phẩm ", "/products", <StoreIcon />, [
    getItem("Đèn led", "/products/led"),
  ]),

  getItem("Đặt hàng", "/orders", <CreditCardIcon />),
  getItem("Danh mục", "/categories", <CategoryOutlinedIcon />),
  getItem("Nhãn hiệu", "/brand", <LocalPoliceOutlinedIcon />),
  getItem("Phản hồi", "/feedback", <FeedbackIcon />),
  // getItem("Đăng xuất", "/logout", <ExitToAppIcon />),
];

const SideBarNew: React.FC = () => {
  const [collapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "logout") {
    if (confirm("Bạn có muốn thoát không?")) {
      clearLS();
      window.location.reload();
    }
  }
  return (
    <div>
      <div className="h-[50px] flex items-center justify-center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="text-3xl font-bold text-mainColor">
            HTLIGHT-ADMIN
          </span>
        </Link>
      </div>
      <hr />

      <Menu
        defaultSelectedKeys={["/"]}
        color="green"
        className="text-green-500"
        defaultOpenKeys={["/products"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        onClick={({ item, key, keyPath, domEvent }) => {
          if (keyPath[0] !== "product") {
            navigate(keyPath[0]);
          } else {
            navigate(keyPath[1]);
          }
        }}
      />
    </div>
  );
};

export default SideBarNew;

