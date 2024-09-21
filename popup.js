document.getElementById('setSpeedBtn').addEventListener('click', function () {
    let speed = parseFloat(document.getElementById('speedInput').value);
    if (speed) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: (s) => {
                    let video = document.querySelector('video');
                    if (video) {
                        video.playbackRate = s;
                    } else {
                        alert('No video found on this page!');
                    }
                },
                args: [speed]
            });
        });
    }
});
