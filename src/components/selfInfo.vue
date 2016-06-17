<template>
  <div class="self_info">
    <img class="avatar" src="" alt="" />
    <h4 class="current_name" @click="selfName">{{selfName}}</4>
  </div>
</template>
<script type="text/javascript">
  import {selfName} from '../vuex/actions'
  import store from '../vuex/store'
  export default {
    vuex:{
      actions:{
        selfName
      },
      // getters:{
        // selfName:state=>state.selfName
      // }
    }
  }
</script>
<style scoped>
.self_info{
  height:120px;
  text-align: center;
}
.self_info img{
  height:80px;
  height:80px;
  border-radius: 50%;
}
.self_info h4{
  color:#f4f4f4;
}
</style>
