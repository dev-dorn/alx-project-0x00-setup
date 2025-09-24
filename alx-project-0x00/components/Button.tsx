import React from "react";

interface ButtonProps {
  title: string;
  styles?: string; // Tailwind classes passed as props
}

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 transition ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
