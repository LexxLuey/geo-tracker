import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';

const App = () => {
  const [locations, setLocations] = useState([]);
  const [isTracking, setIsTracking] = useState(false);
  const [initialRegion, setInitialRegion] = useState(null);

  useEffect(() => {
    // Request permission to access the device's location
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      } else {
        // Get the user's current location and set the initial region
        const location = await Location.getCurrentPositionAsync({});
        console.log(location);
        const { latitude, longitude } = location.coords;
        setInitialRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    })();
  }, []);

  const startTracking = async () => {
    // Start tracking the user's location
    setIsTracking(true);
    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    setLocations([{ latitude, longitude }]);
    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
        distanceInterval: 10, // Update location every 10 meters
      },
      (newLocation) => {
        const { latitude, longitude } = newLocation.coords;
        setLocations((prevLocations) => [...prevLocations, { latitude, longitude }]);
      }
    );
  };

  const stopTracking = async () => {
    // Stop tracking the user's location
    setIsTracking(false);
    Location.stopLocationUpdatesAsync();

    // Save the locations to the database
    try {
      await axios.post('YOUR_API_ENDPOINT', { locations });
      console.log('Locations saved successfully');
    } catch (error) {
      console.log('Error occurred while saving locations', error);
    }
  };

  return (
    <View style={styles.container}>
      {initialRegion && (
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
        >
          <Polyline coordinates={locations} strokeColor="#FF0000" strokeWidth={2} />
          {isTracking && locations.length > 0 && (
            <Marker
              coordinate={{
                latitude: locations[locations.length - 1].latitude,
                longitude: locations[locations.length - 1].longitude,
              }}
            />
          )}
        </MapView>
      )}
      <Button
        title={isTracking ? 'Stop' : 'Start'}
        onPress={isTracking ? stopTracking : startTracking}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
