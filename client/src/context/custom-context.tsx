import { childProps } from "@/types/type";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs"; 
import { dark } from "@clerk/themes";

export default function CustomContext({ children }: childProps) {
  return (
    <div>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          variables: {
            colorBackground: "#151517",
            colorInputText: "#FCFCF7",
            fontFamily: "font-satoshi",
          },
          elements: {
            formButtonPrimary:
              "bg-purple-700 text-white border-none ring-none outline-none hover:bg-purple-800 transition-all duration-200",
          },
        }}
        signInUrl="/sign-in"
        signUpUrl="/sign-up"
        signInFallbackRedirectUrl="/lobby"
        signUpFallbackRedirectUrl="/lobby"
        afterSignOutUrl="/"
        domain="http://localhost:3000/"
        isSatellite={false}
      >
        {children}
      </ClerkProvider>
    </div>
  );
}
