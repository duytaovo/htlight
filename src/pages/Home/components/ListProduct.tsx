import { Button } from "antd";
import Slider from "react-slick";
import ProductCard from "src/components/ProductCard";
import NextArrow from "src/components/Slick/NextArrow";
import PrevArrow from "src/components/Slick/PrevArrow";
type Props = {
  fakeData: any[];
};

export default function ListProduct({ fakeData }: Props) {
  return (
    <div>
      <Slider
        slidesToShow={5}
        slidesToScroll={1}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {fakeData?.map((product: any) => (
          <div className="w-full" key={""}>
            <div className="mx-4">
              <ProductCard
                docquyen
                key={product.id}
                category="ledOpTran"
                product={product}
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="w-full flex justify-center items-center cursor-pointer">
        <Button
          type="default"
          className="border-[1.5px] cursor-pointer text-black border-blue-400 flex justify-center items-center text-center h-16 mt-8 w-80 hover:bg-mainColor hover:text-black"
          // onClick={showModal}
        >
          {" "}
          Xem thêm
        </Button>
      </div>
    </div>
  );
}

