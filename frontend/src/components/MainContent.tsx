import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import MapContainer from './MapContainer';
import SearchResults from './SearchResults';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContent: {
      display: 'flex',
      flexGrow: 1,
      margin: '1em'
    }
  })
);

// there will be switch case logic here to swap out content based on context
// for now just display maps content (contains map and search results list items box)
const MainContent: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContent}>
      <Grid container>
        <Grid item xs={8}>
          <MapContainer />
        </Grid>
        <Grid item xs={4}>
          <SearchResults />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContent;