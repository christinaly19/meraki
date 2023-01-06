import React, { Component } from 'react'
import './timer.css'
import Button from './button'

class Timer extends Component {
    constructor(props){
      super(props);
      this.state={seconds:0};
      this.disabled = false;
      
    }

    onStart=()=>{
        this.setState({seconds:this.state.seconds+1});
    }

    onReset =() => {
        clearInterval(this.f);
        this.setState({seconds:0})
        this.disabled = false;
    }

    timer=()=>{
        this.f=setInterval(this.onStart,1000);
        this.disabled = true;
      }

  render(){
      return(
          <div className = 'border-2 p-4 timer'>
            <div></div>
            <h1> Click To Start Timer (Optional)</h1>
              <h1 className = 'p-3 text-2xl'>{this.state.seconds}</h1>
            <div className = 'buttons'>
              <Button processing = {this.disabled} className = 'text-white bg-[#5A4257] hover:bg-[#382635]' id='btn' onClick={this.timer} >Start</Button>
              <Button  className = 'ml-2 text-white bg-[#5A4257] hover:bg-[#382635]' onClick={this.onReset}>Reset</Button>
        
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