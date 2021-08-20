const path = require('path'); 
const sound = require('sound-play');

const filePath = path.join(__dirname, "audio-ya.mp3");

const callback = () => {
    sound.play(filePath);
};

if (process.argv[2] === '-P') {
    callback();
}

module.exports = callback;