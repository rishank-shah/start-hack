import React from 'react';

class Timer extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            hours:0,
            minutes:0,
            seconds:0,
            timerStarted:false,
            timerStopped:true,
            lap:[]
        }
    }



    startTimer = (e) =>{
        e.preventDefault();
        if(this.state.timerStopped){
            this.timerInterval = setInterval(()=>{
                this.setState({
                    timerStarted:true,
                    timerStopped:false
                });
                if(this.state.timerStarted){
                    if(this.state.seconds >=60 ){
                        this.setState((prevState)=>({
                            minutes: prevState.minutes + 1,
                            seconds:0
                        }))
                    } 
                    if(this.state.minutes >= 60){
                        this.setState((prevState)=>({
                            hours: prevState.hours + 1,
                            minutes:0,
                            seconds:0
                        }))
                    }
                    this.setState((prevState)=>({
                        seconds: prevState.seconds + 1
                    }))
                }
            },1000)
        }
    }

    stopTimer = (e) =>{
        e.preventDefault();
        this.setState({
            timerStarted:false,
            timerStopped:true
        })
        clearInterval(this.timerInterval);
    }

    resetTimer = (e) =>{
        this.setState({
            hours:0,
            minutes:0,
            seconds:0,
            timerStarted:false,
            timerStopped:true,
        })
        clearInterval(this.timerInterval)
    }

    saveTime = (e)=>{
        e.preventDefault()
        this.setState((prevState)=>({
            lap: [...prevState.lap,this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds]
        }))
    }

    render(){
        return (
            <div>
                <div className="jumbotron">
                    <h2>Timer</h2>
                </div>
                <div className="mt-5 mb-5 text-center timer text-bold">
                    {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}
                </div>
                <div className="text-center container">
                    <button onClick={this.startTimer.bind(this)} className="btn btn-success">Start Timer</button>
                    <button onClick={this.stopTimer.bind(this)} className="btn btn-warning ml-5">Stop Timer</button>
                    <button onClick={this.saveTime.bind(this)} className="btn btn-primary ml-5">Save Time</button>
                    <button onClick={this.resetTimer.bind(this)} className="btn btn-danger ml-5">Reset Timer</button>
                </div>
                <div className="container text-center mt-5">
                    {this.state.lap.map((time,index)=>{
                        return <div key={index}>Captured Time - {index + 1}  : {time}</div>
                    })}
                </div>
            </div>
        )
    }
};

export default Timer;