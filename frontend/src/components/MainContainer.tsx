import React from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from "./AppBar";
import MainContent from "./MainContent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 'inherit',
      width: '100%'
    }
  })
);

const MainContainer: React.FunctionComponent = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar />
      <MainContent />
    </div>
  );
};

export default MainContainer;