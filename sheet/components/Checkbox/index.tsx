"use client";

import React from "react";

const Checkbox = ({
  isChecked,
  onChange,
}: {
  isChecked: boolean;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type="checkbox"
      className="block w-4 h-4"
      checked={isChecked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
