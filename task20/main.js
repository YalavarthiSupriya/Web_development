// Foursquare API Info
const clientId = 'WUTANKOZ5EWQ0OMCDEOJXDXUOAOGE2XFZ1CFJPFVEXEEXOP5';
const clientSecret = '5YPU5JODYBDCX4ABRFWAYBFWQGBTSJ4KKRACM33IDYHQF1BB';
const openWeatherKey = 'ff58d209ddc10a3302c1028e91d0ae67';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info

// const weatherUrl = 'api.openweathermap.org/data/2.5/weather?q=' + "nirmal" + '&appid=' + openWeatherKey;
// b388a6a2a3f33924682b8ccfc742f862
// http://api.openweathermap.org/data/2.5/weather?q=nirmal&appid=b388a6a2a3f33924682b8ccfc742f862
const weatherUrl='http://api.openweathermap.org/data/2.5/weather';


// const urltofetch=`{url}{city}&limit=10&client_id={clientId}&client_secret=${clientSecret}&v=20190609`;
//
// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
 const getVenues = async() => {
  const city=$input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200925`;
  // const urltofetch=url+city+"&limit=10&client_id="+{clientId}+"&client_secret="+${clientSecret}+"&v=20190609";
  try{
    const response = await fetch(urlToFetch);
    const jsonresponse=await response.json();
    const venues=jsonresponse.response.groups[0].items.map(item=>item.venue);
    console.log(venues);
     if(response.ok) {
      console.log(response);
    }
    console.log(jsonresponse);
    return venues;
  }
  catch(error){
    console.log(error);
  }

}

const getForecast =async () => {
  // api.openweathermap.org/data/2.5/weather?q=' + "nirmal" + '&appid=' + openWeatherKey
  // api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
  const urlToFetch=`${weatherUrl}?q=${$input.val()}&appid=${openWeatherKey}`;
  console.log(urlToFetch);
  try{
      const response=await fetch(urlToFetch);
      if(response.ok){
        const jsonresponse=await response.json();
        console.log("get weather"+jsonresponse);
      }
  }
  catch(error){
    console.log(error);
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue=venues[index];
    const venueicon=venue.categories[0].icon;
    const venueimgsrc=`${venueicon.prefix}bg_64${venueicon.suffix}`;
    let venueContent = createVenueHTML(venue.name,venue.location,venueimgsrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:


	let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues=>renderVenues(venues));
  getForecast().then(forecast=>renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)
