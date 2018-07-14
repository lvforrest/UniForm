import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "../Button"

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function PatronManagerTable(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {Object.keys(props.children || {}).map(function(keyName,keyIndex){
            return (
              <TableRow key= {keyName}>
                <TableCell component="th" scope="row">
                  {keyName}
                </TableCell>
                <TableCell>
                  {props.children[keyName]}
                </TableCell>
                <TableCell>
                <a onClick = {() => props.deleteKey(keyName)} children = "Delete"/>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

PatronManagerTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatronManagerTable);
