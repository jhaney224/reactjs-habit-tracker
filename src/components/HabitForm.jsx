import {useState} from 'react';

// Form for adding/editing habits
function HabitForm({onAddHabit}) {
    const [habitName, setHabitName] = useState([]);
    const handleSubmit = (submitEvent) => {
        submitEvent.preventDefault();

        if (!habitName.trim()) return;

        const newHabit = {
            id: Date.now(),
            name: habitName,
            completedDays: [],
        };

        onAddHabit(newHabit);
        setHabitName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="habitName">Enter a new Habit</label>
            <input name="habitName" type="text" value={habitName} onChange={(submitEvent) => setHabitName(submitEvent.target.value)} />
            <input type="submit" value="Add Habit" />
        </form>
    )
}

export default HabitForm;