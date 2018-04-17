'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { EventRegister } from 'react-native-event-listeners'
import QRCodeScanner from 'react-native-qrcode-scanner';
import Config from '../config';

import AuthService from '../lib/AuthService';

class QRView extends React.Component {

  constructor(props) {
    super(props);


    this.authService = AuthService.getInstance();

    this.state = {

    }

    this.props.navigator.toggleNavBar({
      to: 'hidden', // required, 'hidden' = hide navigation bar, 'shown' = show navigation bar
      animated: true // does the toggle have transition animation or does it happen immediately (optional). By default animated: true
    });

    this.onPressOK = this.onPressOK.bind(this);

  }

  onSuccess(e) {

    /**
    
                              TODO:
                              Get location from AuthService
                              Post to coordinate table via AuthService
    
     
     * */

    this.props.navigator.dismissModal({
      animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
    });

/**
 HERE IS THE FORMAT TO FOLLOW FOR QR CODE LOCATIONS
 
 {"coords":{"longitude":-118.2702035, "latitude":  34.1483695}}
 
 */

    try{
    
      let location = JSON.parse(e.data);


    this.authService.incrementCoordSequence();
    this.authService.coordPut(location);
    this.authService.setCurrentLocation(location);

    if (this.authService.isFirstLocation()) {
      this.authService.set('isFirstLocation', false);
      EventRegister.emit('first location', location);
    }

    EventRegister.emit('new location', location);


    } catch (e) {
      // alert("There was a problem with the QR code, please try again");
      alert(e);
    }
    



  }

  onPressOK() {
    this.props.navigator.dismissModal({
      animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
    });
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}
            onPress={this.onPressOK}
          >
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

module.exports = QRView;