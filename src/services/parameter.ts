import type { RequestParameter } from "../types/parameter.type";

export const createParameter = (parameter: Partial<RequestParameter>) => {
  const initialParamter = {
    ...parameter,
    nPageIndex: parameter.nPageIndex ?? 1,
    nCountPerPage: parameter.nCountPerPage ?? 1,
    type: parameter.type ?? "JSON",
  };

  const createParameterString = (parameter: Partial<RequestParameter>) => {
    const parameterKeys = Object.keys(parameter) as (keyof RequestParameter)[];
    return parameterKeys
      .map((parameterKey) => `${parameterKey}=${parameter[parameterKey]}`)
      .join("&");
  };

  return createParameterString(initialParamter);
};
