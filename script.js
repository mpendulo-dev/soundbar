const sounds = ['applause', 'boo','gasp','tada','victory','wrong'];

// for each and every sound adda button.
sounds.forEach(sound => {
    // add button.
    const btn = document.createElement('button');
    // add class of btn to the button.
    btn.classList.add('btn');

    // The text of the buttons should be the sounds array which is also the number of buttons when counting the array element6s.
    btn.innerText = sound;
    
    // when user clicks on a button play the sound.
    btn.addEventListener('click', ()=> {

        stopSongs();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

//function that avoid sounds playing over each other
function stopSongs() {

    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
    