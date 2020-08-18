# Introduction

CUBE.gl is a geospatial data visualization framework that allows data analytics to visualize large-scale geo-related datasets or creating digital twin in a few line of code. The CUBE.gl is built upon the three.js.



#### *Notice* 
*This is an Alpha release with bugs and issues for public testing. Please report any found issue to Github issue page or pull request if you are willing to help.*




## Features

- Visualize numeric data by cylinder, arc, text etc.

- Visualize datasets by point cloud and heatmap.

- Visualize geographic data by buildings, roads, terrain, tile map, administrative geojson and custom polygon.

- Load model and attach other object, eg. THREE.Light.

- Create animation by WGS84 coordinate path (eg. vehicle) or simply circular around something (eg. satellite).

- Attach shader to an object to create visual effects.

  

## Performance

Render the 6km of a New York City with 144 FPS

Render 6km of center New York City with 1000+ animated object, shader animation enabled heatmap with 60 FPS

(both merge option enabled for CUBE.Building, test in an GTX 1066Ti Gaming Laptop)



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



