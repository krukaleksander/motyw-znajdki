(() => {
    var imgWidth = window.innerWidth * 0.8;
    var imgHeightFactor = 0.4;
    var imgGoodHeight = imgWidth * imgHeightFactor;
    var imgContainer = document.querySelector('.slides_container');
    imgContainer.style.height = `${imgGoodHeight}px`;

})()