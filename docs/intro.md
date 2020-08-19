# Introduction

CUBE.gl is a geospatial data visualization framework for visualizing large-scale geo-related datasets or create digital twin in a few line of code. The CUBE.gl is built upon the brilliant 3D library three.js by mrdoob, powered by Web-GL.



#### *Notice* 

***This version is in publish for testing and in active development / update. It is not recommended to use this library in production enviornment. Please report Bugs and issues the Github issue page.***



## Features

- Visualize numeric data by cylinder, arc, text etc.

- Visualize datasets by point cloud and heatmap.

- Visualize geographic data by buildings, roads, terrain, tile map, administrative geojson and custom polygon.

- Load model and attach other object, eg. THREE.Light.

- Create animation by WGS84 coordinate path (eg. vehicle) or simply circular around something (eg. satellite).

- Attach shader to an object to create visual effects.

  

## Performance

[GTX 1066Ti Gaming Laptop]

Render 6km of a New York City with building and road in 144 frame per second (FPS).

Render 6km of center New York with 1000+ animated object, shader animation enabled heatmap with 60 FPS

(both merge option enabled for CUBE.Building)



## Compatibility

Since this library was built by JavaScript ES6 standard, you are recommended to use ES6 supported browser.

More you can find here: https://www.w3schools.com/js/js_versions.asp 



## Known Issues

- Bitmap.Map's coordinate is not matched to Geojson layer

- Some big project is not working on mobile device

  *read the developer guide*

  

## Credit

[three.js](https://github.com/mrdoob/three.js) by mrdoob

[geolib](https://github.com/manuelbieh/geolib) by manuelbieh

[tween.js](https://createjs.com/tweenjs) by create.js

[deepmerge](https://github.com/TehShrike/deepmerge) by TehShrike



