import 'components/common/button/outlined/index.sass';
import { ReactElement } from 'react';

const OutlinedButton = ({
  text,
  onClick,
}: {
  text: string | ReactElement;
  onClick: () => void;
}) => {
  return (
    <button className={'outlinedButton'} onClick={onClick}>
      {text}
    </button>
  );
};

export default OutlinedButton;
