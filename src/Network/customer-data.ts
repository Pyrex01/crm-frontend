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
  createdAt: string;
  updatedAt: string;
  id: string;
}
export interface CustomerUpdatePaylaod {
  id: string;
  score: number;
  description: string;
  note: string;
  address: string;
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

export async function fetchCustomer(
  id: string
): Promise<CustomerDetailPayLoad> {
  try {
    const response: AxiosResponse<CustomerDetailPayLoad> =
      await netInstance.get(`/customer/${id}`);
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

export async function deleteCustomer(
  id: string
): Promise<CustomerDetailPayLoad> {
  try {
    const response: AxiosResponse<CustomerDetailPayLoad> =
      await netInstance.delete(`/customer/${id}`);
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

export async function updateCustomer(
  customerUpdatePaylaod: CustomerUpdatePaylaod
): Promise<CustomerDetailPayLoad> {
  try {
    toast.success("updation successfull", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return await netInstance.post("/customer/update", customerUpdatePaylaod);
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
