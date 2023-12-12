import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./productcategory.module.scss";
import Section from "src/components/Section/Section";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import { Col, Row } from "antd";

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useAppDispatch();

  const fakeData = [
    {
      id: 1,
      title: " Đèn Led Ốp Trần",
      image:
        "images/uploads/2020/01/den-led-op-tran-24W-vuong-vien-den-200x240.jpg",
    },
    {
      id: 2,
      title: " Đèn Led Âm Trần",
      image:
        "images/uploads/2019/12/den-led-am-tran-sieu-mong-vuong-9-200x240.jpg",
    },
    {
      id: 3,
      title: " SpotLight Âm Trần",
      image:
        "images/uploads/2020/02/den-led-spotlight-am-tran-10w-8095-ht-light-level-200x240.jpg",
    },
    {
      id: 4,
      title: " Đèn Led Panel",
      image:
        "images/uploads/2020/04/den-led-panel-300x1200-ht-light-level-200x240.jpg",
    },
    {
      id: 5,
      title: " Tuyp Led",
      image: "images/uploads/2020/04/den-led-thuy-sinh-200x240.jpg",
    },
    {
      id: 6,
      title: " Đèn Led Bán Nguyệt",
      image: "images/uploads/2020/11/den-led-ban-nguyet-200x187.gif",
    },
    {
      id: 7,
      title: "Bóng Vòng Led",
      image: "images/uploads/2020/04/bong-vong-led-24W-200x240.jpg",
    },
    {
      id: 8,
      title: " Rọi Ray",
      image: "images/uploads/2020/10/den-roi-ray-8017-vo-trang-ht-200x240.jpg",
    },
    {
      id: 9,
      title: " Sân Vườn",
      image: "images/uploads/2020/04/den-roi-co-ht-light-level-200x240.jpg",
    },
    {
      id: 10,
      title: " Pha Led",
      image: "images/uploads/2020/04/den-pha-led-5059-500W-ht-01-200x240.jpg",
    },
    {
      id: 11,
      title: " Đèn Led Nhà Xưởng",
      image:
        "images/uploads/2020/05/den-led-nha-xuong-6868-200w-ht-light-level-200x240.jpg",
    },
    {
      id: 12,
      title: " Đường Led",
      image: "images/uploads/2020/06/250-200x240.jpg",
    },
  ];
  const style: React.CSSProperties = {
    background: "#0092ff",
    padding: "8px 0",
  };
  return (
    <Section title="DANH MỤC NỔI BẬT" styles="bg-white">
      <div className=" p-8">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {fakeData.map((item: any) => (
            <Col className="gutter-row" span={4}>
              <Link to={item.href} key={item.title}>
                <div className="my-2 border border-w-[1px] border-gray rounded min-h-[100px] p-16 py-1">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[80px] min-h-[90px]"
                  />
                  <p className={` text-black text-2xl font-medium w-max`}>
                    {item.title}
                  </p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </Section>
  );
};

export default ProductCategory;

