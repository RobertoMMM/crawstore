import ArrowLeft from '../../../../../../../assets/icons/arrowLongLeft.svg';
import './index.sass';
import ArrowRight from '../../../../../../../assets/icons/arrowLongRight.svg';

interface Props {
  orientation: 'left' | 'right';
  disabled: boolean;
  onClick: () => void;
}

const Arrow = ({ orientation, disabled, onClick }: Props) => {
  return (
    <button className={'arrowButton'} onClick={onClick}>
      {orientation === 'left' ? (
        <ArrowLeft className={`${'icon'} ${disabled && 'disabled'}`} />
      ) : (
        <ArrowRight className={`${'icon'} ${disabled && 'disabled'}`} />
      )}
    </button>
  );
};

export default Arrow;
