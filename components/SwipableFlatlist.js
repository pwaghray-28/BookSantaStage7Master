import React from 'react'
import {Animated, Dimensions, StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import {ListItem,Icon} from 'react-native-elements'
import {SwipeListView} from 'react-native-swipe-list-view'
import db from '../config'
export default class SwipableFlatList extends React.Component{
    constructor(props){
        super(props)
        this.state = {allnotifications:this.props.allnotifications}
    }
}
