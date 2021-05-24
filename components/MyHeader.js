
import React from 'react'
import {Header} from 'react-native-elements'

const MyHeader=props=>{
    return(
        <Header
            centerComponent={{text:props.title,style:{color:'#90a5a9',fontsize:20,fontWeight:'bold'}}}
            backgroundColor='#eaf8fe'
        />
    )
}

export default MyHeader