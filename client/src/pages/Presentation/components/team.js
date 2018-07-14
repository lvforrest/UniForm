import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import employees from "../../../assets/images/employees.png";
import team from "../../../assets/images/team.png";


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function Team(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img className="employeeImgTeam" src={team} alt="employee"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h1>Will</h1>
                        <h3>Branding, Experience Design</h3>
                        <h3> Front-end design, React components, logo, constructor pages</h3>
                    </div>
                    <div className="col-6">
                        <h1>Luke</h1>
                        <h3>Back-end functionality</h3>
                        <h3>Front-end logic, state management, form-builder, autofill functionality</h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-6">
                        <h1>Lacie</h1>
                        <h3>Back-end logic</h3>
                        <h3>Passport Login, MongoDB connections, Mongoose ORM</h3>
                    </div>
                    <div className="col-6">
                        <h1>Louis</h1>
                        <h3>Branding, Experience Design</h3>
                        <h3>Front-end design, React components, landing page, constructor pages, presentation</h3>
                    </div>
                </div>
                <br />
            </div>
        </CardContent>
      </Card>
    </div>
  );
}

Team.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Team);