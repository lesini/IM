<template>
  <div class="self_info">
    <img class="avatar" :src="avatar" alt="" />
    <h4 class="current_name">{{currentName}}</4>
  </div>
</template>
<script type="text/javascript">
  export default {
    data(){
      return {
        avatar:'',
        currentName:'Tom'
      }
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
