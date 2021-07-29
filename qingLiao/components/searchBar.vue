<template>
  <section class="city-search">
      <van-icon class="search-icon" name="search" />
      <input placeholder="请输入关键词" v-model="keyword">
      <van-icon class="clear-icon" name="clear" v-show="keyword" @click="clearInput" />
  </section>
</template>

<script>
export default {
    date(){
        return {
            keyword: "",
        }
    },
    methods: {
        clearInput(){
            this.keyword = "";
        }
    }
}
</script>

<style>
    .city-search {
        background-color: #F7F8FA;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 2.3rem;
        width: 94vw;
        margin: 2vw 4vw;
        border-radius: 8px;
    }
    .search-icon {
      margin-left: 5px;
    }
    input {
      margin: 0 1.5vw;
      background-color: #F7F8FA;
      border: 0px;
      font-size: 14px;
      flex: 1
    }
    .clear-icon { color: #999;}
</style>