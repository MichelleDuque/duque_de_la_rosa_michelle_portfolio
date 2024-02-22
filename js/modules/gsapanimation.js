export function gsapanimation(){ 

    gsap.fromTo('main', {
        y: 35,
        opacity: 0,
      },
      {
      delay: 0.5, 
      duration: 1, 
      y: 0,
      opacity: 1,
      ease: 'power2.easeOut',
      stagger: {
        from: 'start', 
        amount: 0.5, 
      },
    })

}