import React, { useEffect, useState } from 'react';
import MapView, { ProviderProps } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [locations, setLocations] = useState([]);

  let region = undefined;

  useEffect(() => {
    const handlePositionUpdate = async (position) => {
      setLocations((prevLocations) =>
        prevLocations.concat({ latitude: position.coords.latitude, longitude: position.coords.longitude })
      );
    };
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(handlePositionUpdate);
    Geolocation.watchPosition(handlePositionUpdate, error => console.log("Error: ", error));
    Geolocation.addListenerOnce('didChangeAuthorizationStatus', status => {
      if (status === 'authorized') {
        getUserRegion();
      } else {
        clearMapCenterRegion();
      }
    });
    return () => {
      Geolocation.clearWatch();
    };
  }, []);

  const getUserRegion = async () => {
    try {
      const location = await Geolocation.getCurrentPosition();
      region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudinalMetric: 'degrees',
        longitudinalMetric: 'degrees',
      };
      const spanX = 0.5;
      const spanY = 0.5;
      setSpanX(spanX);
      setSpanY(spanY);
    } catch (error) { }
  };

  const clearMapCenterRegion = async () => {
    if (!region) return;
    const { state, actions } = MapView.propOverridesProvider;
    state.centerCoordinate = undefined;
    actions.animateToInitialPosition(state);
    state.onSnapshotReady(actions);
  };

  return (
    <MapView
      provider={new MapboxGL.AccessTokenProvider().getBase64AuthString()}
      style={{ width: "100%" }}
      region={{ ...region ?? { latitude: -37.82529, longitude: 145.12690, zoomLevel: 10 } }}
    >
      {/* This condition checks whether there are any locations added into locations array */}
      {locations && (
        <GeoJSON source={{ type: "FeatureCollection", features: locations }} />
      )}
    </MapView>
  );
};

export default App;