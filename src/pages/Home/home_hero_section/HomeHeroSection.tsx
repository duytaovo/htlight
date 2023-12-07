import { FC } from "react";
import { Space } from "antd";
import path from "src/constants/path";

const HomeHeroSection: FC<any> = ({
  id,
  title,
  timePickerPlaceholder,
  datePickerPlaceholder,
  img,
  startDateTimePikerTitle,
  endDateTimePikerTitle,
  buttonSearchText,
  addressPlaceholder,
  mainText,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "58%",
      }}
      className="h-[478px] bg-no-repeat bg-[length:158%] p-9 pb-6 flex flex-col items-center mb-[48px] 2xl:h-fit lg:bg-cover sm:p-0"
    >
      <div className="w-full h-[90%] max-w-[980px] bg-white/90 m-auto rounded-[20px] py-9 px-14 flex flex-col justify-center sm:px-2">
        <div className="flex flex-col justify-center items-center pb-8">
          <div>
            <h2 className="py-4 leading-5 text-lg font-bold my-0 text-black/80">
              {title}
            </h2>
          </div>
          <div></div>
        </div>

        <Space
          align="center"
          className="flex justify-center  items-end lg:flex-col"
        >
          {/* <CustomeButton
            className="min-w-[140px] h-[52px] rounded-[10px] text-white/80 lg:w-full bg-mainColor grow [&>*]:flex"
            isNext={true}
            onClick={() => navigate(path.bookACarMobile)}
          /> */}
        </Space>
      </div>
      {/* <RatingStar rating={4} review='Shoppee' classReview='text-white' activeClassname='h-20' /> */}
    </div>
  );
};

export default HomeHeroSection;

