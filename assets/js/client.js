console.log('Client Side Code Running')

var play_button = document.getElementById('play');

if (typeof(play_button) != 'undefined' && play_button != null)
{
    play_button.onclick = function() {
        console.log('Button Was Clicked');
        window.location.href = "./thaigame";
    }
}
