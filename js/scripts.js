const width = window.innerWidth;
const profile = document.querySelector('.profile')
const bio = document.querySelector('.bio')
const projects = document.querySelector('.projects')
const body = document.querySelector('.body')

if (width <= 1200) {
  profile.classList.add('profileMobile');
  bio.classList.add('bioMobile');
  projects.classList.add('projectsMobile');
  body.classList.add('mobile')
} else {
  profile.classList.remove('profileMobile');
  bio.classList.remove('bioMobile');
  projects.classList.remove('projectsMobile');
};

