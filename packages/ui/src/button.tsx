export function Button({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}): JSX.Element {
  return (
    <button className="p-2 bg-white text-black rounded m-2" onClick={onClick}>
      {label}
    </button>
  );
}
