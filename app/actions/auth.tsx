import { ILogin, ISignup } from "@/interfaces";
import { AxiosInstance } from "@/utils/axiosInstance";

export async function signup(data: ISignup) {
  console.log(data)
  try {
    const res = await AxiosInstance.post("register", data);
    return res;
  } catch (error) {
    console.log("Error from signup");
    throw error;
  }
}

export async function login(data: ILogin) {
    try {
        const res = await AxiosInstance.post("login", data);
        return res;
    } catch (error) {
        console.log("Error from login");
        throw error;
    }
}
