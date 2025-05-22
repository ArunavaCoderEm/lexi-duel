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
    const user = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/get-user/${email}`
    );

    if (!user.data.success) {
      const newUser = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/add-user`,
        {
          email,
          firstName,
          lastName,
          avatar,
        }
      );
      const newUserd = newUser.data.user;
      useUserStore.getState().setUser({
        firstName: newUserd.firstName,
        lastName: newUserd.lastName || "",
        email: newUserd.email,
        avatar: newUserd.avatar || "",
        isLoggedIn: true,
        isInDB: true,
      });
    } else {
      const userdata = user.data.user;
      useUserStore.getState().setUser({
        firstName: userdata.firstName,
        lastName: userdata.lastName || "",
        email: userdata.email,
        avatar: userdata.avatar || "",
        isLoggedIn: true,
        isInDB: true,
      });
    }
  } catch (e: unknown) {
    throw new Error(`Error occurred updating game state: ${e instanceof Error ? e.message : String(e)}`);
  }
}
