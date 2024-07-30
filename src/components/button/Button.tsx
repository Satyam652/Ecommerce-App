type ButtonProps = {
  label: string;
  icon?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  icon: Icon = true,
  onClick = () => {},
}) => {
  return (
    <button
      type="button"
      className="w-fit text-white bg-neutral-900 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-500 font-normal rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      onClick={onClick}
    >
      {label}
      {Icon && (
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
