import React, { Component } from "react";
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from "react-bootstrap";
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

  
function CardDisplay() {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        details: {
          display: 'flex',
          flexDirection: 'column',
        },
        content: {
          flex: '1 0 auto',
        },
        cover: {
          width: 151,
        },
        controls: {
          display: 'flex',
          alignItems: 'center',
          paddingLeft: theme.spacing(1),
          paddingBottom: theme.spacing(1),
        },
        playIcon: {
          height: 38,
          width: 38,
        },
      }));
      
        const classes = useStyles();
        const theme = useTheme();

        const audioTune1 = new Audio('http://soundbible.com/mp3/bells-tibetan-daniel_simon.mp3');
        const audioTune2 = new Audio('http://soundbible.com/mp3/Rain_Inside_House-Mark_DiAngelo-323934112.mp3');
        const audioTune3 = new Audio('http://soundbible.com/mp3/meadowlark_daniel-simion.mp3');
 
        // variable to play audio in loop
        const [playInLoop, setPlayInLoop] = useState(false);
      
        // load audio file on component load
        useEffect(() => {
          audioTune1.load();
          audioTune2.load();
          audioTune3.load();
        }, [])
      
        // set the loop of audio tune
        useEffect(() => {
          audioTune1.loop = playInLoop;
          audioTune2.loop = playInLoop;
          audioTune3.loop = playInLoop;
        }, [playInLoop])
      
        // play audio sound
        const playSound1 = () => {
          audioTune1.play();
        }
        const playSound2 = () => {
          audioTune2.play();
        }
        const playSound3 = () => {
          audioTune3.play();
        }
      
        // pause audio sound
        const pauseSound1 = () => {
          audioTune1.pause();
        }
        const pauseSound2 = () => {
          audioTune2.pause();
        }
        const pauseSound3 = () => {
          audioTune3.pause();
        }
      
        // stop audio sound
        const stopSound1 = () => {
          audioTune1.pause();
          audioTune1.currentTime = 0;
        }
        const stopSound2 = () => {
          audioTune2.pause();
          audioTune2.currentTime = 0;
        }
        const stopSound3 = () => {
          audioTune3.pause();
          audioTune3.currentTime = 0;
        }

            
  return (
    <CardColumns>
      <Card style={{border: '3px solid black', marginTop: '30px', marginLeft: '20px', width: '420px'}}>
        <Card.Img variant="top" src="https://www.snacknation.com/wp-content/uploads/2018/04/neck-rolls.gif" />
        <Card.Body>
          <Card.Title>Neck Rolls</Card.Title>
          <Card.Text>
          Relax and lean your head forward. Slowly roll head in a circle on one side for 10 seconds. Repeat on the other side.

Do this three times in each direction.{" "}
          </Card.Text>
        </Card.Body>
        
      </Card>

      <Card style={{border: '3px solid black', marginTop: '30px', marginLeft: '20px', width: '420px'}}>
        <Card.Img variant="top" src="https://www.snacknation.com/wp-content/uploads/2018/04/seated-abs-twists.gif" />
        <Card.Body>
          <Card.Title>Seated Bicycle Crunches</Card.Title>
          <Card.Text>
          This is the good kind of crunch time. Sit in your chair with your feet flat on the floor. Position your hands behind your head and lift one knee toward the opposite elbow, twisting your body down toward it, then return to the seated, straight-back position.{" "}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <hr style={{border: '1px solid green'}} />
      <Card className={classes.root} style={{border: '3px solid blue', width:'420px', marginLeft: '20px', marginTop: '20px', height: '200px'}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Tibetan Bells
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Large Tibetan Bells ringing in a temple. Could also use for Monastery or Monks.
          </Typography>
        </CardContent>
        <div className="App" style={{paddingLeft: '20px'}}>
 
          <input type="button" className="btn btn-primary mr-2" value="Play" onClick={playSound1}></input>
          <input type="button" className="btn btn-warning mr-2" value="Pause" onClick={pauseSound1}></input>
          <input type="button" className="btn btn-danger mr-2" value="Stop" onClick={stopSound1}></input>
    
          <label><input type="checkbox" checked={playInLoop} onChange={e => setPlayInLoop(e.target.checked)} /> Play in Loop</label>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>

    <Card style={{border: '3px solid black', marginTop: '30px', marginLeft: '20px', width: '420px', height: '420px'}}>
        <Card.Img variant="top" src="https://www.snacknation.com/wp-content/uploads/2018/04/shoulder-stretch.jpg" />
        <Card.Body>
          <Card.Title>Shoulder Stretch</Card.Title>
          <Card.Text>
          Clasp hands together above the head with palms facing up toward the ceiling. Push your arms up, stretching upward.

Hold for 2 to 3 deep breaths.{" "}
          </Card.Text>
        </Card.Body>
        
      </Card>
      
      
      
      <Card style={{border: '3px solid black', marginTop: '30px', marginLeft: '20px', width: '420px', height: '465px'}}>
        <Card.Img variant="top" src="https://www.snacknation.com/wp-content/uploads/2018/04/chair-swivel.gif" />
        <Card.Body>
          <Card.Title>Oblique Twists</Card.Title>
          <Card.Text>
          If you have a swivel chair, you’re in luck. Use its twirl to your advantage with this oblique abs fix. Sitting upright and with the feet hovering over the floor, hold onto the edge of your desk. Next, use the core to swivel the chair from side to side.{" "}
          </Card.Text>
        </Card.Body>
        
      </Card>
    <hr style={{border: '1px solid green', marginTop: '18px'}}/>
      <Card className={classes.root} style={{border: '3px solid blue', width:'420px', marginLeft: '20px', marginTop: '20px', height: '200px'}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Rain Inside House
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            A soothing sound to make you witness the rain inside your soul!!
          </Typography>
        </CardContent>
        <div className="App" style={{paddingLeft: '20px'}}>
 
          <input type="button" className="btn btn-primary mr-2" value="Play" onClick={playSound2}></input>
          <input type="button" className="btn btn-warning mr-2" value="Pause" onClick={pauseSound2}></input>
          <input type="button" className="btn btn-danger mr-2" value="Stop" onClick={stopSound2}></input>
    
          <label><input type="checkbox" checked={playInLoop} onChange={e => setPlayInLoop(e.target.checked)} /> Play in Loop</label>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>

    <Card style={{border: '3px solid black', marginTop: '30px', marginLeft: '20px', width: '420px'}}>
        <Card.Img variant="top" src="https://www.snacknation.com/wp-content/uploads/2018/04/bent-knee-stretch.jpg" />
        <Card.Body>
          <Card.Title>Bent-Knee Stretch</Card.Title>
          <Card.Text>
          Lean back in the chair. Hug one knee at a time, pulling it toward your chest.

Hold for 2 to 3 deep breaths, then switch legs. *This can also be done standing up.{" "}
          </Card.Text>
        </Card.Body>
        
      </Card>
    <Card style={{border: '3px solid black', marginTop: '30px', marginLeft: '20px', width: '420px'}}>
        <Card.Img variant="top" src="https://www.snacknation.com/wp-content/uploads/2018/04/triceps-stretch.jpg" />
        <Card.Body>
          <Card.Title>Triceps Stretch</Card.Title>
          <Card.Text>
          Now, stretch it out! Raise one arm and bend it so that your hand reaches to touch the opposite shoulder blade. (It’s OK if you can’t actually reach it.) Use your other hand and pull the elbow toward your head.

Hold for 2 to 3 deep breaths. Repeat on the other side.{" "}
          </Card.Text>
        </Card.Body>
        
      </Card>

    <hr style={{border: '1px solid green'}}/>
    <Card className={classes.root} style={{border: '3px solid blue', width:'420px', marginLeft: '20px', marginTop: '20px', height: '200px'}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Meadowlark
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          The Meadowlark is a grassland bird that feeds mostly on insects
          </Typography>
        </CardContent>
        <div className="App" style={{paddingLeft: '20px'}}>
 
          <input type="button" className="btn btn-primary mr-2" value="Play" onClick={playSound3}></input>
          <input type="button" className="btn btn-warning mr-2" value="Pause" onClick={pauseSound3}></input>
          <input type="button" className="btn btn-danger mr-2" value="Stop" onClick={stopSound3}></input>
    
          <label><input type="checkbox" checked={playInLoop} onChange={e => setPlayInLoop(e.target.checked)} /> Play in Loop</label>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
    </CardColumns>

    
  );
  
}



function Exercise() {
  return (
    <div>
      <CardDisplay />
      
    </div>
  );
}

export default Exercise;