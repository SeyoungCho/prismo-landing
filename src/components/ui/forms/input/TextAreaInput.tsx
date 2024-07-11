import React from "react";

interface Props {
  label: string;
  name: string;
  id: string;
}

const TextAreaInput: React.FC<Props> = ({ label, name, id }) => {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={4}
        className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
        placeholder={label}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
