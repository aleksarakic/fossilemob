/**
* Template Name: Gp
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
const { Tolgee, InContextTools, FormatSimple, BackendFetch } = window['@tolgee/web'];

(async function() {
  "use strict";

  const tg = Tolgee()
  .use(InContextTools())
  .use(FormatSimple())
  .use(BackendFetch())
  .init({
    apiKey: 'tgpak_gy4tox3hmzwtgylqn4zdo3bwonrhc3djob3hk5legnvgkolk',
    apiUrl: 'https://app.tolgee.io',
    defaultLanguage: 'en',
    observerType: 'text',
    observerOptions: { inputPrefix: '{{', inputSuffix: '}}' }
  });
  tg.run();
  // await tg.changeLanguage('de-DE');

  jQuery(document).ready(function () {
  jQuery("#nanogallery").nanogallery2({
    items:[
      // album 1
      {
          src:   'maribor1.jpeg',        // image url
          srct:  'maribor1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465',       // thumbnail url
          title: 'Maribor',   // item title
          ID: 1,                       // item ID
          kind: 'album'                // item kind
      },
      { src: 'maribor0.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'maribor0.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'Before', ID: 10, albumID: 1},
      { src: 'maribor1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'maribor1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'After', ID: 11, albumID: 1},
      { src: 'maribor2.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'maribor3.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'After', ID: 12, albumID: 1},
      { src: 'maribor3.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'maribor3.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'After', ID: 13, albumID: 1},
      { src: 'maribor4.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'maribor4.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'After', ID: 14, albumID: 1},
      { src: 't6.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 't6.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'Toalet', ID: 31, albumID: 1},
      { src: 'https://www.youtube.com/watch?v=L4SC2ZgYh4M', title: 'Interior', albumID: 1 },

      // yards
      { src: 'yard1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'yard1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'Yards', ID: 2, kind: 'album'},
      { src: 'yard1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'yard1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 18, albumID: 2},
      { src: 'yard2.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'yard2.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 19, albumID: 2},
      { src: 'enterior4a.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'enterior4a.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'Lamp after', ID: 17, albumID: 2},

      // Fences
      { src: 'f.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'f.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'Fences', ID: 3, kind: 'album'},
      { src: 'f.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'f.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 20, albumID: 3},
      { src: 'f2.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'f2.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 21, albumID: 3},
      { src: 'f3.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'f3.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 22, albumID: 3},

      // Toalets
      { src: 't6.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 't6.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'Toalets', ID: 4, kind: 'album'},
      { src: 't1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 't1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 23, albumID: 4},
      { src: 't2.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 't2.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 24, albumID: 4},
      { src: 't3.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 't3.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 25, albumID: 4},
      { src: 't4.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 't4.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 26, albumID: 4},
      { src: 't5.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 't5.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 27, albumID: 4},
      { src: 't6.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 't6.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 28, albumID: 4},

      // stairs
      { src: 's1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 's1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'Stairs', ID: 5, kind: 'album'},
      { src: 's1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 's1.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 15, albumID: 5},
      { src: 's2.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 's2.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 16, albumID: 5},
      { src: 's3.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 's3.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: '', ID: 17, albumID: 5},


      // Various
      { src: 'enterior4a.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'enterior4a.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'Various', ID: 6, kind: 'album'},
      { src: 'enterior4.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'enterior4.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'Before', ID: 29, albumID: 6},
      { src: 'enterior4a.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', srct: 'enterior4a.jpeg?alt=media&token=d548a352-6c08-4c36-aa85-0f3a52f6b465', title: 'After', ID: 30, albumID: 6},
    ],
    thumbnailWidth:  800,
    thumbnailHeight: 400,
    itemsBaseURL:    'https://firebasestorage.googleapis.com/v0/b/rrconstructions-74fb5.appspot.com/o/',
    locationHash: false
  });
});

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }


  let options = [
    {
      text: 'English',
      value: 'en'
    },
    {
      text: 'Español',
      value: 'es-ES'
    }
  ];
    
 // {
   //   text: 'Deutsch',
     // value: 'de-DE'
    // },

  const select_menu = document.getElementById("selectpicker");
  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    select_menu.options[i] = new Option(option.text, option.value);
  }


  window.handleChange = async function(e) {
    await tg.changeLanguage(e.value);
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()
