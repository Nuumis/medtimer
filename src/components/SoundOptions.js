import React, { useState } from 'react';
import './SoundOptions.css';

const soundList = [
    { id: 1, name: 'Sound 1', src: 'path/to/sound1.mp3' },
    { id: 2, name: 'Sound 2', src: 'path/to/sound2.mp3' },
    { id: 3, name: 'Sound 3', src: 'path/to/sound3.mp3' },
];

function SoundOptions() {
    const [selectedSound, setSelectedSound] = useState(soundList[0]);

    const handleSoundSelection = (sound) => {
        setSelectedSound(sound);
    };

    return (
        <div className="SoundOptions">
            <h2>Choose a Sound:</h2>
            <div className="sound-icons">
                {soundList.map((sound) => (
                    <button
                        key={sound.id}
                        className={selectedSound.id === sound.id ? 'selected' : ''}
                        onClick={() => handleSoundSelection(sound)}
                    >
                        {sound.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SoundOptions;
