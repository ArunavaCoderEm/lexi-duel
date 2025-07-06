import HOST_URL from "@/config/url.config";
import { useUserStore } from "@/store/userStore";
import { userCreate } from "@/types/type";
import axios from "axios";

export default async function userExists({
  email,
  firstName,
  lastName,
  avatar,
}: userCreate) {
  try {

    const userRes = await axios.get(`${HOST_URL}/api/users/get-user/${email}`);

    if (!userRes.data.success) {

      const newUserRes = await axios.post(`${HOST_URL}/api/users/add-user`, {
        email,
        firstName,
        lastName,
        avatar,
      });

      const newUser = newUserRes.data.user;

      useUserStore.getState().setUser({
        firstName: newUser.firstName,
        lastName: newUser.lastName || "",
        email: newUser.email,
        avatar: newUser.avatar || "",
        isLoggedIn: true,
        isInDB: true,
      });

    } else {

      const existingUser = userRes.data.user;

      useUserStore.getState().setUser({
        firstName: existingUser.firstName,
        lastName: existingUser.lastName || "",
        email: existingUser.email,
        avatar: existingUser.avatar || "",
        isLoggedIn: true,
        isInDB: true,
      });
    }

  } catch (e: unknown) {
    console.error("Error in userExists:", e);
    throw new Error(
      `Error occurred checking/creating user: ${
        e instanceof Error ? e.message : String(e)
      }`
    );
  }
}
