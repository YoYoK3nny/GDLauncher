import { createGlobalStyle } from 'styled-components';

const FFMarkW05MedWoff2 =
  'https://lolstatic-a.akamaihd.net/rso-login-page/2.2.20/assets/FFMarkW05-Medium.662fbc7901e31d6bee9c91d5f2cf42a1.woff2';
const FFMarkW05BoldWoff2 =
  'https://lolstatic-a.akamaihd.net/rso-login-page/2.2.20/assets/FFMarkW05-Bold.8e5368c00aa72d1e1b19d7b437c375f4.woff2';
const FFMarkW05HeavyWoff2 =
  'https://lolstatic-a.akamaihd.net/rso-login-page/2.2.20/assets/FFMarkW05-Heavy.1de8fa6eb6e45628ebb3edd635462180.woff2';

export default createGlobalStyle`
  html {
    height: 100%;
  }

  @font-face {
    font-family: "FF Mark W05";
    src: url(${FFMarkW05MedWoff2}) format("woff2");
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    font-family: "FF Mark W05";
    src: url(${FFMarkW05BoldWoff2}) format("woff2");
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    font-family: "FF Mark W05";
    src: url(${FFMarkW05HeavyWoff2}) format("woff2");
    font-style: normal;
    font-weight: 800;
  }

  body {
    height: 100%;   
    overflow: hidden;
    display: flex;
    -webkit-transform:translate3d(0,0,0);
    -webkit-font-smoothing: antialiased;
  }
  
  #root {
    font-family: FF Mark W05, Roboto, Helvetica, sans-serif;
    font-size: 14px;
    height: 100%;
    overflow: hidden;
    margin: 0;
    display: flex;
    box-sizing: border-box;
  }

.disable-animations *,
.disable-animations *::before,
.disable-animations *::after {
  transition: none !important;
  animation: none !important;
  backdrop-filter: none !important;
}

  a {
    -webkit-user-drag: none;
  }

  a:hover {
    text-decoration: none;
  }

  :focus { outline: none; }

  hr {
    border-width: 1px 0 0;
    border-top-style: solid;
    border-right-style: initial;
    border-bottom-style: initial;
    border-left-style: initial;
    border-top-color: rgba(255, 255, 255, 0.4);
    border-right-color: initial;
    border-bottom-color: initial;
    border-left-color: initial;
    border-image: initial;
    margin: 15px 0;
  }

  img {
    -webkit-user-drag: none;
    -webkit-transform:translate3d(0,0,0);
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.palette.grey[200]};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.palette.grey[900]};
    border-radius: 1px;
  }

  :not(input):not(textarea):not(button):not(span):not(div):not(a):not(i):not(span):not(svg):not(path),
  :not(input):not(textarea):not(button):not(span):not(div):not(a):not(i):not(span):not(svg):not(path)::after,
  :not(input):not(textarea):not(button):not(span):not(div):not(a):not(i):not(span):not(svg):not(path)::before {
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
  }

  .react-contextmenu {
    background: ${props => props.theme.palette.grey[700]};
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    color: ${props => props.theme.palette.text.primary};
    font-size: 16px;
    min-width: 180px;
    outline: none;
    transform: scale(0);
    transform-origin: top left;
    pointer-events: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    text-align: center;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 100ms;
  }
  
  .react-contextmenu.react-contextmenu--visible {
    transition: transform 100ms;
    transform: scale(1);
    pointer-events: auto;
    z-index: 9999;
  }
  
  .react-contextmenu-item {
    background: 0 0;
    color: ${props => props.theme.palette.text.primary};
    cursor: pointer;
    font-weight: 400;
    line-height: 1.5;
    padding: 4px 10px;
    text-align: left;
    white-space: nowrap;
    span {
      color: ${props => props.theme.palette.text.primary};
      width: 25px;
  
    }
  }
  
  .react-contextmenu-item.react-contextmenu-item--active,
  .react-contextmenu-item.react-contextmenu-item--selected,
  .react-contextmenu-item:hover{
    background-color: ${props => props.theme.palette.grey[800]};
    text-decoration: none;
  }

  .react-contextmenu-item:focus {
    outline: none;
  }
  
  .react-contextmenu-item.react-contextmenu-item--disabled,
  .react-contextmenu-item.react-contextmenu-item--disabled:hover {
    background-color: transparent;
    color: ${props => props.theme.palette.text.disabled};
  }
  
  .react-contextmenu-item--divider {
    border-bottom: 1px solid ${props => props.theme.palette.grey[300]};
    cursor: inherit;
    margin-bottom: 3px;
    padding: 2px 0;
  }
`;