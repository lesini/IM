<template>
<<<<<<< HEAD
    <div class="chat">
      <div class="sidebar">
        <div class="self_info">
          <self-info></self-info>
        </div>
        <div class="friend_list">
          <!-- <friend-list></friend-list> -->
        </div>
      </div>
      <div class="message">
        <div class="user_info">
          <!-- <user-info></user-info> -->
        </div>
        <div class="msg_box">
          <div class="msg_list">
            <!-- <message-list></message-list> -->
          </div>
          <div class="send_box">
            <!-- <send-message></send-message> -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import selfInfo from './components/selfInfo'
import friendList from './components/friendList'
import sendMessage from './components/sendMessage'
import userInfo from './components/userInfo'
import messageList from './components/messageList'

export default {
  components: {
    selfInfo,
    friendList,
    sendMessage,
    messageList,
    userInfo
=======
    <hello-world></hello-world>
</template>

<script>
import HelloWorld from './components/helloWorld'

export default {
  components: {
    HelloWorld
>>>>>>> ed136dc86caadbe134b5b45de4c574a3b38f61d0
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.chat{
  width:60%;
  height: 80%;
  min-width: 800px;
  min-height: 500px;
  border-radius: 10px;
  background-color: #eee;
}
.sidebar{
  width:25%;
  height:100%;
  float: left;
  background-color: #2e3238;
  border-radius: 10px 0 0 10px;
  opacity: .9;
}
.message{
  border-radius: 0 10px 10px 0;
  float: right;
  width:75%;
  height:100%;
}

</style>
