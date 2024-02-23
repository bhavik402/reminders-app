import RemindersList from './components/RemindersList';
import './app.css';

export function App() {
	return (
		<>
			<div class="logotitlecontainer">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Microsoft_To-Do_icon.svg/1024px-Microsoft_To-Do_icon.svg.png"
					class="logo"
				/>
				<h1 class="apptitle">Reminders</h1>
			</div>

			<RemindersList />
		</>
	);
}
