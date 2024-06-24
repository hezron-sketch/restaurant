import classes from "./button.module.css";

export default function Button({
  type,
  text,
  onClick,
  color,
  backgroundColor,
  fontSize,
  width,
  height,
}) {
  return (
    <div className={classes.container}>
      <button
        style={{
          fontSize,
          width,
          height,
        }}
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

Button.defaultProps = {
  type: "button",
  text: "Submit",
  fontSize: "1.5rem",
  width: "12rem",
  height: "3.5rem",
};
