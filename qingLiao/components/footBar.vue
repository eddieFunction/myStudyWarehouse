<template>
  <div>
      <van-tabbar v-model="active">
          <van-tabbar-item replace to='/discover' icon='chat-o'>发现</van-tabbar-item>
          <van-tabbar-item replace to='/friends' icon='friends-o'>朋友</van-tabbar-item>
          <van-tabbar-item replace to='/profile' icon='user-o'>我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
    data(){
        return {
            active: 0
        }
    }
}
</script>

<style>

</style>