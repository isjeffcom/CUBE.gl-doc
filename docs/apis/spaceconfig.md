# Space Config List



```json

{
    "scale": 15, // {Number} float
    "debug": false, // If enable performance inspector (e.g. FPS, Memory use)
    "center": {
      "latitude": 52.460562, 
      "longitude":-1.772472
    },
    "background": "222222", // {String || Number} Hex value without '#'
    "camera": {
        "name": "Main-Camera", // {String} name of the camera
        "type": "Perspective", // {String} threejs camera type
        "container": "window", // NO USEAGE
        "near": 1, // {Number} camera nearest render distance
        "far": 3000, // {Number} camera farthest render distance
        "position": {"x": 0, "y": 0, "z": 0} // {Vector3} camera default position
    },
    "renderer": {
        "antialias": true, // {Boolean} if enable WebGL antialias
        "shadowMap": {
            "enabled": false // {Boolean} if enable threejs shadow map
        }
    },
    "controls": {
        "type": "Map", // {String} three js control() type
        "rotateSpeed": 0.7, // {Number} control rotation sensitive
        "damping": {
            "enabled": true, // {Boolean} if enable damping effect
            "factor": 0.25 // {Number} damping factor
        },
        "screenSpacePanning": true, // {Boolean} if enable pan move, must be True if using map
        "limitUnderground": false, // {Boolean} if user can go below ground 
        "autoRotate": {
            "enabled": false, // {Boolean} if enable auto rotation
            "speed": 1 // {Number} rotation speed
        },
        "minDistance": 5, // {Number} how near the camera can go
        "maxDistance": 800 // {Number} how far the camera can go
  
    },
    "lights": [ // automatically create global light objects
        {
        "name": "enviorment", // {String} name of the light
        "type": "Ambient", // {String} support Ambient, Point Only
        "color":"fafafa", // {String} Hex value without '#', light color
        "opacity": 0.35 // {Number} brightness
      },
      {
        "name": "front-left",
        "type": "Point",
        "color": "fafafa",
        "opacity": 0.4,
        "shadow": false,
        "position": {
          "x": 200,
          "y": 90,
          "z": 40
        }
      },
      {
        "name": "front-right",
        "type": "Point",
        "color": "fafafa",
        "opacity": 0.4,
        "shadow": false,
        "position": {
          "x": 200,
          "y": 90,
          "z": -40
        }
      },
      {
        "name": "back-left",
        "type": "Point",
        "color": "fafafa",
        "opacity": 0.4,
        "shadow": true,
        "position": {
          "x": -200,
          "y": 90,
          "z": -40
        }
      },
      {
        "name": "back-right",
        "type": "Point",
        "color": "fafafa",
        "opacity": 0.4,
        "shadow": false,
        "position": {
          "x": -200,
          "y": 90,
          "z": -40
        }
      }
    ],
    "fog":{
        "enabled": true,
        "color": "262E4F",
        "near": 50,
        "far": 150
    }
}

```

