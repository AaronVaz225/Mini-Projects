const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    //#TODO: Don't think its working on fakn safari
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); //Magic
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.play();
        };
    } catch (error) {
        console.log(error)
    }
}


button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();