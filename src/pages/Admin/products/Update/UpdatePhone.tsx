import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Form } from "antd";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "src/components/Input";
import path, { pathAdmin } from "src/constants/path";
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import { ErrorResponse } from "src/types/utils.type";
import { schemaProductSmartPhone } from "src/utils/rules";
import {
  getIdFromNameId,
  isAxiosUnprocessableEntityError,
} from "src/utils/utils";
import SelectCustom from "src/components/Select";
import Textarea from "src/components/Textarea";
import InputFile from "src/components/InputFile";
import { PlusOutlined } from "@ant-design/icons";
import { getDetailProduct } from "src/store/product/productsSlice";

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

interface FormData {
  brand: string;
  category: string;
  characteristic: string;
  name: string;
  description: string;
  design: string | undefined;
  dimension: string | undefined;
  mass: string | undefined;
  launchTime: string | undefined;
  accessories: string | undefined;
  productStatus: number | undefined;
  ram: string;
  storageCapacity: string;
  color: string;
  price: string;
  salePrice: string | undefined;
  monitor: string;
}

const UpdatePhone: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    setError,
    register,
    setValue,
    getValues,
    watch,
    control,
  } = useForm({
    resolver: yupResolver(schemaProductSmartPhone),
  });
  const [imageUrls, setImages] = useState<string[]>([]);
  const [data, setData] = useState<any>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { nameId } = useParams();
  const id = getIdFromNameId(nameId as string);
  // const { brand } = useAppSelector((state) => state.brand);
  const { productDetail } = useAppSelector((state) => state.products);
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "lstProductTypeAndPrice", // unique name for your Field Array
    },
  );

  useEffect(() => {
    // dispatch(getDetailPhone(id));
  }, [id]);

  const [file, setFile] = useState<File[]>();
  const imageArray = file || []; // Mảng chứa các đối tượng ảnh (File hoặc Blob)

  // Tạo một mảng chứa các URL tạm thời cho ảnh

  for (const image of imageArray) {
    const imageUrl = URL.createObjectURL(image);
    imageUrls.push(imageUrl);
  }

  useEffect(() => {
    setImages(productDetail.productInfo.lstProductImageUrl);
    setValue("ram", productDetail?.productInfo?.lstProductTypeAndPrice[0]?.ram);
    setValue("accessories", productDetail?.productInfo?.accessories);
    setValue("battery", productDetail?.battery);
    setValue("charging", productDetail?.charging);
    setValue("chip", productDetail?.chip);
    setValue("mass", productDetail?.productInfo?.mass.toString());
    setValue(
      "color",
      productDetail?.productInfo.lstProductTypeAndPrice[0].color.toString(),
    );
    setValue("monitor", productDetail?.monitor);
    setValue("networkSupport", productDetail?.networkSupport);
    setValue("description", productDetail?.productInfo?.description);
    setValue("brand", productDetail?.productInfo?.brandId.toString());
    setValue(
      "characteristic",
      productDetail?.productInfo?.characteristicId.toString(),
    );
    setValue("name", productDetail?.productInfo?.name);
    setValue("sim", productDetail?.sim);
    setValue(
      "salePrice",
      productDetail?.productInfo?.lstProductTypeAndPrice[0].salePrice.toString(),
    );
    setValue("rearCamera", productDetail?.rearCamera);
    setValue(
      "price",
      productDetail?.productInfo?.lstProductTypeAndPrice[0].price.toString(),
    );
    setValue("frontCamera", productDetail?.frontCamera);
    setValue("operatingSystem", productDetail?.operatingSystem);
    setValue("design", productDetail?.productInfo?.design);
    setValue("dimension", productDetail?.productInfo?.dimension);
    setValue("category", productDetail?.productInfo?.categoryId.toString());
    setValue("launchTime", "2023");
    setValue("files", productDetail?.productInfo.lstProductImageUrl);
  }, [productDetail]);
  const onSubmit = handleSubmit(async (data) => {
    // let images = [];
    // if (file) {
    //   const form = new FormData();
    //   for (let i = 0; i < file.length; i++) {
    //     form.append("files", file[i]);
    //   }
    //   const res = await dispatch(uploadManyImagesProductSmartPhone(form));
    //   unwrapResult(res);
    //   const d = res?.payload?.data?.data;
    //   for (let i = 0; i < d.length; i++) {
    //     images.push(d[i]?.fileUrl);
    //   }
    // }
    // const body = JSON.stringify({});
    // try {
    //   setIsSubmitting(true);
    //   const res = await dispatch(updateSmartPhone({ id, body }));
    //   unwrapResult(res);
    //   const d = res?.payload?.data;
    //   if (d?.code !== 200) return toast.error(d?.message);
    //   await toast.success("Chỉnh sửa thành công ");
    //   await dispatch(getSmartPhones(""));
    //   await navigate(path.smartPhone);
    // } catch (error: any) {
    //   if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
    //     const formError = error.response?.data.data;
    //     if (formError) {
    //       Object.keys(formError).forEach((key) => {
    //         setError(key as keyof FormData, {
    //           // message: formError[key as keyof FormData],
    //           type: "Server",
    //         });
    //       });
    //     }
    //   }
    // } finally {
    //   setIsSubmitting(false);
    // }
  });
  const onClickHuy = () => {
    setValue("ram", productDetail?.productInfo?.lstProductTypeAndPrice[0]?.ram);
    setValue("accessories", productDetail?.productInfo?.accessories);
    setValue("battery", productDetail?.battery);
    setValue("charging", productDetail?.charging);
    setValue("chip", productDetail?.chip);
    setValue("mass", productDetail?.productInfo?.mass.toString());
    setValue(
      "color",
      productDetail?.productInfo.lstProductTypeAndPrice[0].color.toString(),
    );
    setValue("monitor", productDetail?.monitor);
    setValue("networkSupport", productDetail?.networkSupport);
    setValue("description", productDetail?.productInfo?.description);
    setValue("brand", productDetail?.productInfo?.brandId.toString());
    setValue(
      "characteristic",
      productDetail?.productInfo?.characteristicId.toString(),
    );
    setValue("name", productDetail?.productInfo?.name);
    setValue("sim", productDetail?.sim);
    setValue(
      "salePrice",
      productDetail?.productInfo?.lstProductTypeAndPrice[0].salePrice.toString(),
    );
    setValue("rearCamera", productDetail?.rearCamera);
    setValue(
      "price",
      productDetail?.productInfo?.lstProductTypeAndPrice[0].price.toString(),
    );
    setValue("frontCamera", productDetail?.frontCamera);
    setValue("operatingSystem", productDetail?.operatingSystem);
    setValue("design", productDetail?.productInfo?.design);
    setValue("dimension", productDetail?.productInfo?.dimension);
    setValue("category", productDetail?.productInfo?.categoryId.toString());
    setValue("launchTime", "2023");
    setValue("files", productDetail?.productInfo.lstProductImageUrl);
  };

  const handleChangeFile = (file?: File[]) => {
    setFile(file);
  };

  const handleEditImage = (index: number) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.addEventListener("change", (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];

      if (selectedFile) {
        const currentImages = getValues("files") || [];
        currentImages[index] = selectedFile;
        setValue("files", currentImages);

        // Update the image preview immediately
        setImages((prevImages) => {
          const updatedImages = [...prevImages];
          updatedImages[index] = URL.createObjectURL(selectedFile);
          return updatedImages;
        });
      }
    });

    fileInput.click();
  };

  return (
    <div className="bg-white shadow ">
      <h2 className="font-bold m-4 text-2xl">Cập nhật sản phẩm </h2>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 800, padding: 6 }}
        autoComplete="off"
        noValidate
        onSubmitCapture={onSubmit}
      >
        <Form.Item
          name="file"
          label="Hình ảnh"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <div className="flex flex-col items-start ">
            <div className="my-5 w-24 space-y-5 justify-between items-center">
              {imageUrls.map((imageUrl, index) => {
                return (
                  <div key={index}>
                    <img
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      width="100"
                      height="100"
                      className="h-full rounded-md w-full  object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => handleEditImage(index)}
                    >
                      Edit
                    </button>
                  </div>
                );
              })}
            </div>
            <InputFile label="" onChange={handleChangeFile} id="images" />
            <div className="mt-3  flex flex-col items-center text-red-500">
              <div>Dụng lượng file tối đa 2 MB</div>
              <div>Định dạng:.JPEG, .PNG</div>
            </div>
            {/* {errors.images?.message} */}
          </div>
        </Form.Item>
        <Form.Item
          label="Mô tả"
          name="description"
          rules={[{ required: true }]}
        >
          <Textarea
            defaultValue={productDetail?.productInfo?.description}
            id="description"
            isUpdate={false}
            register={register}
            setValue={setValue}
            textAlign={"left"}
          />
        </Form.Item>
        <div className="flex justify-start">
          <Form.Item label="" className="ml-[135px] mb-2 bg-green-300">
            <Button className="w-[100px]" onClick={onSubmit} type="default">
              {isSubmitting ? "Loading..." : "Lưu"}
            </Button>
          </Form.Item>
          <Form.Item label="" className="ml-[70px] mb-2">
            <Button
              className="w-[100px] bg-blue-300"
              onClick={onClickHuy}
              type="dashed"
              color="red"
            >
              Đặt lại
            </Button>
          </Form.Item>
          <Form.Item label="" className="ml-[70px] mb-2 bg-red-300">
            <Button
              className="w-[100px]"
              onClick={() => {
                navigate(pathAdmin.products);
              }}
            >
              Hủy
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default () => <UpdatePhone />;

