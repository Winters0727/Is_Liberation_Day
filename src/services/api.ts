import axios from "axios";
import { createParameter } from "./parameter";

import type { ActivistResponse } from "../types/api.type";
import type { RequestParameter } from "../types/parameter.type";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

export const requestActivist = async (
  parameter: Partial<RequestParameter> = {}
) => {
  const res = await httpClient.get<ActivistResponse>(
    `/opnAPI/indepCrusaderList.do?${createParameter(parameter)}`
  );
  const data = res.data.ITEMS;
  return data;
};
