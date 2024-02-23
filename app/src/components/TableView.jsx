import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

export const TableView = ({ remindersList, handleChange, deleteReminder }) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell></TableCell>
						<TableCell>Title</TableCell>
						<TableCell>Notes</TableCell>
						<TableCell>Flag</TableCell>
						<TableCell>Category</TableCell>
						<TableCell>Priority</TableCell>
						<TableCell>Tags</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{remindersList.map((item) => (
						<TableRow
							class="tablerow"
							key={item.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell>
								{item.status === 'COMPLETED' ? (
									<Checkbox
										defaultChecked
										onChange={() => handleChange(item)}
										sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
									/>
								) : (
									<Checkbox
										onChange={() => handleChange(item)}
										sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
									/>
								)}
							</TableCell>
							<TableCell>{item.title}</TableCell>
							<TableCell>{item.notes}</TableCell>
							<TableCell>{item.flag ? `🚩` : ''}</TableCell>
							<TableCell>{item.category}</TableCell>
							<TableCell>{item.priority}</TableCell>
							<TableCell>{item.tags.map((t) => `${t},`)}</TableCell>
							<TableCell>
								<Button
									variant="outlined"
									color="error"
									class="deletebutton"
									onClick={() => deleteReminder(item)}
								>
									Delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
