import { AxiosError } from "axios";

/**
 * Hàm này dùng để tạo body cho phần axios request.
 * @param {{[key: any]: any} | string | number | boolean} body 
 * @returns 
 */
function createPOSTRequestBody(body) {
  return {
    data: body
  }
}

/**
 * 
 * @param {AxiosError} error 
 */
function getErrorResponse(error) {
  return error instanceof AxiosError ? error.response.data : error.message;
}

const AxiosUtility = {
  createPOSTRequestBody,
  getErrorResponse
}

export default AxiosUtility;