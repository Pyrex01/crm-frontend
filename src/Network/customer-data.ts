import { AxiosResponse } from "axios";
import { netInstance } from "./api-handler";

export interface CustomerRow {
  firstName: string;
  lastName: string;
  email: string;
  score: number;
  id: string;
}
export async function fetchCustomers(
  pageNo: number,
  pageSize: number
): Promise<CustomerRow[]> {
  try {
    const response: AxiosResponse<CustomerRow[]> = await netInstance.get(
      "/customer/page",
      { params: { pageNo, pageSize } }
    );
    return response.data;
  } catch (e) {return []}
}
