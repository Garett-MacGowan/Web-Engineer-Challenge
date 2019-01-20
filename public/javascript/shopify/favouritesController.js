import { populateFavourites } from './populateFavourites.js';

const favouritesController = (favouritesData) => {
  $('body').on('click', '.starIcon', function () {
    if ($(this).attr('src') == '/images/icons/greenStar.png') {
      $(this).attr('src', '/images/icons/grayStar.png');
      // Remove this item from favorites data
      const itemToRemove = $(this).closest('.row').find('.resultsTitle')[0].innerHTML;
      let newFavouritesData = { 'data': [] };
      favouritesData['data'].forEach(favourite => {
        if (favourite.title != itemToRemove) {
          newFavouritesData['data'].push(favourite);
        }
      });
      favouritesData = newFavouritesData;
      localStorage.setItem('favourites', JSON.stringify(favouritesData));
      populateFavourites(favouritesData);
      // If the star in favourites was clicked, un-greenify the item in the search results
      $('.resultsContainer').find('.starIcon').each(function () {
        if ($(this).attr('src') == '/images/icons/greenStar.png') {
          const resultsTitle = $(this).closest('.row').find('.resultsTitle')[0].innerHTML;
          let unfavouritedFlag = true;
          favouritesData['data'].forEach(favourite => {
            if (favourite.title == resultsTitle) {
              unfavouritedFlag = false;
            }
          });
          if (unfavouritedFlag == true) {
            $(this).attr('src', '/images/icons/grayStar.png');
          }
        }
      });
    } else {
      $(this).attr('src', '/images/icons/greenStar.png');
      // Add this item to favorites data
      let item = {};
      let descriptions = [];
      item['title'] = $(this).closest('.row').find('.resultsTitle')[0].innerHTML;
      $(this).closest('.row').find('li').each(function () {
        descriptions.push({ 'description': $(this)[0].innerHTML });
      });
      item['descriptions'] = descriptions;
      favouritesData['data'].push(item);
      localStorage.setItem('favourites', JSON.stringify(favouritesData));
      populateFavourites(favouritesData);
    }
  });
}

export { favouritesController };