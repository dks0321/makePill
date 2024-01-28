
history.scrollRestoration = "manual";

const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

//gnb menu
$('.btn-gnb').click(function(){

    if ( $(this).hasClass('on')) {
        lenis.start()
    } else {
        lenis.stop()
    }

    $(this).toggleClass('on');
    $('.gnb-inner').stop().slideToggle()
})

//sc-start 
//position fixed
ScrollTrigger.create({
    trigger:".sc-start ",
    start:"0 10%",
    end:"100% 1%",
    scrub:1,
    toggleClass:{targets:".inner",className:"on"}
})

//text opacity
gsap.to('.sc-start  .group-txt',{
    scrollTrigger:{
        trigger:".sc-start",
        start:"0 0%",
        end:"100% 0%",
        scrub:1,
        //markers:true,
    },
    y:0,
    opacity:0,
})

//sc-idea 
//swiper
const ideaSlide = new Swiper('.sc-idea .swiper',{
    autoplay: {
        delay: 0, //add
        disableOnInteraction: false,
    },
    speed: 8000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 'auto',
})


//bg white
ScrollTrigger.create({
    trigger:".sc-idea",
    start:"0 10%",
    end:"100% 50%",
    scrub:1,
    //markers: "true",
    toggleClass:{targets:"body",className:"white"}
})

ScrollTrigger.create({
    trigger:".sc-culture",
    start:"0 10%",
    end:"100% 0%",
    scrub:1,
    //markers: "true",
     toggleClass:{targets:"body",className:"white"}
})


//sc-project
ScrollTrigger.create({
    trigger:".sc-project",
    start:"0 0%",
    end:"100% 100%",
    scrub:1,
    //markers: "true",
     toggleClass:{targets:".group-video",className:"on"}
})

//out clients swiper
const clientrSlide = new Swiper('.sc-client .swiper', {
    autoplay: {
        delay: 0, //add
        disableOnInteraction: false,
    },
    speed: 2000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 'auto',
})

//sc-award
ScrollTrigger.create({
    trigger:".sc-award",
    start:"0 10%",
    end:"100% 0%",
    scrub:1,
    toggleClass:"on"
})
gsap.to('.sc-award  .group-award',{
    scrollTrigger:{
        trigger:".sc-award",
        start:"0 20%",
        end:"100% 0%",
        scrub:1,
        //markers:true,
    },
    y:100,
})

//sc-sns 
//swiper
gsap.to('.info-area .sns-wrap',20,{
    xPercent:-50,
    ease:'none',
    repeat:-1,
})
//sns-item hover
$('.sns-item').hover(function(){
    $(this).find('.info-area').css('transform', 'translateY(-10%)');

},function(){
    $(this).find('.info-area').css('transform', 'translateY(100%)');
})

//hover btn
gsap.set($('.btn-service .hover span'),{scale:0})
$('.btn-service').mousemove(function(e){
    gsap.to($(this).find('span'),{
        scale:1,
        x:(e.offsetX-$(this).find('.btn-service').width()),
        y:(e.offsetY-$(this).find('.btn-service').height())
    })
    $(this).find('.txt').css('color', '#ffffff');
})
$('.btn-service').mouseleave(function(){
    gsap.to($(this).find('span'),{
        scale:0,
        x:0,
        y:0
    })
    $(this).find('.txt').css('color', '#0f0f0f');
})

//sc-contact
gsap.set('.btn-contact',{ scale:0,})
mousecontact = gsap.to('.btn-contact',{ scale:1,paused:true,})

$(document).mousemove(function(e){
    gsap.to('.custom-cursor',{
        x:e.clientX,
        y:e.clientY
    })
    gsap.to('.btn-contact',{
        x:e.clientX,
        y:e.clientY
    })
})

//contact mouse cursor event
$('.sc-contact .txt-area').hover(function(){
    mousecontact.play()
    $('body').addClass('mousehide');
    gsap.to($(this).find('.headline'),{y:10})
    gsap.to($(this).find('.sub-tit'),{y:-10})
    gsap.to($('.video-area'),{rotation:45})
},function(){
    mousecontact.reverse()
    $('body').removeClass('mousehide');
    gsap.to($(this).find('.headline'),{y:0})
    gsap.to($(this).find('.sub-tit'),{y:0})
    gsap.to($('.video-area'),{rotation:0})
})