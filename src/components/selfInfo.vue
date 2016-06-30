<template>
  <div class="self_info">
    <img class="avatar" src="../assets/img/avatar01.jpg" alt="" />
    <h4 class="current_name" @click="selfName">{{name}}</4>
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
      getters:{
        name:state=>state.selfName
      }
    }
  }
</script>
<style scoped>
.self_info{
  height:120px;
  padding-top:20px;
  text-align: center;
}
.self_info img{
  height:80px;
  height:80px;
  border-radius: 50%;
}
.self_info h4{
  color:#f4f4f4;
  line-height: 40px;
}
</style>
