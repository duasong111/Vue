import axios from "axios";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";

export const useTalkStore = defineStore('talk',{
    actions:{
       async getTalk(){
            let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')

            let object = { id: nanoid(), title }
            console.log(object)
            this.talkList.unshift(object)
        }
    },
    state(){
        return{
            talkList :[
                { id: 'dssderd01', title: "第一句话" },
                {id: 'GBPNL_GyQhQstU23IrtcV', title: '用情，去珍惜你一生。'},
                {id: 'XVnmsr2eg5mihEC9dLxyh', title: '眼里都是你，亿万星辰犹不及'}
            ]
        }
    }
})