import Anchor from "./Anchor";
import Tooltip from "../Tooltip";
import AccesContent from "./ProductContent";
import "./header.module.scss";
import { Home, Smartwatch, Headphone, Intro, Tablet, Down } from "../Icons";
import path from "src/constants/path";
import ProductContent from "./ProductContent";
import PolicyContent from "./PolicyContent";
function HeaderNav() {
  const anchors = [
    { name: "Trang chủ", path: path.home, firstIcon: Home },
    { name: "Giới thiệu", path: path.intro, firstIcon: Intro },
    {
      name: "Sản phẩm",
      path: path.home,
      firstIcon: Headphone,
      secondIcon: Down,
      tooltip: true,
      content: ProductContent,
    },
    { name: "Tin tức & sự kiện", path: path.home, firstIcon: Tablet },
    {
      name: "Chính sách",
      path: path.home,
      firstIcon: Smartwatch,
      secondIcon: Down,
      tooltip: true,
      content: PolicyContent,
    },

    { name: "Liên hệ", path: path.home, firstIcon: Smartwatch },
  ];
  return (
    <nav>
      {anchors.map((anchor) => {
        if (anchor.tooltip) {
          return (
            <Tooltip key={anchor.name} content={anchor.content}>
              <div>
                <Anchor
                  name={anchor.name}
                  path={anchor.path}
                  firstIcon={anchor.firstIcon}
                  secondIcon={anchor.secondIcon}
                />
              </div>
            </Tooltip>
          );
        } else {
          return (
            <Anchor
              key={anchor.name}
              name={anchor.name}
              path={anchor.path}
              firstIcon={anchor.firstIcon}
              secondIcon={anchor.secondIcon}
            />
          );
        }
      })}
    </nav>
  );
}

export default HeaderNav;

