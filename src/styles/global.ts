import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing : border-box;
  outline: 0;
}
body{
  background: #E5E5E5;
  color:#fff;
  -webkit-font-smoothing: antialiased;
}

border-style,input,button{
  font-family: 'Muli', sans-serif;
  font-size:16px;
}
h1, h2,h3,h4,h5,h6, strong{
  font-weight: 500;

}
button {
  cursor: pointer
}



`;
