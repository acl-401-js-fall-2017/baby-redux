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