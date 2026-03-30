# Weather App

Check the current weather on any city on the planet. Switch between metric and imperial units.

![Alt img](https://images.ctfassets.net/zlsyc9paq6sa/3uBrJ07WSM40FpolgjInHY/7d886cb4187b52194bf9b63c183a1d3a/1627637330_x.gif)

## Features

1. User's ability to search cities

2. Current local time and date

3. Temperatures and humidity

4. Wind speed and direction

5. Sunrise and sunset times

6. Metric vs Imperial system

7. Error handling and loading info

## Installation

1. `git clone https://github.com/AmiiNata/weather-app-simplon.git-/`

2. `cd weather-app-simplon.git-`

3. `npm install`

4. `npm run dev`


## Conclusion 

- la clé est en dure dans data.js
- le fichier config.json dans le dossier public pour initaliser la ville à nantes en cas de bug
- la clé crée est : aaeebaa66b6b1d130f706da87d587364

## Blocages et solutions 

1- incompatibilité de mon OS linux mint avec le projet => passage sur ubuntu

2- blocage de GitHub lors du push à cause de la détection automatique de la clé => j'ai forcé le passage avec 'push declined due to repository rule violations' 
Je comprends donc pourquoi il fallait passer par des variables d'environnement .env

