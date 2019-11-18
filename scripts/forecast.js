const key = "XGeD2IckK2xiXf1Bx0eoLPU0ASREgnAe";

// get weather ino for given city
const getWeather = async(id)=>{
  const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`);
  
  const data = await response.json();
  return data;
};

// get city
const getCity = async(city)=>{
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

getCity('manchester')
.then(data=>{
  console.log(data);
  return getWeather('329260');
})
.then(data=>{
  console.log(data);
})
.catch(err=>{
  console.log(err);
})
