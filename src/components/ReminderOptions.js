import React, { useState } from 'react';
import './ReminderOptions.css';

function ReminderOptions() {
    const [reminders, setReminders] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addReminder = () => {
        setReminders([...reminders, inputValue]);
        setInputValue('');
    };

    const editReminder = (index) => {
        const updatedReminders = reminders.map((reminder, i) => (i === index ? inputValue : reminder));
        setReminders(updatedReminders);
        setInputValue('');
    };

    const deleteReminder = (index) => {
        const updatedReminders = reminders.filter((_, i) => i !== index);
        setReminders(updatedReminders);
    };

    return (
        <div className="ReminderOptions">
            <h2>Reminders:</h2>
            <div className="reminder-list">
                {reminders.map((reminder, index) => (
                    <div key={index}>
                        <span>{reminder}</span>
                        <button onClick={() => setInputValue(reminder)}>Edit</button>
                        <button onClick={() => deleteReminder(index)}>Delete</button>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter reminder text"
            />
            {reminders.includes(inputValue) ? (
                <button onClick={() => editReminder(reminders.indexOf(inputValue))}>Save Edit</button>
            ) : (
                <button onClick={addReminder}>Add</button>
            )}
        </div>
    );
}

export default ReminderOptions;
