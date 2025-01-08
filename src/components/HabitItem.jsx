import React from "react";
import '../App.css';

// Individual habit with edit/delete options
function HabitItem({habit, onEditHabit, onDeleteHabit, onToggleDayCompletion}) {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const editHabit = () => {
        const newName = prompt(`Edit habit "${habit.name}" to:`, habit.name);
        if (newName) onEditHabit({ ...habit, name: newName });
    };

    const deleteHabit = () => {
        onDeleteHabit(habit);
    };

    const handleCheckboxChange = (day) => {
        onToggleDayCompletion(habit.id, day);
    };

    return (
        <li>
            <div>
                <p>Name: {habit.name}</p>
                <p>Date Created: {new Date(habit.id).toLocaleString()}</p>
                <p>Mark Days Completed:</p>
                <div>
                    {
                        weekdays.map((day, index) => {
                            const dayNumber = index + 1;
                            const isCompleted = habit.completedDays.includes(dayNumber);

                            return (
                                <label key={dayNumber}>
                                    <input type="checkbox" checked={isCompleted} onChange={() => handleCheckboxChange(dayNumber)}/>
                                    {day}
                                </label>
                            );
                        })
                    }
                </div>
            </div>

            <button onClick={editHabit}>Edit Habit</button>
            <button onClick={deleteHabit}>Delete Habit</button>
        </li>
    )
}

export default HabitItem;