const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data)=>{
  // const cityDetails = data.cityDetails;
  // const weather = data.weather;

  // destructuring properties
  const {cityDetails, weather} = data;

  // updating the details template
  details.innerHTML = `
  <h5 class="my-3">${cityDetails.EnglishName}<h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;</span>
  </div>`;

  // remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }
};

const updateCity = async(city)=>{
  console.log(city);

  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  // returning object with latest shorthand feature
  return {cityDetails,weather};
};

cityForm.addEventListener('submit',e=>{
  // preventing default mehtod so don't refresh automatically
  e.preventDefault();

  // get the city information
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city
  updateCity(city)
  .then(data=>{
    // this will get returned object inside the data
    updateUI(data);
  })
  .catch(err=>{
    console.log(err);
  });
})
