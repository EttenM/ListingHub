	

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
      document.querySelector(".header-inner").classList.toggle("open");
      document.querySelector(".intro-wrapper").classList.toggle("open");

  })
  })

  window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.up_btn');
    scroll.classList.toggle("active", window.scrollY>500)
  })
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".up_btn").addEventListener("click", function() {
      window.scroll({
        top:0,
        behavior: 'smooth'
    })

  })
  })
  
  

