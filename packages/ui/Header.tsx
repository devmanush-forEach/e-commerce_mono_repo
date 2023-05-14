import * as React from "react";

export const Header = ({ text }: { text: string }) => {
  return (
    <h1 className="bg-red-600 text-green-900 font-bold text-center p-4">
      {text}
    </h1>
  );
};
