<template>
    <div class="person">
        <h2>现在是使用reactive</h2>
        <hr>
        <h4>汽车的品牌是 {{ car.brand }},汽车的价格是 {{ car.price }}</h4>
        <button @click="changPrice">改变价格</button>
        <hr>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeGameName">修改游戏的名字</button>
        <hr>
        <h3>{{ valueData.a.b.c.data }}</h3>
        <button @click="changeValue">修改游戏的名字</button>
    </div>
</template>
<!-- <script lang="ts">
export default {
    name: 'Person',
}
</script> -->

<script lang="ts" setup name="Person">//使用setup的语法糖

import { ref,reactive } from 'vue'

let car = reactive(({ brand: "奔驰", price: 777 }))

let games = reactive([
    { id: '001', name: "王者荣耀" },
    { id: '002', name: "海岛奇兵" },
    { id: '003', name: "哇哈哈" }
])

let valueData =ref({a:{
    b:{
        c:{
            data:12345
        }
    }
}
    }
)

function changPrice() {
    car.price += 100;
}
function changeGameName() {
    games[0].name = "改变名字"
}
function changeValue(){
    valueData.value.a.b.c.data=3333
} //但凡用到ref一定要切记加上value



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