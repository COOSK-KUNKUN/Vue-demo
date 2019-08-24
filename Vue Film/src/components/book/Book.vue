<template>
    <div class="book">
        <common-header bg="rgb(121, 85, 72)">
            <span slot="title">Book</span>
        </common-header>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
        <router-view></router-view>
        <common-footer bg="rgb(121, 85, 72)"></common-footer>
    </div>
</template>
<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    components:{
        CommonHeader,
        CommonFooter,
        'swipe': Swipe,
        'swipe-item': SwipeItem
    }
}
</script>
<style scoped>
.book{
    margin: 1rem 0;
}
.my-swipe {
  top:100px;
  height: 400px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-image: url('https://wx4.sinaimg.cn/mw690/70c9314ely1g5gso5n267j23uv2kle8g.jpg');
  color: #fff;
}

.slide2 {
  background-image: url('https://wx2.sinaimg.cn/mw690/70c9314ely1g5gsomh6y1j23uw2klqvh.jpg');
  color: #000;
}

.slide3 {
  background-image: url('https://wx1.sinaimg.cn/mw690/70c9314ely1g5gsnifdigj23uw2klb2p.jpg');
  color: #fff;
}
</style>