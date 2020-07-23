const requestURL = './data/rental.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(rentalObject) {
    const rentalDetails = rentalObject['rentals'];
    const rentalTable = document.querySelector('#rentalTable');
    rentalTable.innerHTML = '';
    let rentalTableData = '<table class="rentalTab"><tbody><tr><th class="rentalHeader tableColor" colspan="7">'
                        + 'Max Persons and Price Chart (includes Tax)</th></tr>'
                        + '<tr><th colspan="3" class="rentalHeader"></th>'
                        + '<th colspan="2" class="rentalHeader">Reservation</th>'
                        + '<th colspan="2" class="rentalHeader">Walk-in</th></tr>'
                        + '<tr><th class="rentalHeader">Item Image</th>'
                        +' <th class="rentalHeader">Rental Type</th>'
                        + '<th class="rentalHeader">Max.<br>Person</th>'
                        + '<th class="rentalHeader">Half<br>Day<br>(3 hrs)</th>'
                        + '<th class="rentalHeader">Full<br>Day</th>'
                        + '<th class="rentalHeader">Half<br>Day<br>(3 hrs)</th>'
                        + '<th class="rentalHeader">Full<br>Day</th></tr>';
    for(rentalDetail of rentalDetails) {
        rentalTableData += '<tr><td class="rentalData"><img class="rental-image" src="./images/' + rentalDetail.imagename + '.jpg" alt="' + rentalDetail.imagename +'"></td>'
                        + '<td class="rentalData">' + rentalDetail.rentaltype + '</td>'
                        + '<td class="rentalData">' + rentalDetail.maxpersons + '</td>'
                        + '<td class="rentalData">' + rentalDetail.reservation.halfday + '</td>'
                        + '<td class="rentalData">' + rentalDetail.reservation.fullday + '</td>'
                        + '<td class="rentalData">' + rentalDetail.walkin.halfday + '</td>'
                        + '<td class="rentalData">' + rentalDetail.walkin.fullday + '</td></tr>';
    }

    rentalTableData += "</tbody></table>";    
    rentalTable.innerHTML = rentalTableData;
});


