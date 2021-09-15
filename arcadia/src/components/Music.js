import React, {useState} from 'react';
import Sound from 'react-sound';
import Synthetic from '../Recursos/sound/SyntheticNights.mp3'
import {
    AudioOutlined,
  } from '@ant-design/icons';
const Music = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div>
            <button className="playstop" onClick={() => setIsPlaying(!isPlaying)}>
                {!isPlaying ? 'STOP':'PLAY'}
            </button>
           
           <Sound
                url={Synthetic}
                playStatus={!isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
                volume = "0.25"
            /> 
        </div>
    );
};

export default Music;
