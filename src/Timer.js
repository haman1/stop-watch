import React, { Component } from 'react';

class Timer extends Component {
    render() {
        constructor(props){
            super(props);
            this.state = {
                clock: 0
            };
        }
        return (
            <div>
               <p>You have been on the site for:</p>
               <span> 55.34 </span>
               <p>seconds</p>
            </div>
        );
    }
}

export default Timer;