<template lang="html">
	<div>
		<v-index></v-index>
		<div class="wrapper">
			<din class="intr">
				<div class="timer">
					<img src="../public/icons/dengji.png">
					<span @click="intrshow">0分钟</span>
				</div>
				<div class="avatar" @click="intrshow">
					<img src="../public/icons/avatar.jpg">
					<transition name="fold">
						<div class="intr1" v-show="intrShow">
							<h1>标题</h1>
							<br/>
							<p>正文正文</p>
						</div>
					</transition>
				</div>
				<div class="vip">
					<img src="../public/icons/vvip.png">
					<span @click="intrshow">开通</span>
				</div>
			</din>
			<p class="username" @click="intrshow">{{username}}</p>
			<div class="intr-song">
				<div class="t-intr-songs">
					<div class="t-intr-songs1">
						<router-link to="/">
						<img src="../public/icons/yinfu.png">
						<p>全部歌曲</p>
						</router-link>
					</div>
					<div class="t-intr-songs1">
						<router-link to="/">
						<img src="../public/icons/download.png">
						<p>下载歌曲</p>
						</router-link>
					</div>
					<div class="t-intr-songs1">
						<router-link to="/">
						<img src="../public/icons/zuijin.png">
						<p>最近播放</p>
						</router-link>
					</div>
				</div>
				<div class="b-intr-songs">
					<div class="b-intr-songs1">
						<img src="../public/icons/heart.png">
						<p>我喜欢</p>
						<small></small>
					</div>
					<div class="b-intr-songs1">
						<img src="../public/icons/mv.png">
						<p>下载MV</p>
					</div>
					<div class="b-intr-songs1">
						<img src="../public/icons/cd.png">
						<p>已购音乐</p>
					</div>
				</div>
			</div>
			<div class="blank"></div>
		</div>
		<div class="radio">
			<div class="radio1">
				<img src="../public/icons/run.jpg">
				<div class="title">
					<p>私人电台</p>
					<small>正文正文正文</small>
				</div>
			</div>
			<div class="radio2">
				<img src="../public/icons/run1.jpg">
				<div class="title2">
					<p>跑步电台</p>
					<small>正文正文正文</small>
				</div>
			</div>
		</div>
		<div class="blank1"></div>
		<div class="songlist">
			<p class="title">我 的 歌 单</p>
		</div>
		<router-link to="/link">
			<div class="list">
				<img src="../public/icons/jay1.jpg">
				<div class="number">
					<p>标题</p>
					<small></small>
				</div>
			</div>
		    <div class="list">
		      <img src="../public/icons/jay1.jpg" alt="">
		      <div class="number">
		          <p>标题</p>
		          <small></small>
		      </div>
		    </div>
		</router-link>
	<div class="blank2"></div>
	</div>
</template>
<script>
import index from '@/components/index.vue'
export default{
	data(){
		return{
			instShow:false,
			username:'COOSK'
		}
	},
	components:{
		"v-index":index
	},
	methods:{
		intrshow(){
			this.instShow = !this.intrShow
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../assets/style/header.scss';
</style>