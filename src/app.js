var first, second, third;
var Vector2 = require('vector2');
var UI = require('ui');
var Vibe = require('ui/vibe');
var locationOptions = {
  enableHighAccuracy: true, 
  maximumAge: 10000, 
  timeout: 10000
};

function locationSuccess(pos) {
  console.log('lat= ' + pos.coords.latitude + ' lon= ' + pos.coords.longitude);
}

function locationError(err) {
  console.log('location error (' + err.code + '): ' + err.message);
}


navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
function locationSuccess(pos){
console.log('lat= ' + pos.coords.latitude + ' lon= ' + pos.coords.longitude);
}
var features = [
  {
      
    title: "My Location:",
    subtitle: "Your GPS Coordinates",
    cardtitle: "Your Current Coordinates",
    cardbody: locationSuccess
  },
  
  {
    
    title: "Whats Nearby?",
    subtitle: "Nearby Attractions"
    
  },
  
  {
  
  title: "Places to Eat",
  subtitle: "Food"
  
  }
  
  
  
];





var menu = new UI.Menu({
  sections: [{
  
  title: 'Proximity',
  items: features 
  }]                                                 
});

menu.show();

menu.on('select',function(event){ 
 var locationcard = new UI.Card({
   title: features [event.itemIndex].cardtitle, 
   body: features[event.itemIndex].cardbody
   
 });
 Vibe.vibrate('short');
  locationcard.show();
});
