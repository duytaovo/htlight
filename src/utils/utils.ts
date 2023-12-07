import axios, { AxiosError } from "axios";
import config from "src/constants/configApi";
import HttpStatusCode from "src/constants/httpStatusCode.enum";
import { ErrorResponse } from "src/types/utils.type";
import userImage from "src/assets/user.svg";

export const payloadCreator =
  (asyncFunc: any) => async (arg: any, thunkAPI: any) => {
    try {
      const res = await asyncFunc(arg);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  };
export const rateSale = (original: number, sale: number) =>
  Math.round(((original - sale) / original) * 100) + "%";
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error);
}

export function isAxiosUnprocessableEntityError<FormError>(
  error: unknown
): error is AxiosError<FormError> {
  return (
    isAxiosError(error) &&
    error.response?.status === HttpStatusCode.UnprocessableEntity
  );
}

export function isAxiosUnauthorizedError<UnauthorizedError>(
  error: unknown
): error is AxiosError<UnauthorizedError> {
  return (
    isAxiosError(error) &&
    error.response?.status === HttpStatusCode.InternalServerError
  );
}

export function isAxiosExpiredTokenError<UnauthorizedError>(
  error: unknown
): error is AxiosError<UnauthorizedError> {
  return (
    isAxiosUnauthorizedError<ErrorResponse<{ name: string; message: string }>>(
      error
    ) && error.response?.data?.data?.name === "EXPIRED_TOKEN"
  );
}

const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str?.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ""
  );

export const generateNameId = ({ name, id }: { name: string; id: string }) => {
  return removeSpecialCharacter(name)?.replace(/\s/g, "-") + `-i-${id}`;
};

export const getIdFromNameId = (name: string) => {
  const arr = name?.split("-i-");
  return arr[arr?.length - 1];
};

export const getAvatarUrl = (avatarName?: string) =>
  avatarName ? `${config.baseUrl}images/${avatarName}` : userImage;

export function formatCurrency(currency: number) {
  return new Intl.NumberFormat("de-DE").format(currency);
}

export function formatNumberToSocialStyle(value: number) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  })
    .format(value)
    .replace(".", ",")
    .toLowerCase();
}
