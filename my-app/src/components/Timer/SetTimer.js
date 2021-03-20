import React from 'react';
import './SetTimer.css'

class Timer extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            hours:0,
            minutes:1,
            seconds:0,
            timerStarted:false,
            timerStopped:true,
            lap:[],
            timeMinutes:0
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

    handleChange=(e)=>{
        this.setState({
            timeMinutes:parseInt(e.target.value) || 0,
            minutes:parseInt(e.target.value) || 0,
            seconds:60
        })
        console.log(parseInt(e.target.value) || 0)
        if(this.state.timerStopped){
            this.timerInterval = setInterval(()=>{
                this.setState({
                    timerStarted:true,
                    timerStopped:false,
                });
                if(this.state.timerStarted){
                    if(this.state.seconds <= 0 ){
                        this.setState((prevState)=>({
                            minutes: prevState.minutes - 1,
                            seconds:60
                        }))
                    }
                    this.setState((prevState)=>({
                        seconds: prevState.seconds - 1
                    }))
                }
            },1000)
        }
    }

    render(){
        return (
            <div>
                <div class="py-5">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">

                            
                            <div class="rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
                                <p class="mb-4 font-weight-bold text-uppercase">PLAN YOUR DAY ACCORDINGLY</p>
                                <div id="clock-b" class="countdown-circles d-flex flex-wrap justify-content-center pt-4"></div>
                            </div>

                            
                            <div class="rounded bg-gradient-2 text-white shadow p-5 text-center mb-5">
                                <p class="mb-0 font-weight-bold text-uppercase">TAKE A BREAK</p>
                                <div id="clock-a" class="countdown pt-4"></div>
                            </div>

                            
                            <div class="rounded bg-gradient-3 text-white shadow p-5 text-center mb-5">
                                <p class="mb-0 font-weight-bold text-uppercase">WE'RE HERE TO HELP YOU OUT</p>
                                <div id="clock" class="countdown pt-4"></div>
                            </div>

                            
                            <div class="rounded bg-gradient-4 text-white shadow p-5 text-center mb-5">
                                <p class="mb-0 font-weight-bold text-uppercase">LET'S USE SOME CALL TO ACTION</p>
                                <div id="clock-c" class="countdown py-4"></div>
                            <div className="text-center">
                                <input onChange={e => this.handleChange(e)} placeholder="Set Timer for x minutes"/>
                            </div>
                            <div className="mt-5 mb-5 text-center timer text-bold">
                                {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}
                            </div>
                            <div className="text-center container">
                                <button disabled={this.state.timerStarted} onClick={this.handleChange.bind(this)} className="btn btn-success">Start Timer</button>
                                <button onClick={this.stopTimer.bind(this)} className="btn btn-warning ml-5">Stop Timer</button>
                                <button disabled={!this.state.timerStarted} onClick={this.saveTime.bind(this)} className="btn btn-primary ml-5">Save Time</button>
                                <button onClick={this.resetTimer.bind(this)} className="btn btn-danger ml-5">Reset Timer</button>
                            </div>
                            <div className="container text-center mt-5">
                                {this.state.lap.map((time,index)=>{
                                    return <div key={index}>Captured Time - {index + 1}  : {time}</div>
                                })}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
};

export default Timer;