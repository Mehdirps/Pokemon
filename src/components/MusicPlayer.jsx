import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

const MusicPlayer = () => {
    const readex = useSelector((state) => state.readex.openReadex);
    const devCard = useSelector((state) => state.devCard.openDevCard);
    const expTeam = useSelector((state) => state.expTeam.open);
    const skillBag = useSelector((state) => state.skillsBag.open);
    const ballDisplay = useSelector((state) => state.ball.display)
    const [open, setOpen] = useState(false);

    const musicList = [
        {
            name: 'Musique 1',
            src: './music/pokemon-1.mp3'
        },
        {
            name: 'Musique 2',
            src: './music/pokemon-2.mp3'
        }
    ]
    const [music, setMusic] = useState(musicList[0]);

    const openPlayer = () => {
        if (open) {
            setOpen(false);
            return;
        }
        setOpen(true);
    }

    useEffect(() => {
        if (readex || devCard || expTeam || skillBag || ballDisplay !== 'ball-off') {
            setOpen(false)
        }
    }, [ballDisplay, devCard, expTeam, readex, skillBag])
    return (
        <section className="music-player">
            <Icon icon="material-symbols:music-video" className='icon' onClick={openPlayer} />
            {
                open ?
                    <div className="music-container">
                        <div className="music">
                            <h3>{music.name}</h3>
                            <div className="container">
                                <audio src={music.src} controls />
                            </div>
                            <div className="other-musics">
                                <h4>Autres musiques</h4>
                                {
                                    musicList.map((otherMusic, id) =>
                                        otherMusic.name !== music.name ?
                                            <p key={id} onClick={() => setMusic(otherMusic)}>{otherMusic.name}</p>
                                            : ''
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    : ''
            }
        </section>
    );
};

export default MusicPlayer;