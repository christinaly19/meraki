import React, { Component } from 'react'
import './timer.css'
import Button from './button'

class Timer extends Component {
    constructor(props){
      super(props);
      this.state={seconds:0};
    }

    onStart=()=>{
        this.setState({seconds:this.state.seconds+1});
        document.getElementById('btn').disabled=true;
    }

    onReset =() => {
        clearInterval(this.f);
        this.setState({seconds:0})
    }

    timer=()=>{
        this.f=setInterval(this.onStart,1000);
      }

  render(){
      return(
          <div className = 'timer'>
              <h1 className = 'text-2xl'>{this.state.seconds}</h1>
            <div className = 'buttons'>
              <Button className = 'text-white' id='btn' onClick={this.timer} >Start</Button>
              <Button className = 'ml-2' onClick={this.onReset}>Reset</Button>
        
              </div>
                  {this.state.seconds > 600 &&
            <div>
                <div className = 'spacebefore'> </div>
                <div class="p-4 mb-4 text-sm text-[#796475] bg-[#F7E8E6] rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                <span class="font-medium">Time Explired!</span> You can keep writing, but 10 minutes have passed!
                </div>
            </div>
      }
          </div>
      )
  }
  }
  export default Timer