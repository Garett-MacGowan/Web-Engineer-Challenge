const populateFavourites = (favourites) => {
  $('.favouritesResultsContainer').find('.row').remove();
  favourites['data'].forEach(favourite => {
    $('.favouritesResultsContainer').append(
      $('<div/>', { class: "row" }).append(
        $('<div/>', { class: "col-4" }).append(
          $('<div/>', { class: "d-flex" }).append(
            $('<div/>', { class: "starIconContainer" }).append(
              $('<img/>', { src: "/images/icons/greenStar.png", class: "starIcon"})
            ),
            $('<div/>', { class: "resultsTitle"}).html(favourite.title)
          )
        ),
        $('<div/>', { class: "col-8" }).append(
          $('<ul/>').append(
            () => {
              let html = '';
              favourite.descriptions.forEach(description => {
                html += `<li>${description['description']}</li>`;
              })
              return html;
            }
          )
        )
      ));
  });
};

export { populateFavourites };