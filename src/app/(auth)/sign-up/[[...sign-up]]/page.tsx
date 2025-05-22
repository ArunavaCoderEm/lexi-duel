import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex mt-20 items-center justify-center ">
      <SignUp />
    </div>
  );
}
