import clap from './sounds/clap.wav'
import hihat from './sounds/hihat.wav'
import boom from './sounds/boom.wav'
import kick from './sounds/kick.wav'
import openhat from './sounds/openhat.wav'
import ride from './sounds/ride.wav'
import snare from './sounds/snare.wav'
import tink from './sounds/tink.wav'
import tom from './sounds/tom.wav'


const kbData = [
    {
        keyId: '65',
        soundName: 'clap',
        keyLetter: 'A',
        soundSrc: clap
    },
    {
        keyId: '83',
        soundName: 'hihat',
        keyLetter: 'S',
        soundSrc: hihat
    },
    {
        keyId: '68',
        soundName: 'kick',
        keyLetter: 'D',
        soundSrc: kick
    },
    {
        keyId: '70',
        soundName: 'openhat',
        keyLetter: 'F',
        soundSrc: openhat
    },
    {
        keyId: '71',
        soundName: 'boom',
        keyLetter: 'G',
        soundSrc: boom
    },
    {
        keyId: '72',
        soundName: 'ride',
        keyLetter: 'H',
        soundSrc: ride
    },
    {
        keyId: '74',
        soundName: 'snare',
        keyLetter: 'J',
        soundSrc: snare
    },
    {
        keyId: '75',
        soundName: 'tom',
        keyLetter: 'K',
        soundSrc: tom
    },
    {
        keyId: '76',
        soundName: 'tink',
        keyLetter: 'L',
        soundSrc: tink
    },
]

export default kbData;