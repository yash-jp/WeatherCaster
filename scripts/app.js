const cityForm = document.querySelector('form');

const updateCity = async(city)=>{
  console.log(city);

  const cityDetails = await getCity(city);
};

cityForm.addEventListener('submit',e=>{
  // preventing default mehtod so don't refresh automatically
  e.preventDefault();

  // get the city information
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city
  updateCity(city);
})
