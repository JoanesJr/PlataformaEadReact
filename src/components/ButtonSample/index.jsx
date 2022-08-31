import style from "./sampleButton.module.css";

const SampleButton = ({ text, sty }) => {
  return <button className={`${style.button}  ${sty}`}>{text}</button>;
};

export default SampleButton;
