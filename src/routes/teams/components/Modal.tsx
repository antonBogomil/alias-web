import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import React, {useState} from "react";
import {FormHelperText, TextField} from "@material-ui/core";
import useTranslations from "../../../services/translations";
import {observer} from "mobx-react";

export const AddModal = observer(({open, handleClose, handleAdd, validate}) => {
  // const isValid = validate(teamData.name)
  const [value, setValue] = useState('');

  function handle() {
	handleAdd(value)
	setValue('')
  }

  const t = useTranslations();
  return (
	<Dialog
	  open={open}
	  onClose={handleClose}
	  aria-labelledby="alert-dialog-title"
	  aria-describedby="alert-dialog-description"
	>
	  <DialogTitle id="alert-dialog-title">{t.CREATE_TEAM}</DialogTitle>
	  <DialogContent>
		<DialogContentText id="alert-dialog-description">
		</DialogContentText>
		<TextField
		  id="standard-basic"
		  label={t.TEAM_NAME}
		  // helperText={!isValid && t.ERROR_TEAM_NAME_EXIST}
		  value={value}
		  onChange={(e) => setValue(e.target.value)}/>
	  </DialogContent>
	  <DialogActions>
		<Button onClick={handleClose} color="primary">
		  {t.CANCEL}
		</Button>
		<Button
		  // disabled={!isValid}
		  onClick={handle}
		  color="secondary">
		  {t.OK}
		</Button>
	  </DialogActions>
	</Dialog>
  )
});
