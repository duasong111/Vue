<template>
    <div class="talk">

        <button @click="addTalkList">添加一句话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>

</template>
<script setup lang="ts" name="LoveTalk">
import { nanoid } from 'nanoid';
import { reactive } from 'vue';
import axios from 'axios'
let talkList = reactive([
    { id: 'dssderd01', title: "第一句话" }
])
async function addTalkList() {
    let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')

    let object = { id: nanoid(), title }
    console.log(object)
 
    talkList.unshift(object)



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