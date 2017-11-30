import React, { PureComponent } from 'react';
import './Loader.css';

export default class Loader extends PureComponent {
  render() {
    return(
      <div 
        className="clear-mount" 
      >
        <div
          className="spinner"
        >
          <div className="loading-img"></div>
        </div>
      </div>
    );
  }
}

function getDimensions(el) {
  return el.height < el.width ? el.height / 2 : el.width / 2
}