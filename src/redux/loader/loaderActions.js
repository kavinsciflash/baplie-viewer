import * as types from "./loaderTypes";

export const loader = (isLoading) => {
  return isLoading
    ? {
        type: types.SHOW_LOADER,
        data: isLoading,
      }
    : {
        type: types.HIDE_LOADER,
        data: isLoading,
      };
};
