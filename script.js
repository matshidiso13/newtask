
    let video = document.getElementById("myVideo");

    function playVideo() {
        video.play();
    }

    function pauseVideo() {
        video.pause();
    }

    function restartVideo() {
        video.currentTime = 0;
        video.play();
    }
