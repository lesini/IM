<template>
  <div class="hello">
    <img src="../assets/img/vue.png" height="400" width="400" alt="">
    <h1 @click="getAlert">Hello world</h1>
    <h2>{{ waitTotal }}</h2>
  </div>
</template>

<script>
 import {getAlert} from '../vuex/actions'
 import store from '../vuex/store'
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  vuex:{
    actions:{
      getAlert,
    },
    getters:{
      waitTotal:state=>state.titleTotal
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
img{
  width: 200px;
  height: 200px;
}
</style>
