import React from "react";

interface Props {
  title: string;
  disabled?: boolean;
}

const AuthBtn: React.FC<Props> = ({ title, disabled }) => {
  const baseClasses =
    "inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 focus-visible:ring outline-none transition duration-300";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-yellow-400 dark:focus:outline-none";
  const hoverClasses = "hover:bg-yellow-500";
  const fontSizeClasses = "2xl:text-base";
  const disabledClasses =
    "disabled:opacity-50 disabled:cursor-progress disabled:hover:bg-yellow-400";
  const ringClasses = "ring-zinc-500 dark:ring-zinc-200";

  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${disabledClasses} ${ringClasses}`}
    >
      {title}
    </button>
  );
};

export default AuthBtn;
