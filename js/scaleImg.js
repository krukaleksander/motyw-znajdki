(() => {
    //part with is changing size of slider image
    const resizeFn = () => {
        const imgWidth = window.innerWidth * 0.8;
        const imgHeightFactor = 0.4;
        const imgGoodHeight = imgWidth * imgHeightFactor;
        const imgContainer = document.querySelector('.slides_container');
        imgContainer.style.height = `${imgGoodHeight}px`;
    };
    resizeFn();
    window.addEventListener('resize', resizeFn);


    // this part change arrows

    var arrowLeft = document.querySelector('.prev');
    var arrowRight = document.querySelector('.next');
    arrowLeft.innerText = '<';
    arrowRight.innerText = '>';

})()