import React from 'react';
import {
  SAVE,
  PUBLISH,
  CANCEL,
  DELETE,
  FINISH,
  LOGIN,
} from '../../util/constants';

const Button = ({ text, name, skin, isSubmit }: ComponentsProps.Button) => {
  const btnSkin = () => {
    switch (skin) {
      case SAVE:
        return 'btn-save';
      case PUBLISH:
        return 'btn-publish';
      case CANCEL:
        return 'btn-cancel';
      case DELETE:
        return 'btn-cancel';
      case FINISH:
        return 'btn-finish';
      case LOGIN:
        return 'btn-login';
      default:
        return 'btn-save';
    }
  };

  return (
    <button
      className={`${btnSkin()} noto-sans-bold`}
      name={name}
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </button>
  );
};

export default Button;
