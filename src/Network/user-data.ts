import { toast } from "react-toastify";
import { netInstance } from "./api-handler";
import { AxiosResponse } from "axios";

export interface LoginUserDetail {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  token: string;
}

interface LoginUserResponse {
  token: string;
}
export async function fetchUserToken(
  username: string,
  password: string
): Promise<LoginUserDetail | null> {
  try {
    const response: AxiosResponse<LoginUserResponse> =
      await netInstance.post<LoginUserResponse>("/user/login", {
        username,
        password,
      });
    netInstance.defaults.headers.common[
      "Authorization"
    ] = `bearer ${response.data.token}`;
    toast.success("login successfull", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    const userData = parseJwt(response.data.token);
    return { ...userData, token: response.data.token };
  } catch (e) {
    console.log(e);
    if (e.response) {
      toast.error(e.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return null;
    }
    toast.error("Opps something went wrong", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
