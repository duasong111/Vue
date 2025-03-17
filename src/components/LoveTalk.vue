<template>
    <div class="talk">
        <button @click="addTalkList">添加一句话</button>
        <ul>
            <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>
<script setup lang="ts" name="LoveTalk">
import { nanoid } from 'nanoid';
import { ref,reactive } from 'vue';
import axios from 'axios'
import {useTalkStore} from '@/store/loveTalk'

const talkStore=useTalkStore()
talkStore.$subscribe((mutate,state)=>{
console.log("监视内部数据是否改变",mutate,state)
})

function addTalkList() {
 talkStore.getTalk()
}
</script>
<style scoped>
.talk {
    background-color: chocolate;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>