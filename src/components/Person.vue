<template>
    <div class="person">
        姓: <input type="text" v-model="firstName"> <br>
        名:<input type="text" v-model="lastName"> <br>
        全名:<span>{{ fullName}}</span>
        <br>
        <button @click="changefullName">将全名改li-si</button>
        

    </div>
</template>
<!-- <script lang="ts">
export default {
    name: 'Person',
}
</script> -->

<script lang="ts" setup name="Person">//使用setup的语法糖

import { ref, reactive, toRefs, computed } from 'vue'
let firstName = ref("张")
let lastName = ref("王")

let fullName = computed({
    get() {
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' +
            lastName.value
    },
    set(vla){
        const[str1,str2]=vla.split('-')
        firstName.value=str1
        lastName.value=str2
    }
})
function changefullName() {
    fullName.value = "li-si"
}

</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 10px;
}
</style>