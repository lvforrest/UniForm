import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

let id = 0;
function createData(name, button1, button2, button3 ) {
  id += 1;
  return { id, name, button1, button2, button3 };
}

const data = [
  createData('Form 1', 'View', 'Edit', 'Delete'),
  createData('Form 2', 'View', 'Edit', 'Delete'),
  createData('Form 3', 'View', 'Edit', 'Delete'),
];

function ManageFormsTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell>
                View
                </TableCell>
                <TableCell>
                Update
                </TableCell>
                <TableCell>
                Delete
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