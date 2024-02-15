import React, { FC } from "react";

interface FieldInputProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const FieldInput: FC<FieldInputProps> = ({ children, subtitle, title }) => {
  return (
    <>
      <div className="flex flex-row items-start">
        <div className="w-[35%]">
          <div className="font-semibold">{title}</div>
          <div className="text-gray-400 w-80">{subtitle}</div>
        </div>
        {children}
      </div>
    </>
  );
};

export default FieldInput;
