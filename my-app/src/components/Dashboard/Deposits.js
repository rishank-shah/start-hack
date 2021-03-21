
import React from 'react';
// import Link1 from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import taskLeft from './../ToDo/ToDo'
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Tasks Left to do !!</Title>
      <Typography component="p" variant="h4">
        8
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2021
      </Typography>
      <div>
        <Link to="/todo">
          View Todo's
        </Link>
      </div>
    </React.Fragment>
  );
}