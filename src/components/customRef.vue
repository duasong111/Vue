<template>
    <div class="app">
        <h2>{{ msg }}</h2>
        <input type="text" v-model="msg">
    </div>

</template >
<script setup lang="ts" name="customRef">
import useMes from '@/hooks/useMes'


let {msg} = useMes('你好',1000)
</script>
<style scoped>
.app{
    background-color: chocolate;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;

}
</style>