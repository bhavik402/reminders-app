import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function BasicAccordion({
	remindersList,
	updateStatus,
	deleteReminder,
	updateFlag
}) {
	return (
		<div>
			{remindersList.map((item) => (
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						sx={{
							backgroundColor: item.flag ? 'rgba(242, 208, 164, 0.6)' : ''
						}}
					>
						{item.status === 'COMPLETED' ? (
							<Checkbox
								defaultChecked
								onChange={() => updateStatus(item)}
								color="success"
								sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
							/>
						) : (
							<Checkbox
								onChange={() => updateStatus(item)}
								color="success"
								sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
							/>
						)}
						<div
							className={
								'reminderHeaderTitle ' +
								(item.status === 'COMPLETED' ? 'reminderCompletedTask' : '')
							}
						>
							{item.title}
						</div>
					</AccordionSummary>
					<AccordionDetails>
						{item.notes}
						{item.category}
						{item.priority}

						<div className="reminderDetailActions">
							<Button variant="outlined" onClick={() => updateFlag(item)}>
								{item.flag ? 'UNFLAG' : 'FLAG'}
							</Button>
							<Button variant="contained" color="success" onClick={() => deleteReminder(item)}>
								Edit
							</Button>
							<Button variant="contained" color="error" onClick={() => deleteReminder(item)}>
								Delete
							</Button>
						</div>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
}
