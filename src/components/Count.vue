<template>
<div class="count">
    <h2>当前求和为：{{ sum }},放大十倍后:{{ bigSum }}</h2>
    <h3>名称为:{{ title }},地址为：{{ address }}</h3>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>

</div>

</template >
<script setup lang="ts" name="Count">
import { ref,toRefs } from 'vue';
import {storeToRefs} from 'pinia'
import {useCountStore} from '@/store/count'
let n = ref(1)

const countStore = useCountStore()
let {sum,address,title,bigSum} =storeToRefs(countStore)
console.log(storeToRefs(countStore))

function add(){
    // countStore.sum+=n.value
    countStore.increment(n.value)
}

function minus(){
    countStore.sum-=n.value

}


</script>

<style scoped>

.count{
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
 select,button{
    margin: 8px;
}



</style>