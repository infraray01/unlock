
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const imageId = urlParams.get('image');
    const unlockButton = document.getElementById('unlockButton');
    const downloadLink = document.getElementById('downloadLink');

    const imageLinks = {
        '1': 'https://motionbox.io/',
        '2': 'https://elements.envato.com/video-templates',
        '3': 'https://pixabay.com/music/'
    };

    unlockButton.addEventListener('click', function() {
        const customLink = 'https://youtube.com/@infraray5615?si=5WN2FYFwjNVNTCbK';
        window.open(customLink, '_blank');
        unlockButton.style.display = 'none';
        downloadLink.href = imageLinks[imageId];
        downloadLink.style.display = 'inline-block';
    });
});
