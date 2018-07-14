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



function ManageFormsTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {props.children.map(child => {
            return (
              <TableRow key={child._id}>
                <TableCell component="th" scope="row">
                  {child.filledName}
                </TableCell>
                <TableCell>
                <a href = {`/filled/${child._id}`} children = "View/Update"/>
                </TableCell>
                <TableCell>
                <a onClick = {() => props.onDelete(child._id,child.templateId)} children = "Delete"/>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

ManageFormsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManageFormsTable);
