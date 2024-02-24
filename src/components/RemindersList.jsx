import { useEffect } from 'preact/hooks';
import { signal } from '@preact/signals';
import BasicAccordion from './AccordianList';
const reminders = signal([]);

const RemindersList = () => {
	const baseURL = 'http://localhost:8452';
	console.log('COMPONENT: RemindersList');

	const getReminders = async () => {
		const response = await fetch(`${baseURL}/v1/reminders/`);
		const r = await response.json();
		console.log(r);
		reminders.value = r;
	};

	useEffect(async () => {
		getReminders();
	}, []);

	const deleteReminder = async (item) => {
		console.log('DELETE ITEM: ' + item);
		try {
			const response = await fetch(`${baseURL}/v1/reminders/${item.id}`, {
				method: 'DELETE'
			});
			console.log(response);
			getReminders();
		} catch (error) {
			console.log(error);
		}
	};

	const updateStatus = async (item) => {
		console.log(item);
		await fetch(`${baseURL}/v1/reminders/status/${item.id}`, { method: 'PUT' });
		getReminders();
	};

	const updateFlag = async (item) => {
		console.log(item);
		await fetch(`${baseURL}/v1/reminders/flag/${item.id}`, { method: 'PUT' });
		getReminders();
	};

	return (
		<BasicAccordion
			remindersList={reminders.value}
			updateStatus={updateStatus}
			deleteReminder={deleteReminder}
			updateFlag={updateFlag}
		/>
	);
};

export default RemindersList;
