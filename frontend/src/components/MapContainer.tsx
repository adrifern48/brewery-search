import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mapContainer: {
      
    }
  })
);

const MapContainer: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <h1>Map Container</h1>
    </div>
  );
};

export default MapContainer;