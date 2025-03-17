import { defineStore } from "pinia";
export const useCountStore = defineStore('count', {
    actions: {
        increment(value: number) {
            this.sum += value
        }
    },
    state() {
        return {
            sum: 6,
            title:"阿波罗",
            address:"河南"
        }
    },
    getters:{
        bigSum:(state):number=> state.sum *10,
    }
})