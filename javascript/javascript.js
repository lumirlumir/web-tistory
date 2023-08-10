/* Variables */
const body = document.querySelector('body');
const header = document.querySelector('#wrap header');
const menu = document.querySelector('#wrap header .util .menu');
const profile = document.querySelector('#wrap header .util .profile');
const search = document.querySelector('#wrap header .util .search');
const bodyClass = body.classList;
const searchClass = search.classList;

/* Event */
// window - setProperty - scrollY progress
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty(
    '--scrollRatio',
    (
      window.scrollY /
      (document.body.scrollHeight - window.innerHeight)
    ).toFixed(4),
  );
});

// window - Media Query
function sideMenu() {
  if (window.innerWidth > 1366) {
    bodyClass.add('sideMenu');
  } else {
    bodyClass.remove('sideMenu');
  }
}
window.addEventListener('resize', sideMenu);
document.addEventListener('DOMContentLoaded', sideMenu);

// #wrap header
header.addEventListener('mouseleave', () => {
  searchClass.remove('on');
});

// #wrap header .util .menu
menu.addEventListener('click', () => {
  if (bodyClass.contains('sideMenu')) {
    bodyClass.remove('sideMenu');
  } else {
    bodyClass.add('sideMenu');
  }
});

// #wrap header .util .profile
document.addEventListener('DOMContentLoaded', () => {
  if (window.T && window.T.config.USER.name) {
    profile.querySelector('.login').style.display = 'none';
    profile.querySelector('.logout').style.display = 'block';
  } else {
    profile.querySelector('.login').style.display = 'block';
    profile.querySelector('.logout').style.display = 'none';
  }
});
profile.addEventListener('click', () => {
  if (getComputedStyle(profile.querySelector('nav')).display === 'none') {
    profile.querySelector('nav').style.display = 'block';
  } else {
    profile.querySelector('nav').style.display = 'none';
  }
});
profile.addEventListener('mouseleave', () => {
  profile.querySelector('nav').style.display = 'none';
});
profile.querySelector('.login').addEventListener('click', () => {
  document.location.href = `https://www.tistory.com/auth/login?redirectUrl=${encodeURIComponent(
    window.TistoryBlog.url,
  )}`;
});
profile.querySelector('.logout').addEventListener('click', () => {
  document.location.href = `https://www.tistory.com/auth/logout?redirectUrl=${encodeURIComponent(
    window.TistoryBlog.url,
  )}`;
});

// #wrap header .util .search
search.addEventListener('click', () => {
  if (!searchClass.contains('on')) {
    searchClass.add('on');
    search.querySelector('input').focus();
  }
});

// Keyup ESC
document.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    searchClass.remove('on');
    profile.querySelector('nav').style.display = 'none';
    document
      .querySelector('.comment-list ul li .author-meta .control .link')
      .removeAttribute('style');
  }
});

// $(document).on("click", ".comments .comment-list ul li .author-meta .control button", function(){
//   if ( $(this).siblings(".link").is(":hidden") ){
//     $(".comments .link").removeAttr("style");
//     $(this).siblings(".link").show();
//   } else {
//     $(this).siblings(".link").hide();
//   }
// });
