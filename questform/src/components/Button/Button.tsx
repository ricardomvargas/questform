import React from 'react';

import { TButton, TButtonSkin } from '../../types/components/Button';

import {
  SAVE,
  PUBLISH,
  CANCEL,
  DELETE,
  FINISH,
  LOGIN,
} from '../../util/constants';

const btnSkin = (skin: TButtonSkin) => {
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

const Button = ({ text, name, skin, isSubmit }: TButton) => {
  return (
    <button
      className={`${btnSkin(skin)} noto-sans-bold`}
      name={name}
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </button>
  );
};

export default Button;
