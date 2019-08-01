<template>
    <div class="movie-list">
        <ul >
            <router-link to="/movie/movieDetail"></router-link>
            <li v-for="movie in moveList" :key="movie.id" class="movie" @click="goDetail(movie.id)">
                <div class="movie-img">
                    <img :src="movie.img" alt="">
                </div>
                <div class="movie-info">
                        <p class="movie-name">{{ movie.nm }}</p>
                        <p class="pingfeng"> 评分：{{ movie.sc }}</p>
                        <!--<p>上映日期：{{ movie.rt }}</p>-->
                        <p>主演：{{ movie.star }}</p>
                        <p>{{ movie.showInfo }}</p>
                </div>
            </li>
        </ul>
    <div class="loading" v-show="loadingShow">
        <img src="../../assets/img/loading.gif" alt="">
    </div>
    <div class="tip" v-show="tip">
        <h4 >数据到底了</h4>
    </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            moveList:[],
            loadingShow:true,
            tip:false,

        };
    },
    mounted(){
        this.loadData();
            //监听滚动条事件
        window.onscroll = () =>{
            let clientHeight = document.documentElement.clientHeight
            let scrollTop = document.documentElement.scrollTop
            let scrollHeight = document.documentElement.scrollHeight
            if (clientHeight + scrollTop == scrollHeight) {
                console.log('到底了');
                this.loadingShow = true;
                if(!this.tip){
                    this.loadData();
                }else{
                    this.loadingShow = false;
                }

            }
        }

    },
    methods:{
        loadData(){
            let url2 = '/static/data/moviedata.json'
            Axios.get(url2)
                .then(res => {
                    console.log(res);
                this.loadingShow = false;
                let list = res.data.movieList;
                let data = list.slice(this.moveList.length, this.moveList.length + 10)
                //slice() 方法可从已有的数组中返回选定的元素。
                //arrayObject.slice(start,end)
                this.moveList = this.moveList.concat(data);
                if (data.length < 10) {
                    this.tip = true;
                    }
                })
                .catch(() => {
                    alert('获取数据失败');
                });
            },
            goDetail(movieId){
                //跳转
                console.log(movieId);
                this.$router.push('/movie/movieDetail/' + movieId)
            }
        }

    };
</script>
<style scoped>
.movie{
    display: flex;
    padding: 0 0.2rem;
    border-bottom: 1px solid #ccc;
}
.movie-img{
    flex-grow: 1;
    width: 0;
    margin-right: 0.2rem;
}
.movie-img img {
    width: 100%;
}
.movie-info{
    flex-grow: 2;
    width: 0;
}
.movie-list{
    margin:1rem 0;
}
.movie-name{
    font-weight: bolder;
}
.loading{
    text-align: center;
}
.tip{
    text-align: center;
}
</style>