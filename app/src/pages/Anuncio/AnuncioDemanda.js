import React, {Component} from 'react';
import {CheckBox, SearchBar} from 'react-native-elements';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Icon,
  Text,
  Card,
  CardItem,
  Body,
  Spinner
} from "native-base";
import  RadioForm from 'react-native-simple-radio-button';



export default class AnuncioDemanda extends Component{
  static navigationOptions ={
    header: null
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showText: false,
  //     modalVisible: false
  //   };
  // }
    render() {
    return (

      <View>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Detalhes</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="md-share" />
              </Button>
              <Button transparent>
                <Icon name="heart" />
              </Button>
            </Right>
          </Header>
          <View style={styles.container}>
            <ScrollView style={styles.subContainer}>
              <Image
                style={styles.img}
                source={{
                  
                  uri: "../../images/image1.jpg"
                }}
                onLoadStart={() => this.setState({ loading: true })}
                onLoadEnd={() => {
                  this.setState({ loading: false });
                }}
              >
                {/* {this.state.loading && (
                  <Spinner
                    style={{
                      marginTop: Dimensions.get("window").height / 10
                    }}
                    color="gray"
                  />
                )} */}
              </Image>
              <Card style={styles.detailsCard}>
                <CardItem>
                  <Body>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.userName}>
                        Usuario
                        {/* {users[0].name} */}
                      </Text>
                      <Button
                        transparent
                        // onPress={() =>
                        //   this.props.navigation.navigate("Profile", {
                        //     user: users[0]
                        //   })
                        // }
                      >
                        <Text>VIEW PROFILE</Text>
                      </Button>
                    </View>
                    <Text style={styles.addTime}>Ad posted at 10:19 am</Text>
                    <Text style={styles.price}>Rs 
                      Preço
                      {/* {product.price} */}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        borderBottomWidth: 0.5,
                        borderBottomColor: "#d6d7da"
                      }}
                    >
                      Descrição
                      {/* {product.description} */}
                    </Text>
                    <Text style={styles.address}>
                      {/* {users[0].address} */}
                      ,BTM Layout,Bangalore
                    </Text>
                    <Text style={styles.description}>
                      Brand new Samsung galaxy S8 plus Black 4G LTE single sim
                      64gb with 4gb ram Snapdragon processor Us imported with
                      all accessories . No bill.Hence no warranty in india 100%
                      percent best quality than Indian version. PRICE IS FIX
                      Serious buyers can call
                    </Text>
                    <View style={styles.footer}>
                      <Button
                        transparent
                        style={{
                          alignSelf: "center"
                        }}
                      >
                        <Text>SHARE</Text>
                      </Button>
                      <Button transparent style={{ alignSelf: "center" }}>
                        <Text>REPORT</Text>
                      </Button>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </ScrollView>
          </View>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingTop: Dimensions.get("window").height / 40 - 5
  },
  profileButton: {
    marginLeft: Dimensions.get("window").width / 50,
    marginTop: Dimensions.get("window").height / 50,
    fontSize: 14
  },
  addTime: {
    backgroundColor: "transparent",
    fontSize: 10,
    marginTop: -Dimensions.get("window").height / 80,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  address: {
    marginTop: Dimensions.get("window").height / 30
  },
  description: {
    marginTop: Dimensions.get("window").height / 30
  },
  price: {
    fontSize: 25,
    marginTop: Dimensions.get("window").height / 30
  },
  userName: {
    fontSize: 17,
    marginTop: Dimensions.get("window").height / 50 - 5
  },
  subContainer: {
    // justifyContent: "space-around",
    zIndex: 1,
    // borderWidth: 0.5,
    backgroundColor: "#FFFFFF",
    paddingLeft: Dimensions.get("window").width / 40 - 5,
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height - 20
  },
  footer: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center"
  },
  img: {
    // justifyContent: "center",
    height: Dimensions.get("window").height / 3 - 50,
    width: Dimensions.get("window").width - 30
  },
  detailsCard: {
    // borderWidth: 0.5,
    // borderColor: "black",
    // borderRadius: 10,
    // height: Dimensions.get("window").height / 2 + 50,
    marginTop: Dimensions.get("window").height / 50 - 5,
    marginRight: Dimensions.get("window").width / 50,
    paddingLeft: Dimensions.get("window").width / 50,
    paddingRight: Dimensions.get("window").width / 50 - 5
  }
});