import React, {useState} from 'react';
import './Settings.css';
import muteVolumeImg from './images/mute-volume.png';
import halfVolumeImg from './images/half-volume.png';
import maxVolumeImg from './images/max-volume.png';

function Settings() {
  const [volume, setVolume] = useState(50);
  const [voice, setVoice] = useState('male');
  const [textSize, setTextSize] = useState(1);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };
  const handleVoiceChange = (selectedVoice) => {
    setVoice(selectedVoice);
  };
  const handleTextSizeChange = (e) => {
    setTextSize(e.target.value);
  };
  const resetSettings = () => {
    setVolume(50);
    setVoice('male');
    setTextSize(16);
  };

  return (
  <div className="Settings-Wrapper">
    <div className="Settings">
      <h2>Settings</h2>

        <label>
          Volume:
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
          />
        </label>
        <div className="volume-images">
          <img src={muteVolumeImg} alt="Mute Volume" className="volume-icon"/>
          <img src={halfVolumeImg} alt="Half Volume" className="volume-icon"/>
          <img src={maxVolumeImg} alt="Max Volume" className="volume-icon"/>
        </div>
        <span className="volume-value">{volume}</span> {}

        <label>Text-to-Speech Voice:</label>
        <div className="tts-buttons">
          <button
            onClick={() => handleVoiceChange('male')}
            className={`tts-button ${voice === 'male' ? 'active' : ''}`}
          >
            Male 
          </button>
          <button
          onClick={() => handleVoiceChange('female')}
          className={`tts-button ${voice === 'female' ? 'active' : ''}`}
          >
            Female 
          </button>
        </div>


        <label>
          Text Size:
          <input
            type="range"
            min="12"
            max="36"
            value={textSize}
            onChange={handleTextSizeChange}
          />
        </label>
        <div className="text-size-indicators">
          <span className="small-abc">ABC</span>
          <span className="big-abc">ABC</span>
        </div>
        <span className="text-size-value">{textSize}px</span> {}
      </div>
      <button className="reset-button" onClick={resetSettings}>
        Reset to Default
      </button>
    </div>
    );
  }

export default Settings;
