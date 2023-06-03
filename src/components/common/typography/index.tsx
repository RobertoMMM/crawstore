import { JSX, PropsWithChildren } from 'react';
import './index.sass';
import clsx from 'clsx';

type FontWeight = 'bold' | 'regular' | 'light';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2';

interface Props extends PropsWithChildren {
  variant: TypographyVariant;
  weight?: FontWeight;
  className?: string;
  Component?: keyof JSX.IntrinsicElements;
}

const Typography = ({
  variant,
  weight,
  children,
  className,
  Component = 'div',
}: Props) => {
  return (
    <Component
      className={clsx({
        [className || '']: className,
        typography: true,
        [`typography--variant-${variant}`]: variant,
        [`typography--weight-${weight}`]: weight,
      })}
    >
      {children}
    </Component>
  );
};

export default Typography;
