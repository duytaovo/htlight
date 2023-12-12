import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "src/services/category.service";
import { payloadCreator } from "src/utils/utils";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  payloadCreator(categoryService.getcategorys),
);

export const getDetailcategory = createAsyncThunk(
  "category/getDetailcategory",
  payloadCreator(categoryService.getDetailcategory),
);

export const getCategorys = createAsyncThunk(
  "category/getCategorys",
  payloadCreator(categoryService.getcategorys),
);

export const getDetailCategory = createAsyncThunk(
  "category/getDetailCategory",
  payloadCreator(categoryService.getDetailcategory),
);
export const addCategory = createAsyncThunk(
  "category/addCategory",
  payloadCreator(categoryService.addCategory),
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  payloadCreator(categoryService.updateCategory),
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  payloadCreator(categoryService.deleteCategory),
);

const initialState = {
  category: [],
  categoryDetail: {},
};
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    postOrder: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, { payload }) => {
      state.category = payload.data;
    });
    builder.addCase(getDetailcategory.fulfilled, (state, { payload }) => {
      state.categoryDetail = payload.data.data;
    });
  },
});
export default categorySlice.reducer;

