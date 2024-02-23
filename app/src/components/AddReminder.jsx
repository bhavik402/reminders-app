import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddReminder = () => {
	return (
		<div class="logotitlecontainer">
			<TextField id="outlined-basic" label="Outlined" variant="outlined" />
			<Button variant="contained" class="addbutton">
				ADD
			</Button>
		</div>
	);
};

export default AddReminder;
