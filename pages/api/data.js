/*export default async function handler(req, res) {

  // récupération de la configuration 
  const configResp = await fetch('http://localhost:3000/config.json');
  const config = await configResp.json();

  // utilisation de la ville en configuration 
  const city = config.city;
  const OPENWEATHER_API_KEY = "aaeebaa66b6b1d130f706da87d587364";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`;
  
  const getWeatherData = await fetch(url);
  const data = await getWeatherData.json();

  res.status(200).json(data);




  const { cityInput } = req.body;
  const getWeatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=aaeebaa66b6b1d130f706da87d587364`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);

  
}*/

export default async function handler(req, res) {
  // 1. On récupère la ville envoyée par le formulaire React (le body)
  const { cityInput } = req.body; 
  
  let cityToFetch;

  if (cityInput) {
    // Si l'utilisateur a tapé quelque chose, on l'utilise
    cityToFetch = cityInput;
  } else {
    // Sinon (au premier chargement), on utilise le config.json
    const configResp = await fetch('http://localhost:3000/config.json');
    const config = await configResp.json();
    cityToFetch = config.city;
  }

  const apiKey = "aaeebaa66b6b1d130f706da87d587364";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityToFetch}&units=metric&appid=${apiKey}`;

  const getWeatherData = await fetch(url);
  const data = await getWeatherData.json();

  res.status(200).json(data);
}
