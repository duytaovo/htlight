import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./productcategory.module.scss";
import Section from "src/components/Section/Section";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useAppDispatch();

  const fakeData = [
    {
      id: 1,
      title: "Đèn Led Ốp Trần",
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/01/den-led-op-tran-24W-vuong-vien-den-200x240.jpg",
    },
    {
      id: 2,
      title: "Đèn Led Âm Trần",
      image:
        "https://htlightlevel.vn/wp-content/uploads/2019/12/den-led-am-tran-sieu-mong-vuong-9-200x240.jpg",
    },
    {
      id: 3,
      title: "Đèn SpotLight Âm Trần",
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/02/den-led-spotlight-am-tran-10w-8095-ht-light-level-200x240.jpg",
    },
    {
      id: 4,
      title: "Đèn Led Panel",
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/04/den-led-panel-300x1200-ht-light-level-200x240.jpg",
    },
    {
      id: 5,
      title: "Đèn Tuyp Led",
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/04/den-led-thuy-sinh-200x240.jpg",
    },
    {
      id: 6,
      title: "Đèn Led Bán Nguyệt",
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/11/den-led-ban-nguyet-200x187.gif",
    },
    {
      id: 7,
      title: "Bóng Vòng Led",
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/04/bong-vong-led-24W-200x240.jpg",
    },
    {
      id: 8,
      title: "Đèn Rọi Ray",
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/10/den-roi-ray-8017-vo-trang-ht-200x240.jpg",
    },
    {
      id: 9,
      title: "Đèn Sân Vườn",
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/04/den-roi-co-ht-light-level-200x240.jpg",
    },
    {
      id: 10,
      title: "Đèn Pha Led",
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/04/den-pha-led-5059-500W-ht-01-200x240.jpg",
    },
    {
      id: 11,
      title: "Đèn Led Nhà Xưởng",
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/05/den-led-nha-xuong-6868-200w-ht-light-level-200x240.jpg",
    },
    {
      id: 12,
      title: "Đèn Đường Led",
      image:
        "https://htlightlevel.vn/wp-content/uploads/2020/06/250-200x240.jpg",
    },
  ];

  // const { smartPhone } = useAppSelector((state) => state.);
  // useEffect(() => {
  //   dispatch(getSmartPhones(queryConfig));
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get("https://json.msang.repl.co/categories")
  //     .then((response) => response.data)
  //     .then((data) => setCategories(data));
  // }, []);
  return (
    <Section title="DANH MỤC NỔI BẬT" styles="bg-white text-black/80">
      <div className="flex ">
        {fakeData.map((item: any) => (
          <Link to={item.href} key={item.title}>
            <div className={styles.cateIcon}>
              <img src={item.image} alt="" className={styles.image} />
              <p className={`${styles.title} text-black/70`}>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default ProductCategory;

