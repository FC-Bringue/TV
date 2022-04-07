import React from 'react';
import '../style/ComponentRight.css';

function CurrentMusic() {
    return ( 
        <div className='CurrentMusic bg-white p-2 d-flex align-items-center '>
            <div className='d-inline CurentMusicCoverParent'>
                <img className='CurentMusicCover' src='/Images/mj.png' alt='mj'/>
            </div>
            <div className='d-inline'>
                <p className='m-0 px-5'>
                    <h5 className='m-0'>Beat it</h5>
                    Michael Jackson

                </p>
            </div>
            <div className='d-inline ms-auto playedParent'>
                <img className='played' src='/Images/played.png' alt='played'/>
            </div>
        </div>

    );
}

export default CurrentMusic;