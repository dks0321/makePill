$('.sc-start .group-txt .evt-txt').mouseover(function(){
    $('body').addClass('overlay')
})
$('.sc-start .group-txt .evt-txt').mouseleave(function(){
    $('body').removeClass('overlay')
})


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
    // $('body').toggleClass('hidden')
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

// $('.project-item').hover(function(){
//     gsap.from('.sc-project .work-box > *',{
//         scrollTrigger:{
//             trigger:".sc-project .work-boxt",
//             start:"0 90%",
//             end:"100% 0%",
//             // markers:true,
//         },
//         opacity:1,
//         stagger:0.1,
//     })
// },function(){})


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
    //markers: "true",
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


//custom cursor

// let mouseCursor = document.querySelector(".custom-cursor");
//   //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
//   window.addEventListener("scroll", cursor);
//   window.addEventListener("mousemove", cursor);

//   // 초기 커서 위치 설정
// cursor({ clientX: 0, clientY: 0 });

//   //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
//   function cursor(e) {
//         mouseCursor.style.left = e.clientX + "px";
//         mouseCursor.style.top = e.pageY + "px";
//     }






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

//sc-project hover
// gsap.set($('.btn-project .hover span'),{scale:0})
// gsap.set($('.btn-project .txt'),{scale:0})

// $('.project-item').mousemove(function(e){
//     gsap.to($(this).parent().siblings().find('.hover span'),{
//         scale:1,
//         x:(e.offsetX-$(this).width()),
//         y:(e.offsetY-$(this).height())
//     })
//     gsap.to('.btn-project  .txt',{
//         scale:1,
//         x:(e.offsetX-$(this).width()),
//         y:(e.offsetY-$(this).height())
//     })
// })
// $('.project-item').mouseleave(function(){
//     gsap.to($(this).parent().siblings().find('.hover span'),{
//         scale:0,
//         x:0,
//         y:0
//     })
//     gsap.to('.btn-project  .txt',{
//         scale:0,
//         x:0,
//         y:0
//     })
// })


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

$('.sc-contact').hover(function(){
    mousecontact.play()
    $('body').addClass('mousehide');
},function(){
    mousecontact.reverse()
    $('body').removeClass('mousehide');
})

$('.txt-area').mousemove(function(e){
    gsap.to($(this).find('.headline'),{y:10})
    gsap.to($(this).find('.sub-tit'),{y:-10})
    gsap.to($('.video-grea'),{rotation:45})
    
})
$('.txt-area').mouseleave(function(){
    gsap.to($(this).find('.headline'),{y:0})
    gsap.to($(this).find('.sub-tit'),{y:0})
    gsap.to($('.video-grea'),{rotation:0})
   
})