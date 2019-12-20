import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: 'relative'
    }
  },
  addButton: {
    position: 'absolute',
    right: '5%',
    bottom: '5%'
  }
}));

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState('');

  const newData = {
    category: category,
    name: name,
    value: value
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleValueChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(newData);
    handleClose();
  };

  return (
    <div>
      <div className={classes.root}>
        <Fab
          className={classes.addButton}
          color="primary"
          aria-label="add"
          onClick={handleOpen}
        >
          <AddIcon />
        </Fab>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Dodaj wpis</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Wypełnij pola aby dodać nowy wpis
          </DialogContentText>
          <TextField
            id="outlined-name1"
            label="Kategoria"
            value={category}
            onChange={handleCategoryChange}
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <TextField
            id="outlined-name2"
            label="Nazwa"
            value={name}
            onChange={handleNameChange}
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <TextField
            id="outlined-name3"
            label="Kwota"
            value={value}
            onChange={handleValueChange}
            variant="outlined"
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
