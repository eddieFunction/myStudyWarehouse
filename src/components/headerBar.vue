<template>
  <div>
        <van-nav-bar title="轻聊" @click-right="right" >
            <template #right>
                <van-icon name="plus" size="18" />
        </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    methods: {
        left(){
            console.log("返回");
        },
        right(){
            console.log('more');
        }
    }
}
</script>

<style>

</style>