<template>
    <div id="app">
        <button @click="count++">{{ count }}</button>
        <div :id="Dynamics">动态的绑定DIV</div>
        <button @click="changeId">动态改变</button>
        <p v-if="seen">Now you see me</p>
        <button @click="showP">展现</button>
    </div>
    <div>
    <a :[attributeName]="url" target="_blank">点击我</a>
    <button @click="toggleAttribute">切换属性</button>
    <p>当前属性名: {{ attributeName }}</p>
    <p>当前值: {{ url }}</p>
  </div>

  <div>
    <a @[eventName]="doSomething"> 做什么 </a>
    <button>切换</button>
  </div>
</template>

<script lang="ts" setup name="Practice">
import { ref } from 'vue';

const count = ref(0); // 使用 ref 定义响应式数据
const Dynamics = ref('initial-id');
let seen = ref(false)
const changeId = () => Dynamics.value = 'new-id';
const showP=()=> seen.value = !seen.value;;


const attributeName = ref('href');
// 属性值
const url = ref('https://www.baidu.com');

// 切换属性名的函数
const toggleAttribute = () => {
  attributeName.value = attributeName.value === 'href' ? 'title' : 'href';
};

const eventName = ref("大吉大利")
const doSomething = ref("晚上吃鸡")
</script>
<style scoped>
#initial-id {
    background-color: lightblue;
}
#new-id {
    background-color: lightgreen;
}
a {
  display: block;
  margin: 10px 0;
  text-align: center;
}
</style>