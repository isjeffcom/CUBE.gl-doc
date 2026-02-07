
### Welcome to CUBE.gl documentation

CUBE.gl is an open-source, WebGL-powered geospatial data visualization framework built on [Three.js](https://threejs.org/). It helps developers create interactive **3D maps**, **digital twins**, and large-scale **geographic data visualizations** in the browser with minimal code.

---

## Frequently Asked Questions

**What is CUBE.gl and what is it used for?**

CUBE.gl is a data-driven geospatial visualization framework for building interactive 3D maps and urban digital twins. It is designed for smart city dashboards, geographic data analysis, transportation monitoring, and any scenario that requires rendering large-scale geospatial datasets in 3D directly in the web browser.

**How do I create a 3D map in the browser with JavaScript?**

Install CUBE.gl via npm (`npm install cube.gl`), initialize a Space with your map configuration including GPS coordinates and a Mapbox token, then add GeoJSON layers for buildings, roads, and terrain. CUBE.gl handles all WebGL rendering through Three.js automatically. Check the [Getting Started](/docs/use#getting-started) guide for a step-by-step tutorial.

**What is a digital twin and how can I build one?**

A digital twin is a virtual replica of a physical environment updated with real-world data. With CUBE.gl you can build urban digital twins by loading GeoJSON building footprints, adding terrain elevation from GeoTIFF, overlaying real-time IoT sensor data as heatmaps or point clouds, and animating GPS trajectories — all rendered in interactive 3D.

**How do I visualize GeoJSON data in 3D?**

CUBE.gl provides built-in GeoLayer components — Buildings, Road, Administrative, and GeoPolygon — to render GeoJSON data as extruded 3D geometries. Simply load your GeoJSON, create the appropriate layer, and add it to the Space. See the [Developer Guide](/docs/guide#geolayer) for details.

**Can I use Three.js for geospatial visualization?**

Yes. CUBE.gl is built on Three.js and adds a high-level geospatial API on top, handling coordinate conversion (GPS to 3D world space), map tile integration, GeoJSON parsing, and camera controls. You can also access the underlying Three.js scene directly for custom rendering and effects.

**What open-source WebGL frameworks are available for data visualization?**

Popular options include CUBE.gl for 3D geospatial and digital twin applications, Deck.gl for large-scale 2D/3D data layers, CesiumJS for globe-based 3D GIS, and Kepler.gl for geospatial analytics. CUBE.gl stands out for its simplicity, Three.js foundation, and focus on urban-scale 3D visualization with minimal boilerplate.

**How do I render 3D buildings and terrain from real-world data?**

Load OpenStreetMap or custom GeoJSON building data using the Buildings layer, which automatically extrudes footprints based on real height attributes. For terrain, use the GeoTIFF loader to import elevation data (DEM/DSM) and generate a 3D surface mesh. Both layers can be combined for realistic city-scale 3D environments. Learn more in the [Terrain](/docs/guide#terrain) section.

**Does CUBE.gl support real-time data and animation?**

Yes. The built-in animation engine supports GPS path playback, circular motion, and custom animations. You can stream real-time IoT data as dynamic heatmaps, animated point clouds, or moving 3D models along trajectories — ideal for smart city monitoring and transportation dashboards.

**How do I integrate CUBE.gl with Vue, React, or other frontend frameworks?**

Install via npm, import CUBE, and initialize the Space inside a lifecycle hook (e.g. Vue's `mounted` or React's `useEffect`) targeting a DOM container. Manage visualization state through your framework's reactivity system. See the [MVVM integration guide](/docs/use#use-with-mvvm-framework) for examples.

**What types of visualization does CUBE.gl support?**

CUBE.gl supports 3D buildings, administrative boundaries, road networks, terrain elevation, bar and arc diagrams on maps, 3D heatmaps, point clouds, tile map overlays, GLTF/GLB 3D model loading, animated GPS paths, text labels, and interactive object picking with fly-to camera controls. See the full list in the [Developer Guide](/docs/guide#developer-guide).



