import { loadFavourites } from './loadFavourites.js';
import { favouritesController } from './favouritesController.js';

window.onload = () => {
  $(document).ready(() => {
    $('.searchField').on('input', function () {
      if (this.value == '') {
        $('.resultsContainer').children().remove();
      }
    });
    // Load existing favorites for the search results
    let favouritesData = loadFavourites();
    // Attach the listener for the starIcons
    favouritesController(favouritesData);
  });
};