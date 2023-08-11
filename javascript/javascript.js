window.addEventListener('load', () => {
  /* Function */
  /**
   * Same as 'document.querySelector' (Idea from jQuery)
   * @param {string} selector selector
   * @returns document.querySelector(selector)
   */
  function $(selector) {
    return document.querySelector(selector);
  }
  /**
   * For media query
   */
  function sideMenu() {
    if (window.innerWidth > 1366) {
      $('body').classList.add('sideMenu');
    } else {
      $('body').classList.remove('sideMenu');
    }
  }

  /* Event Delegation Pattern */
  // window - load
  if (window.T && window.T.config.USER.name) {
    $('#login').style.display = 'none';
    $('#logout').style.display = 'block';
  } else {
    $('#login').style.display = 'block';
    $('#logout').style.display = 'none';
  }

  sideMenu();

  // window - resize
  window.addEventListener('resize', () => {
    sideMenu();
  });

  // window - scroll
  window.addEventListener('scroll', () => {
    $('html').style.setProperty('--scrollRatio', (window.scrollY / (document.body.scrollHeight - window.innerHeight)).toFixed(4));
  });

  // document - keyup
  document.addEventListener('keyup', event => {
    switch (event.key) {
      case 'Escape':
        $('#search').classList.remove('on');
        $('#profile nav').style.display = 'none';
        break;

      default:
        break;
    }
  });

  // body - click
  $('body').addEventListener('click', event => {
    const target = event.target.id;

    switch (target) {
      case 'menu':
        $('body').classList.toggle('sideMenu');
        break;

      case 'profile':
        $('#profile nav').style.display = getComputedStyle($('#profile nav')).display === 'none' ? 'block' : 'none';
        $('#profile').addEventListener('mouseleave', () => {
          $('#profile nav').style.display = 'none';
        });
        break;

      case 'login':
      case 'logout':
        document.location.href = `https://www.tistory.com/auth/${target}?redirectUrl=${encodeURIComponent(window.TistoryBlog.url)}`;
        break;

      case 'search':
        $('#search').classList.toggle('on');
        $('#search input').focus();
        $('header').addEventListener('mouseleave', () => {
          $('#search').classList.remove('on');
        });
        break;

      default:
        break;
    }
  });
});
