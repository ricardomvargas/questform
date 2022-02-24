import React from 'react';

import { TIconButton } from './TIconButton';

import {
  ADD,
  DELETE_ITEM,
  FILTER,
  SEARCH,
  MORE_OPTIONS_VERTICAL,
  MORE_OPTIONS_HORIZONTAL,
  MENU,
  CLOSE,
  ARROW_LEFT,
  ARROW_RIGHT,
} from '../../util/constants';

const IconButton = ({ buttonType, url, onClickAction, idName, title, color }: TIconButton) => {
  const buildSvgClassName = (customClass = '') =>
    color
      ? `icon-button icon-button-${color} ${customClass}`
      : `icon-button icon-button-light ${customClass}`;

  const getSvg = () => {
    switch (buttonType) {
      case ADD:
        return (
          <svg
            className={buildSvgClassName()}
            height="512pt"
            viewBox="0 0 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" />
            <path d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0" />
          </svg>
        );
      case DELETE_ITEM:
        return (
          <svg
            className={buildSvgClassName()}
            height="512pt"
            viewBox="0 0 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" />
            <path d="m176.8125 351.1875c-4.097656 0-8.195312-1.554688-11.308594-4.691406-6.25-6.25-6.25-16.382813 0-22.632813l158.398438-158.402343c6.253906-6.25 16.386718-6.25 22.636718 0s6.25 16.382812 0 22.636718l-158.402343 158.398438c-3.15625 3.136718-7.25 4.691406-11.324219 4.691406zm0 0" />
            <path d="m335.1875 351.1875c-4.09375 0-8.191406-1.554688-11.304688-4.691406l-158.398437-158.378906c-6.253906-6.25-6.253906-16.382813 0-22.632813 6.25-6.253906 16.382813-6.253906 22.632813 0l158.398437 158.398437c6.253906 6.25 6.253906 16.382813 0 22.632813-3.132813 3.117187-7.230469 4.671875-11.328125 4.671875zm0 0" />
          </svg>
        );
      case FILTER:
        return (
          <svg
            className={buildSvgClassName()}
            height="512pt"
            viewBox="0 0 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m208 512c-2.582031 0-5.183594-.617188-7.550781-1.898438-5.207031-2.773437-8.449219-8.214843-8.449219-14.101562v-205.226562c0-7.464844-3.136719-14.636719-8.640625-19.667969l-171.261719-156.867188c-7.703125-7.082031-12.097656-17.109375-12.097656-27.519531v-49.386719c0-20.585937 16.746094-37.332031 37.332031-37.332031h437.335938c20.585937 0 37.332031 16.746094 37.332031 37.332031v49.386719c0 10.410156-4.394531 20.4375-12.074219 27.519531l-171.242187 156.886719c-5.546875 5.011719-8.683594 12.183594-8.683594 19.648438v129.792968c0 12.5-6.207031 24.125-16.617188 31.058594l-86.507812 57.664062c-2.667969 1.816407-5.761719 2.710938-8.875 2.710938zm-170.667969-480c-2.941406 0-5.332031 2.390625-5.332031 5.332031v49.386719c0 1.496094.640625 2.925781 1.75 3.949219l171.199219 156.839843c12.097656 11.09375 19.050781 26.859376 19.050781 43.265626v175.316406l61.632812-41.085938c1.472657-.984375 2.367188-2.648437 2.367188-4.4375v-129.792968c0-16.425782 6.933594-32.191407 19.070312-43.265626l171.203126-156.863281c1.085937-1 1.726562-2.429687 1.726562-3.925781v-49.386719c0-2.941406-2.390625-5.332031-5.332031-5.332031zm0 0" />
          </svg>
        );
      case SEARCH:
        return (
          <svg
            className={buildSvgClassName()}
            height="512pt"
            viewBox="0 0 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667 S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6 c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z" />
          </svg>
        );
      case MORE_OPTIONS_VERTICAL:
        return (
          <svg
            className={buildSvgClassName()}
            height="512pt"
            viewBox="-192 0 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m128 256c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" />
            <path d="m128 64c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" />
            <path d="m128 448c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" />
          </svg>
        );
      case MORE_OPTIONS_HORIZONTAL:
        return (
          <svg
            className={buildSvgClassName()}
            height="512pt"
            viewBox="0 -192 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m320 64c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" />
            <path d="m128 64c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" />
            <path d="m512 64c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" />
          </svg>
        );
      case MENU:
        return (
          <svg
            className={buildSvgClassName()}
            height="512pt"
            viewBox="0 0 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          </svg>
        );
      case CLOSE:
        return (
          <svg
            className={buildSvgClassName('icon-button-cancel')}
            height="512pt"
            viewBox="0 0 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z" />
          </svg>
        );
      case ARROW_LEFT:
        return (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="15.531px"
            height="15.5px"
            viewBox="0 0 15.531 15.5"
            enableBackground="new 0 0 15.531 15.5"
          >
            <g>
              <g id="btn-add_4_">
                <circle
                  fill="#CACBCC"
                  stroke="#878787"
                  strokeWidth="0.5337"
                  strokeMiterlimit="10"
                  cx="7.764"
                  cy="7.762"
                  r="7.472"
                />
                <linearGradient
                  id="SVGID_1_"
                  gradientUnits="userSpaceOnUse"
                  x1="7.835"
                  y1="1.9565"
                  x2="7.835"
                  y2="13.7109"
                >
                  <stop offset="0.4" style={{ stopColor: '#CACBCC' }} />
                  <stop offset="1" style={{ stopColor: '#878787' }} />
                </linearGradient>
                <circle fill="url(#SVGID_1_)" cx="7.835" cy="7.833" r="5.877" />
              </g>
              <polygon
                fill="#FFFFFF"
                points="6.706,7.374 9.625,5.689 9.625,4.534 4.706,7.374 9.625,10.214 9.625,9.059 	"
              />
            </g>
          </svg>
        );
      case ARROW_RIGHT:
        return (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="15.469px"
            height="15.5px"
            viewBox="0 0 15.469 15.5"
            enableBackground="new 0 0 15.469 15.5"
          >
            <g>
              <g id="btn-add_1_">
                <circle
                  fill="#CACBCC"
                  stroke="#878787"
                  strokeWidth="0.5337"
                  strokeMiterlimit="10"
                  cx="7.733"
                  cy="7.762"
                  r="7.472"
                />
                <linearGradient
                  id="SVGID_1_"
                  gradientUnits="userSpaceOnUse"
                  x1="7.8037"
                  y1="1.9565"
                  x2="7.8037"
                  y2="13.7104"
                >
                  <stop offset="0.4" style={{ stopColor: '#CACBCC' }} />
                  <stop offset="1" style={{ stopColor: '#878787' }} />
                </linearGradient>
                <circle fill="url(#SVGID_1_)" cx="7.804" cy="7.833" r="5.877" />
              </g>
              <polygon
                fill="#FFFFFF"
                points="8.138,7.374 5.219,9.059 5.219,10.214 10.138,7.374 5.219,4.534 5.219,5.689 	"
              />
            </g>
          </svg>
        );
      default:
        return <></>;
    }
  };

  const getTitle = () => (title ? title : buttonType);
  const buildId = () => (idName ? { id: idName } : null);
  const buildTitle = () => (title ? { title: getTitle() } : null);

  return onClickAction ? (
    <a {...buildId()} {...buildTitle()} onClick={(e) => onClickAction(e)}>
      {getSvg()}
    </a>
  ) : (
    <a href={url} {...buildId()} {...buildTitle()}>
      {getSvg()}
    </a>
  );
};

export default IconButton;
