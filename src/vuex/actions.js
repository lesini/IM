import * as types from './mutation-types'
import Vue from 'vue'

// export const  getAlert= ({ dispatch }) => {
// 	var hwb='我是贺文榜'
//    dispatch(types.IM,hwb)
//
// }

export const selfName = ({ dispatch }) =>{
	var hwb='我是贺文榜'
	dispatch(types.IM,hwb)
}
