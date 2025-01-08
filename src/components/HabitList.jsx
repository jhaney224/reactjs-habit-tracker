import React from 'react';
import HabitItem from './HabitItem';

// Displays the list of habits
function HabitList({ habits, onEditHabit, onDeleteHabit, onToggleDayCompletion }) {  
    return (
      <div>
        <h3>Your Habits</h3>
        <ul>
          {habits.map((habit) => (
            <HabitItem key={habit.id} habit={habit} onEditHabit={onEditHabit} onDeleteHabit={onDeleteHabit} 
            onToggleDayCompletion={onToggleDayCompletion}/>
          ))}
        </ul>
      </div>
    );
}

export default HabitList;