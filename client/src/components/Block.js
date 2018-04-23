import React, { Component } from 'react';


const Block =  (props) => {
    return (
      <div className="block">
        <h4>{props.number}</h4>
      </div>
    );
}

export default Block