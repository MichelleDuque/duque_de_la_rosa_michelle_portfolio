(() => {

gsap.registerPlugin(ScrollTrigger);



  
  gsap.utils.toArray(".box-images").forEach((section, e) => {
    const wrapperImages = section.querySelector(".wrapper");
    const [x, xEnd] =
    e % 2 ?
    ["100%", (wrapperImages.scrollWidth - section.offsetWidth) * -1] :
    [wrapperImages.scrollWidth * -1, 0];
    gsap.fromTo(
    wrapperImages,
    { x },
    {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.3 } });



  });

})();