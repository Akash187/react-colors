import React, { useState, useEffect } from 'react';
import {CSSTransition} from 'react-transition-group';
import styles from '../../style/copyBoxStyle';
import { withStyles } from '@material-ui/core/styles';

const CopyBox = ({classes, color}) => {

  const [show, setShow] = useState();

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
    setTimeout(() => setShow(false), 1500);
  }, []);

  return (
      <div className={classes.copyBox} style={{backgroundColor: `${color}`}}>
        <CSSTransition in={show} timeout={300} className={classes.copyAnimation} classNames="copy" unmountOnExit={true}>
            <div>
              <div className={classes.copiedText}>COPIED!</div>
              <div className={classes.copyColor}>{color}</div>
            </div>
        </CSSTransition>
      </div>
  );
};

export default withStyles(styles)(CopyBox);
