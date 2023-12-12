import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "src/services";

import { payloadCreator } from "src/utils/utils";

export const getProduct = createAsyncThunk(
  "product/getProduct",
  payloadCreator(productService.getAllProducts),
);

export const getDetailProduct = createAsyncThunk(
  "product/getDetailProduct",
  payloadCreator(productService.getProduct),
);
const data = {
  data: [],
  pageNumber: 0,
  pageSize: 10,
  totalElements: 1,
  totalPages: 1,
};

export type product = {
  data: any[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
};

const dataDetail = {
  id: 3,
  monitor: "",
  operatingSystem: "",
  rearCamera: "",
  frontCamera: "",
  chip: "",
  sim: " ",
  battery: "",
  charging: "",
  networkSupport: "",
  productInfo: {
    brandId: 1,
    categoryId: 1,
    productId: 10,
    characteristicId: 7,
    productCode: "",
    name: "",
    description: "",
    design: " ",
    dimension: "",
    mass: 221.0,
    launchTime: 2023,
    accessories: "Tai nghe, sạc",
    productStatus: 100,
    lstProductTypeAndPrice: [
      {
        typeId: 5,
        ram: " ",
        storageCapacity: "",
        color: "",
        price: 0,
        salePrice: 0,
        quantity: 1000,
        depotId: 1,
      },
      {
        typeId: 6,
        ram: " ",
        storageCapacity: "",
        color: "",
        price: 0,
        salePrice: 0,
        quantity: 0,
        depotId: 1,
      },
    ],
    lstProductImageUrl: [],
    star: 4.9,
    totalReview: 100,
    slug: "",
  },
};

const initialState = {
  products: data,
  productDetail: dataDetail,
  filter: data,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleFilterStore: (state, action) => {
      state.filter.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      state.products = payload.data;
    });
    builder.addCase(getDetailProduct.fulfilled, (state, { payload }) => {
      state.productDetail = payload.data.data;
    });
  },
});
export const { handleFilterStore } = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;

