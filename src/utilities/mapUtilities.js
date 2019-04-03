export const parseGeoJson = data => {
  if(!data.length) return;
  const parsedData = data.map( item =>({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [item.longitude, item.latitude]
    },
    properties: {
      id: item.id,
      name: item.name,
      street: item.street,
      address: `${item.street}, ${item.city}, ${item.state}`,

    }
  }));
  return {
    type: "FeatureCollection",
    features: parsedData
  };
};

export const geolocationOptions = {
  enableHighAccuracy: true,
  maximumAge: 15000,
  timeout: 10000
};

export const breweryLayer = {
  id: 'breweries',
  type: 'symbol',
  source: 'breweries',
  layout: { 'icon-image':'beer-15', 'icon-allow-overlap': true}
}
