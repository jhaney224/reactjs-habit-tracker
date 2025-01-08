import './App.css'
import HabitList from './components/HabitList.jsx'
import HabitForm from './components/HabitForm.jsx'
import useLocalStorage from './hooks/useLocalStorage.jsx';

function App() {
  const [habits, setHabits] = useLocalStorage('habits', []);

  const editHabit = (habitToEdit) => {
    const updatedHabits = habits.map((habit) => habit.id === habitToEdit.id ? { ...habit, name: habitToEdit.name } : habit);
    setHabits(updatedHabits);
  };

  const deleteHabit = (habitToDelete) => {
    const confirmDeletion = confirm("Please confirm you'd like to delete the habit '" + habitToDelete.name + "'.");
    if (confirmDeletion) {
      const updatedHabits = habits.filter((habit) => habit.id !== habitToDelete.id);
      setHabits(updatedHabits);
    }
  };

  const toggleDayCompletion = (habitId, day) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === habitId) {
        if (habit.completedDays.includes(day)) 
          return { ...habit, completedDays: habit.completedDays.filter((completedDay) => completedDay !== day) };
        else return { ...habit, completedDays: [...habit.completedDays, day] };
      }

      return habit;
    });

    setHabits(updatedHabits);
  };

  return (
    <div>
      <h1>Habit Tracker</h1>

      <HabitForm onAddHabit={(habit) => setHabits([...habits, habit])}></HabitForm>
      <HabitList habits={habits} onEditHabit={editHabit} onDeleteHabit={deleteHabit} onToggleDayCompletion={toggleDayCompletion}></HabitList>
    </div>
  )
}

export default App
