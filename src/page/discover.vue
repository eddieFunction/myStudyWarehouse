<template>
  <div>
      <van-swipe-cell>
        <van-card v-for="m in messages" :key="m.id" :desc="m.txt" :title="m.name" class="goods-card"
         thumb="https://img.yzcdn.cn/vant/cat.jpeg" >
        </van-card>
      </van-swipe-cell>
     

  </div>
</template>

<script>
export default {
  data(){
    return{
      messages:[
        {id: 0, name: "小明", txt: "工作中......", statues: false},
        {id: 1, name: "小亮", txt: "在线", statues: false},
      ]
    }
  }
}
</script>

<style>

</style>