import { useUserStore } from "@/store/userStore";
import { userCreate } from "@/types/type";
import axios from "axios";

type UserWithEmail = Omit<userCreate, "firstName" | "lastName" | "avatar">;

export default async function userExists({ email }: UserWithEmail) {
  try {
    const user = await axios.get(`/api/users/get-user/${email}`);

    if (user.data.success) {
      const userdata = user.data.user;

      useUserStore.getState().setUser({
        firstName: userdata.firstName,
        lastName: userdata.lastName || "",
        email: userdata.email,
        avatar: userdata.avatar || "",
        isLoggedIn: true,
        isInDB: true,
      });
    } else {
      useUserStore.getState().setUser({
        firstName: "",
        lastName: "",
        email,
        avatar: "",
        isLoggedIn: false,
        isInDB: false,
      });
      throw new Error("User parsing error occurred");
    }
  } catch (e: unknown) {
    throw new Error("User error occurred");
  }
}
