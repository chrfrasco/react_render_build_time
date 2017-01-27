import React from 'react';
import { renderToString } from 'react-dom/server';
import Mustache from 'mustache';
import fs from 'fs';
import App from '../js/App';

module.exports = templateParams => {
  const template = fs.readFileSync('./src/templates/index.template.html', 'utf-8');
  const reactString = renderToString(<App />);
  const renderedTemplate = Mustache.render(template, {
    reactString,
    title: templateParams.title
  });

  return renderedTemplate;
};