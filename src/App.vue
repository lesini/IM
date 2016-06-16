<template>
    <div class="main">
      <div class="info">
        <div class="self_info">
          <self-info></self-info>
        </div>
        <div class="user_info">
          <user-info></user-info>
        </div>
      </div>
      <div class="list">
        <div class="friend_list">
          <friend-list></friend-list>
        </div>
        <div class="msg_box">
          <div class="msg_list">
            <message-list></message-list>
          </div>
          <div class="send_box">
            <send-message></send-message>
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

</style>
