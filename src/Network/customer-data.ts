import { AxiosResponse } from "axios";
import { netInstance } from "./api-handler";
import { toast } from "react-toastify";

export interface CustomerRow {
  firstName: string;
  lastName: string;
  email: string;
  score: number;
  id: string;
}

export interface CustomerDetailPayLoad {
  firstName: string;
  lastName: string;
  email: string;
  score: number;
  description: string;
  note: string;
  address: string;
  createdAt: string; // Assuming it's a string representation of a date
  updatedAt: string; // Assuming it's a string representation of a date
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
  } catch (e) {
    return [];
  }
}

export async function fetchCustomer(id: string): Promise<CustomerDetailPayLoad> {
  try {
    const response: AxiosResponse<CustomerDetailPayLoad> = await netInstance.get(
      `/customer/${id}`,
    );
    return response.data;
  } catch (e) {
    if (e.response) {
      toast.error(e.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    toast.error("Opps something went wrong", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    throw e;
  }
}
