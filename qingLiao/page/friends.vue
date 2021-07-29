<template>
  <div>
      <van-contact-card type="add" @click="onAdd" />
      <van-contact-card v-for="f in friends" :key="f.id" type="edit" :name="f.name" :tel="f.tel" @click="onEdit"/>  
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data(){
        return {
            friends:[
                {id: 0, name: "小明", age: '18', tel: "12345"},
                {id: 1, name: "小亮", age: '18', tel: "89562"},
                {id: 3, name: "刘备", age: '18', tel: "78250"},
                {id: 2, name: "关羽", age: '18', tel: "74152"},
                {id: 3, name: "张飞", age: '18', tel: "78250"},
            ]
        }
    },
   
    setup() {
        const onAdd = () => Toast('新增');
        return {
        onAdd,
        }
    }
    
    
}
</script>

<style>

</style>