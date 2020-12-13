<p align='center'>

<img src='https://user-images.githubusercontent.com/56647160/102018434-7c3c7a80-3d6d-11eb-8286-d2f01a7bd565.png' />
</p>

Where In The Frikin World it's an app that allows you to explore natural events data through the NASA API or to search info about a specific country.

## Stack

### Front End:

Html, Css, Javascript, React, Material UI

### Back End:

NodeJS, Express, JWT, MongoDB

check the repo: https://github.com/AndresRicci93/countries_api

##

_Necessary version of node and NPM_

- **Node**: At least v14.13.1 or higher
- **NPM**: At least v6.14.8 or higher

* Open the main folder

```
npm install
```

##

- To start the project:

```
npm start
```

Please be sure to add your own google api key here:

-> Maps/Cyclones/Map.js
-> Maps/Volcanoes/Map.js
-> Maps/WildFires/Map.js

```

<GoogleMapReact
        bootstrapURLKeys={{ key: '****your_key****' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
</GoogleMapReact>
```
