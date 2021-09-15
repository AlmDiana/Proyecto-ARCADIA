import React, {useState} from 'react';
import { Card,Image,Carousel   } from 'antd';
import Sound from 'react-sound';
import { Link, animateScroll as scroll } from "react-scroll";
import Disney from '../Recursos/rapunzel/a1.ogg'
import Disney2 from '../Recursos/rapunzel/a2.ogg'
import r1 from '../Recursos/rapunzel/1.png'
import r2 from '../Recursos/rapunzel/2.png'
import r3 from '../Recursos/rapunzel/3.png'
import r4 from '../Recursos/rapunzel/4.png'
import r5 from '../Recursos/rapunzel/5.png'
import r6 from '../Recursos/rapunzel/6.png'
import r7 from '../Recursos/rapunzel/7.png'
import r8 from '../Recursos/rapunzel/8.png'
import r9 from '../Recursos/rapunzel/9.png'
import r10 from '../Recursos/rapunzel/10.png'
import r11 from '../Recursos/rapunzel/11.png'
import r12 from '../Recursos/rapunzel/12.png'
import r13 from '../Recursos/rapunzel/13.png'
import r14 from '../Recursos/rapunzel/14.png'
import r15 from '../Recursos/rapunzel/15.png'
import r16 from '../Recursos/rapunzel/16.png'
import r17 from '../Recursos/rapunzel/17.png'
import {
    RightCircleOutlined,
  } from '@ant-design/icons';

const JuegoEduC1 = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div>
            {/*Asistente*/}
            <button className="playstop" onClick={() => setIsPlaying(!isPlaying)}>
                            {!isPlaying ? 'STOP':'PLAY'}
                        </button>
                    <Sound
                        url={Disney}
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={300}
                        onLoading={handleSongLoading}
                        onPlaying={handleSongPlaying}
                        onFinishedPlaying={handleSongFinishedPlaying}
                    />
            
            <div className="container_selecarcade">
                <img id="r0" src={r1}></img>   
                <img id="r1" src={r2}></img>
                <img id="r2" src={r3}></img>
                <img id="r3" src={r4}></img>
                <img id="r4" src={r5}></img>
                <img id="r5" src={r6}></img>
                <img id="r6" src={r7}></img>
            </div>    
    </div>
    );
};

export default JuegoEduC1;