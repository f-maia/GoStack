/**
 * Babel: Converter (transpilar) código React para um código que o browser entendaa
 * Webpack: Pra cada tipo de arquivo (.js, .css, .png) converte o código de uma maneira diferente usando loaders
 * 
 * Loaders: babel-loader, css-loader, image-loader
 */

 import React from 'react';
 import { render } from 'react-dom';

 import App from './App';

// JSX: HTML dentro do JavaScript (Javascript XML)

 render(<App />, document.getElementById("app"))