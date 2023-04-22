import { AxiosInstance } from "axios";
import { axiosInstance } from "./axiosInstance";

import { useLoading } from "share/hooks/useManifoldSlice";

/**
 * 
 * @param {AxiosInstance} _instance 
 * @param {(req: InternalAxiosRequestConfig<any>) => Promise} callWhenRequest 
 * @param {(res: AxiosResponse<any, any>) => Promise} callWhenResponse 
 */
export function setupAxiosInterceptors(_instance, callWhenRequest, callWhenResponse) {
  _instance.interceptors.request.use(
    async function(req) {
      return await callWhenRequest(req);
    },
    async function(error) {
      return Promise.reject(error);
    }
  );

  _instance.interceptors.response.use(
    async function(res) {
      return await callWhenResponse(res)
    },
    async function(error) {
      // Sẽ phân loại lỗi ở đây sau
      return Promise.reject(error);
    }
  );
}