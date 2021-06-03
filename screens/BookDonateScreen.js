import React,{Component} from 'react'
import {View,Text, TouchableOpacity, FlatList,StyleSheet} from 'react-native'
import MyHeader from '../components/MyHeader'
import db from '../config'
import {ListItem} from 'react-native-elements'
export default class BookDonateScreen extends Component{
    constructor(){
        super()
        this.state={
            requestedBooksList:[]
        }
        this.requestRef=null
    }
    getRequestedBooksList=()=>{
        this.requestRef=db.collection("requested_books")
        .onSnapshot((snapshot)=>{
            var requestedBooksList=snapshot.docs.map(document=>document.data())
            this.setState({
                requestedBooksList:requestedBooksList
            })
               
            
        })
    }
    componentDidMount(){
        this.getRequestedBooksList()
    }
    componentWillUnmount(){
        this.requestRef()
    }
    keyExtractor=(item,index)=>index.toString()
    /*renderItem=({item,i})=>{
        return(
            <ListItem
                key={i}
                title={item.book_name}
                subtitle={item.reason_to_request}
                titleStyle={{color:'black'}}
                rightElement={
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:'#fff'}}>View</Text>
                    </TouchableOpacity>
                }
                bottomDivider

            />
        )
    }*/
    renderItem = ({ item }) => (
        <ListItem bottomDivider>
          <ListItem.Content>
          <View style = {{flexDirection:'row'}}>
              <View>
                <ListItem.Title>{"Book: "+item.book_name}</ListItem.Title>
                <ListItem.Subtitle>{"Reason: "+item.reason_to_request}</ListItem.Subtitle>
              </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:'#ffff'}}>View</Text>
                </TouchableOpacity>
            </View>
                
            
          </ListItem.Content>
        </ListItem>
      )
    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Donate Books"/>
                <View style={{flex:1}}>
                    {
                        this.state.requestedBooksList.length===0
                        ?(

                            <View style={styles.subContainer}>
                                <Text style={{fontSize:20}}>List of all requested books</Text>
                            </View>
                        )
                        :(
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.requestedBooksList}
                                renderItem={this.renderItem}
                            />
                        )
                    }
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })