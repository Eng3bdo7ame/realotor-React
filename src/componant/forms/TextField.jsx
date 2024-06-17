import React from "react";

export default function TextField({
  type,
  placeholder,
  value,
  name,
  required,
  onChange,
}) {
  return (

    <input
      className="w-full mb-3 p-2 border border-gray-300 rounded-lg outline-none focus:border-orange-400 duration-100 ease-linear"
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      required={required}
      onChange={onChange}
    />

  );
}
