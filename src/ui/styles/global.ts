import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'
import './fonts.css'
import './reset.css'

export const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.red};
    border-radius: 8px;
  }
 
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @supports(scrollbar-width: thin) {
    * {
      scrollbar-width: thin;
      scrollbar-color: ${theme.palette.white} transparent;
    }
  }

  body {
    font-family: ${theme.fontFamily.roboto}, sans-serif;
    color: ${theme.palette.black};
    background-color: ${theme.palette.white};

    overflow: hidden;
    overflow-y: auto;
  }

  #root {
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100vh;
  }

  .blur {
    background-color: rgba(0,0,0,0.4);
    filter: blur(5px);
  }

  .overflow-hidden{
    overflow: hidden;
  }

  b,
  strong {
    font-weight: 700;
  }
`
