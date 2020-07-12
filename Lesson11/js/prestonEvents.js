//Get Town Event
fetch(requestURL)
.then(function(responseEvent) {
  return responseEvent.json();
})
.then(function(townJsonEvent) {
  //console.table(townJsonEvent);

  const eventObj = townJsonEvent['towns'];
  const getTownEventName = document.getElementById('preston-town-header');
  for(let i = 0; i < eventObj.length; i++) {
    //Preston Town Event
    if (eventObj[i].name == 'Preston'){
      getTownEventName.innerHTML = eventObj[i].name + '&#39;s Upcoming Event:';
      for (let j = 0; j < eventObj[i].events.length; j++){
        const pEvent = document.createElement('p');
        pEvent.setAttribute('class', 'para-event');
        pEvent.textContent = eventObj[i].events[j];
        document.querySelector('div.event-panel').appendChild(pEvent);
      }

    } 
  }
});