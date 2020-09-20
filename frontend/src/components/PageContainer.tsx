import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import MainContent from './MainContent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageContainer: {
      display: 'flex',
      flexFlow: 'column',
      height: 'inherit',
      minWidth: '100%',
      minHeight: '100%'
    }
  })
);

const PageContainer: React.FunctionComponent = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.pageContainer}>
      <AppBar />
      <MainContent />
    </div>
  );
};

export default PageContainer;