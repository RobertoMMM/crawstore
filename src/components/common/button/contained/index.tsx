import 'components/common/button/contained/index.sass';
import { ReactElement } from 'react';

const ContainedButton = ({
  text,
  onClick,
}: {
  text: string | ReactElement;
  onClick: () => void;
}) => {
  return (
    <button className={'containedButton'} onClick={onClick}>
      {text}
    </button>
  );
};

export default ContainedButton;
