import Vue from 'vue'
import * as types from './mutation-types'

export const  getAlert= ({ dispatch }) => {
	var hwb='我是贺文榜'
   dispatch(types.IM,hwb)

}
