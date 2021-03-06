(() => {
    window.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');
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

        var containerForSponsors = document.querySelector('#box_placeholder #box1');
        var sponsorSlider = `<ul id="sponsorSlider" accordeonck_done="1"> 
<li id="item-143" class="accordeonck item-143 level1 " data-level="1"><span class="accordeonck_outer "><a
        class="accordeonck " href="/1proc-podatku"><img src="/images/banners/baner_mini_1proc_2.jpg"
            alt="1% podatku" align="left"></a></span></li>
<li id="item-473" class="accordeonck item-473 level1 " data-level="1"><span class="accordeonck_outer "><a
        class="accordeonck " href="https://pomagam.pl/org/znajdki" target="_blank"><img
            src="/images/banners/pomagam_wesprzyj.jpg" alt="pomagam.pl" align="left"></a></span></li>
<li id="item-429" class="accordeonck item-429 level1 " data-level="1"><span class="accordeonck_outer "><a
        class="accordeonck " href="https://www.ratujemyzwierzaki.pl/znajdki" target="_blank"><img
            src="/images/banners/ratujemyzwierzaki_wesprzyj1.png" alt="Ratujemy Zwierzaki"
            align="left"></a></span>
</li>
<li id="item-474" class="accordeonck item-474 level1 " data-level="1"><span class="accordeonck_outer "><a
        class="accordeonck "
        href="https://fanimani.pl/sklepy/?beneficiary_type=organization&amp;beneficiary_id=2450"
        target="_blank"><img src="/images/banners/fanimani_wesprzyj.jpg" alt="faniMani" align="left"></a></span>
</li>
<li id="item-494" class="accordeonck item-494 level1 " data-level="1"><span class="accordeonck_outer "><a
        class="accordeonck " href="https://www.instagram.com/fundacja_znajdki/" target="_blank"><img
            src="/images/banners/instagram_logo.jpg" alt="Instagram" align="left"></a></span></li>
<li id="item-200" class="accordeonck item-200 level1 " data-level="1"><span class="accordeonck_outer "><a
        class="accordeonck " href="/dotacja"><img src="/images/banners/Warszawa_projekt_220g.jpg" alt="Dotacja"
            align="left"></a></span></li>
<div class="moduletable">

<h6>Wsparcie poprzez paypal</h6>

<div id="osdonatestatic">
    <form class="osdonate-form" id="osdonate-form" action="https://www.paypal.com/cgi-bin/webscr" method="post"
        target="paypal">
        <input type="hidden" name="cmd" value="_donations">
        <input type="hidden" name="business" value="przytulisko.jb@o2.pl">
        <input type="hidden" name="return" value="http://znajdki.pl/?Itemid=http://znajdki.pl">
        <input type="hidden" name="undefined_quantity" value="0">
        <input type="hidden" name="item_name" value="Darowizna dla Fundacji Znajdki przytulisko k/Radzymina">
        <input type="hidden" name="amount" value="">
        <input type="hidden" name="currency_code" value="PLN">
        <input type="hidden" name="rm" value="2">
        <input type="hidden" name="charset" value="utf-8">
        <input type="hidden" name="no_shipping" value="1">
        <input type="hidden" name="image_url" value="http://znajdki.pl/http://znajdki.pl">
        <input type="hidden" name="cancel_return" value="http://znajdki.pl/?Itemid=http://znajdki.pl">
        <input type="hidden" name="no_note" value="0">
        <input type="image" src="https://www.paypal.com/pl_PL/i/btn/btn_donateCC_LG.gif" name="submit"
            alt="PayPal secure payments.">
        <input type="hidden" name="lc" value="US">
    </form>
</div>

</div>
</ul>`

        containerForSponsors.innerHTML = sponsorSlider;

        // menuMobile
        const menuTrigger = document.getElementById('mobileMenuTrigger');
        const menu = document.getElementById('menuAlek');
        let flagMenu = false;
        menuTrigger.addEventListener('click', () => {
            if (flagMenu === false) {
                flagMenu = true;
                menuTrigger.innerHTML = 'Ukryj';
                menu.style.right = '0px';
            } else {
                flagMenu = false;
                menuTrigger.innerHTML = 'Menu';
                menu.style.right = '-1000px';
            }
        })
    });


})()