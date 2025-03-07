import React from "react";

interface Props {
  label?: string;
  placeholder?: string;
  id: string;
}

const EmailContactInput: React.FC<Props> = ({
  label = "Email",
  placeholder = "Email",
  id,
}) => {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type="email"
        name="email"
        id={id}
        autoComplete="email"
        className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
        placeholder={placeholder}
      />
    </div>
  );
};

export default EmailContactInput;
