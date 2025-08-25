import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-t-primary",
  {
    variants: {
      size: {
        default: "h-9 w-9",
        sm: "h-8 w-8",
        lg: "h-10 w-10",
        icon: "size-9",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className={buttonVariants({ size: "default" })}></div>
      </div>
    </div>
  );
};

export default Loading;
