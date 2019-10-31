import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  Button,
  View
} from "react-native";
import Mechanic from './screens/Mechanic';
import Motorist from './screens/Motorist';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMechanic: false,
      isMotorist: false
    };
  }

  
  render() {

    if(this.state.isMechanic){
      return <Mechanic />
    }
    if(this.state.isMotorist){
      return <Motorist />
    }
    
    return (
      <View style ={styles.container}>
       <Button title="Mechanic" onPress ={() => this.setState({isMechanic: true})}/>
       <Button title="Motorist" onPress ={() => this.setState({isMotorist: true })}/>
      </View>
    );

}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30
    }
});
