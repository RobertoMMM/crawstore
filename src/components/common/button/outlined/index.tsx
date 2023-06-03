import styles from 'components/common/button/outlined/index.module.sass';
import { ReactElement } from 'react';

interface Props {
  text: string | ReactElement;
  onClick: any;
  className?: string;
}

const OutlinedButton = ({ text, onClick, className }: Props) => {
  return (
    <button className={className || styles.buttonOutlined} onClick={onClick}>
      {text}
    </button>
  );
};

export default OutlinedButton;
