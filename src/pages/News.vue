<template>
    <div class="contain">
        <ul>
            <li v-for="item in newsList" :key="item.id">
                
                <!-- 第一种写法 -->
              <!-- <RouterLink :to="`/news/details?id=${item.id}&title=${item.title}&content=${item.conten}`">{{item.title}}</RouterLink> -->
            <!-- 第二种写法 -->
              <!-- <RouterLink 
            :to="{
                path:'/news/details',  
                query:{
                    id:item.id,
                    title:item.title,
                    content:item.conten
                }
            }">
                {{item.title}}
            </RouterLink> -->
            
            <!-- 第三张写法 -->
             <RouterLink
             :to="{
                name:'news_detal',
                params:{
                    id:item.id,
                    title:item.title,
                    content:item.conten
                }
             }">
                {{item.title}}
             </RouterLink>
            </li>
        </ul>


        <!-- 展示区域 -->
         <div class="news-content">
            <RouterView></RouterView>

         </div>
    </div>


</template>

<script lang="ts" setup name="News">//使用setup的语法糖
import {reactive, ref} from 'vue'
import { RouterView } from 'vue-router';
let newsList=reactive([
    {id:'asafec01',title:"每日新闻1",conten:"今天天气还不错"},
    {id:'asafec02',title:"每日新闻2",conten:"你吃饭了吗"},
    {id:'asafec03',title:"每日新闻3",conten:"找到一个好工作"},
    {id:'asafec04',title:"每日新闻4",conten:"好消息！好消息！"}
    ])
</script>
<style scoped>

.contain{
    display: flex;
    justify-content: left;
    margin: 20px;
}
.contain ul{
    list-style: none;
    margin: 20px;
    padding: 0;
    display: block;
}
li{
    padding: 8px;
    font-size: 20px;
}
.news-content{
    border-radius:10px;
    width: 70%;
    /* width: 45%; */
    height: 250px;
    border:1px solid;
}

</style>