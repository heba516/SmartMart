import { ISignup } from "@/interfaces";
import { AxiosInstance } from "@/utils/axiosInstance";

export async function signup(data: ISignup) {
  try {
    const res = await AxiosInstance.post("register", data);
    return res;
  } catch (error) {
    console.log("Error from signup");
    throw error;
  }
}
