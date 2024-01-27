import * as React from "react";

export function Button({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}): JSX.Element {
  return (
    <button
      className="ui-p-2 ui-bg-white ui-text-black ui-rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
