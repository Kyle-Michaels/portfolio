const width = window.innerWidth;
const profile = document.querySelector('.profile')
const bio = document.querySelector('.bio')

if (width <= 1200) {
  profile.classList.add('profileMobile');
  bio.classList.add('bioMobile');
} else {
  profile.classList.remove('profileMobile');
  bio.classList.remove('bioMobile');
};

