<template>
    <div class="search-container" style="background: #f9f9f9">
        <input type="text" v-model="searchQuery" placeholder="搜索歌曲" />
        <button @click="performSearch">搜索</button>
        <div v-if="searchResults">
            <h3>搜索结果</h3>
            <ul>
                <li v-for="song in searchResults" :key="song.id">
                    {{ song.name }} - {{ song.artist }}
                </li>
            </ul>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import request from '../api/axios.js'; // 确保路径正确
import {Search} from "../api/search.js"

const searchQuery = ref('');
const searchResults = ref(null);

const performSearch = async () => {

     const response = await request.get('/search/quick', {
        params:{
            key: searchQuery.value
        }
    });
    // let params = {'key': searchQuery.value, pageNo: 3, pageSize: 30,t:14};
    // console.log(params);
    // const response =await Search(params);
    searchResults.value = response.data;
    //输出看看
    console.log(searchResults.value);
};

</script>

<style scoped>
.search-container {
    display: flex;
    flex-direction: column;
    align-items: center;

}


</style>