import Assets from 'imports/assets.import';
import React from 'react';
import './action_button.ui.scss';

interface actionButtonProps {
  icon: string;
  positon?: string;
  animation?: boolean;
  className?: string;
  iconClassName?: string;
  onClick?: any;
  shadow?: boolean;
}

const ActionButton = (props: actionButtonProps) => {
  const {
    icon,
    positon,
    animation,
    className,
    iconClassName,
    onClick,
    shadow,
  } = props;
  return (
    <button
      className={`icon_button icon_button_${positon} ${
        shadow ? 'button_shadow' : 'without_shadow'
      } ${className}`}
      type="button"
      onClick={onClick}>
      <img
        src={Assets[icon]}
        className={`${animation && 'icon_animation'} ${iconClassName}`}
      />
    </button>
  );
};

ActionButton.defaultProps = {
  animation: false,
  className: '',
  iconClassName: '',
  onClick: () => {},
};

export default ActionButton;
