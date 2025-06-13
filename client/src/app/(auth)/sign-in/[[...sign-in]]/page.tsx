import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex lg:mt-3 mt-20 items-center justify-center ">
      <SignIn />
    </div>
  );
}
