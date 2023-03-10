import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: #333333;
    font-family: 'Oswald', sans-serif;
	  font-weight: 400;
    color: #FFFFFF;
    
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input{
  background: #FFFFFF;
  width: 429px;
  height: 65px;
  border-radius: 6px;
  border: none;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  padding: 0 17px;
  ::placeholder{
    color: #9F9F9F;
  }
  :disabled{
    background-color: #F2F2F2;
    border: 1px solid #D5D5D5;
    color: #AFAFAF;
  }
}
button{
	cursor: pointer;
  background: #1877F2;
  width: 429px;
  height: 65px;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #FFFFFF;
  text-align: center;
	&:hover{
    opacity: 60%;
  }
}
`

export default GlobalStyle;