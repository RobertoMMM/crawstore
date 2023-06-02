import styles from 'components/button/contained/index.module.sass';

interface Props {
  text: string;
  onClick: any;
  className?: string;
}

const ContainedButton = ({ text, onClick, className }: Props) => {
  return (
    <button className={className || styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default ContainedButton;
