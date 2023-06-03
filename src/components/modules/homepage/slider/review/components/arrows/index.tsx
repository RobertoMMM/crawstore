import ArrowLeft from '../../../../../../../assets/icons/arrowLongLeft.svg';
import styles from './index.module.sass';
import ArrowRight from '../../../../../../../assets/icons/arrowLongRight.svg';

interface Props {
  orientation: 'left' | 'right';
  disabled: boolean;
  onClick: () => void;
}

const Arrow = ({ orientation, disabled, onClick }: Props) => {
  return (
    <button className={styles.arrowButton} onClick={onClick}>
      {orientation === 'left' ? (
        <ArrowLeft
          className={`${styles.icon} ${disabled && styles.disabled}`}
        />
      ) : (
        <ArrowRight
          className={`${styles.icon} ${disabled && styles.disabled}`}
        />
      )}
    </button>
  );
};

export default Arrow;
