import { populateFavourites } from './populateFavourites.js';

const loadFavourites = () => {
  let favouritesData = localStorage.getItem('favourites');
  favouritesData = JSON.parse(favouritesData);
  if (favouritesData != null) {
    favouritesData['data'].forEach(item => {
      $('.starIcon').each(function () {
        const currentIconTitle = $(this).closest('.row').find('.resultsTitle')[0].innerHTML;
        if (currentIconTitle == item.title) {
          $(this).attr('src', '/images/icons/greenStar.png');
        }
      });
    });
    populateFavourites(favouritesData);
  } else {
    favouritesData = { 'data': [] };
    localStorage.setItem('favourites', JSON.stringify(favouritesData));
  }
  return favouritesData;
};

export { loadFavourites };