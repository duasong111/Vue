<template>
    <div class="home">
     <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    </div>
</template>

<script lang="ts" setup name="Home">//使用setup的语法糖
import { onMounted } from 'vue';

// onMounted(()=>{
//     setTimeout(()=>{
// console.log("在此停留了两秒")
//     },2000)
// })
</script>
<style scoped>
.home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

</style>