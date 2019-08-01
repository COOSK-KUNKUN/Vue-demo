<template>
    <ul class="footer" :style="{background:bg}">
        <li><router-link to="/movie/movieList">电影</router-link></li>
        <li><router-link to="/music">音乐</router-link></li>
        <li><router-link to="/book">书籍</router-link></li>
        <li><router-link to="/photo">图片</router-link></li>
    </ul>
</template>
<script>
export default {
    props:['bg']
}
</script>
<style scoped>
.footer{
    height: 1rem;
    background-color:rgb(44, 71, 221);
    position: fixed;
    bottom: -3px;
    width: 100%;
    display: flex;
    line-height: 1rem;
}
.footer li{
    flex-grow:1;
    text-align: center;
    color: #fff;
}
.footer li a{
    color: #fff;
}
.footer a.router-link-active{
    /*鼠标点击到字上的变化*/
    color: #fff;
    font-size: larger;
    font-weight: bold;
}
</style>

