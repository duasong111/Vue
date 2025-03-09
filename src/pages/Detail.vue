<template>
    <div class="news-list">
        <li>编号：{{ id }}</li>
        <li>标题：{{ title }}</li>       
        <li>内容：{{ content }}</li>  
    </div>
</template>

<script lang="ts" setup name="Detail">//使用setup的语法糖
import { toRefs } from 'vue';
import {useRoute} from 'vue-router'
let router = useRoute()
// console.log(router)
// let {params} =toRefs(router)
defineProps(['id','title','content'])
</script>
<style scoped>
.news-list{
    margin: 10px;  
    list-style: none;
    padding-left: 20px;
}
.news-list li {
    line-height: 30px;
}

</style>