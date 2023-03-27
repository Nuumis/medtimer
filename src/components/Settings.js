import React, { useState } from 'react';
import './Settings.css';

function Settings() {
    const [duration, setDuration] = useState(10);
    const [sound, setSound] = useState('');
    const [reminderEnabled, setReminderEnabled] = useState(false);
    const [reminderTime, setReminderTime] = useState('');

    const saveSettings = () => {
        // Save settings in the state of your parent component or in a global state management system (e.g., Redux or Context API)
        console.log('Settings saved:', { duration, sound, reminderEnabled, reminderTime });
    };

    return (
        <div className="Settings">
            <h2>Settings:</h2>

            <div className="setting-section">
                <h3>Meditation Duration:</h3>
                <input
                    type="number"
                    min="1"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Duration (minutes)"
                />
            </div>

            <div className="setting-section">
                <h3>Meditation Sounds:</h3>
                <select value={sound} onChange={(e) => setSound(e.target.value)}>
                    <option value="">Select a sound</option>
                    {/* Replace these options with actual sound options */}
                    <option value="sound1">Sound 1</option>
                    <option value="sound2">Sound 2</option>
                    <option value="sound3">Sound 3</option>
                </select>
            </div>

            <div className="setting-section">
                <h3>Reminder Settings:</h3>
                <label>
                    <input
                        type="checkbox"
                        checked={reminderEnabled}
                        onChange={(e) => setReminderEnabled(e.target.checked)}
                    />
                    Enable daily reminders
                </label>
                <input
                    type="time"
                    value={reminderTime}
                    onChange={(e) => setReminderTime(e.target.value)}
                    disabled={!reminderEnabled}
                />
            </div>

            <button onClick={saveSettings}>Save Settings</button>
        </div>
    );
}

export default Settings;
