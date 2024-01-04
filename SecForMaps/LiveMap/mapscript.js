navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([78.48571282585166, 17.60461950426339]);
}

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/satellite-streets-v11",
  center: { lng: 78.4858479583001, lat: 17.604679398210344 },
  zoom: 18,
  zLevel: 17,
  scrollZoom: true,
  doubleClickZoom: false,
  touchZoomRotate: false,
});
map.on("click", function (e) {
  map.flyTo({
    center: { lng: 78.4858479583001, lat: 17.604679398210344 },
    zoom: 18,
    speed: 0.75,
  });
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(
  new mapboxgl.GeolocateControl({
    // positionOptions: {
    //   enableHighAccuracy: true,
    // },
    trackUserLocation: true,
  })
);

//.................................................................001

map.on("load", () => {
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              "<strong>BLOCK 01</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
          },
          geometry: {
            type: "Point",
            coordinates: [78.48630383652159, 17.60460580655965],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>CAFETERIA</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a Mad Men Season Five Finale Watch Party, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>",
          },
          geometry: {
            type: "Point",
            coordinates: [78.48604037741573, 17.605136807336137],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>BLOCK 02</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a Big Backyard Beach Bash and Wine Fest on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.</p>",
          },
          geometry: {
            type: "Point",
            coordinates: [78.48594025615641, 17.60448452417323],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>LIBRARY BLOCK</strong><p>The Ballston Arts & Crafts Market sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>",
          },
          geometry: {
            type: "Point",
            coordinates: [78.48546230918207, 17.605144556082934],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>NEW BLOCK</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year's Seersucker Social bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>",
          },
          geometry: {
            type: "Point",
            coordinates: [78.48539198814206, 17.604423023856825],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>PHYSICAL EDUCATION ROOM</strong><p>The annual Capital Pride Parade makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>",
          },
          geometry: {
            type: "Point",
            coordinates: [78.48609215180382, 17.605436206334495],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>PLAYGROUND-01</strong><p>Jazz-influenced hip hop artist Muhsinah plays the Black Cat (1811 14th Street NW) tonight with Exit Clov and Gods’illa. 9:00 p.m. $12.</p>",
          },
          geometry: {
            type: "Point",
            coordinates: [78.48700810554234, 17.60443529638453],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>PLAYGROUND-02</strong><p>The Arlington Players' production of Stephen Sondheim's <em>A Little Night Music</em> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>",
          },
          geometry: {
            type: "Point",
            coordinates: [78.4867507082123, 17.60519920275686],
          },
        },
      ],
    },
  });
  // Add a layer showing the places.
  map.addLayer({
    id: "places",
    type: "circle",
    source: "places",
    paint: {
      "circle-color": "#4264fb",
      "circle-radius": 6,
      "circle-stroke-width": 2,
      "circle-stroke-color": "#ffffff",
    },
  });

  // Create a popup, but don't add it to the map yet.
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  map.on("mouseenter", "places", (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = "pointer";

    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on("mouseleave", "places", () => {
    map.getCanvas().style.cursor = "";
    popup.remove();
  });
});
