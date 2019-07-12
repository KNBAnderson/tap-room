import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import beer from './assests/beer.jpg';
import PropTypes from 'prop-types';
import AdminKeg from './AdminKeg';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 350,
    margin: 8,
    fontFamily: 'Raleway', 
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
  
}));

function Keg(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title= {props.name}
        subheader= {`${props.type} | ${props.ABV}% ABV`}
      />
      <CardMedia
        className={classes.media}
        image={beer}
        title={`A picture of ${props.type}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
        <Typography paragraph className="bottom">
          <br/>
          {props.isAdminActive ? <AdminKeg/>: <div>${props.price}</div>}
        </Typography>
      </CardContent>
    </Card>
    );
}

Keg.propTypes = {
  isAdminActive: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  ABV: PropTypes.string,
  price: PropTypes.string,
  volume: PropTypes.string,
  key: PropTypes.string
}

export default Keg;