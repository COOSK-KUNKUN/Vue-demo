<template>
	<div class="main-logo">
		<img :src="logoData[selectedNow].imgSrc" @click="toggleFlag">
		<span class="logoList-arrow" @click="toggleFlag"></span>

		<transition name="logofade">
			<ul class="logoList" v-show="logoListFlag&&mouseLeaveFlag" @mouseLeave="mouseLeaveList">
				<li class="logoItem" v-for="(item, index) in logoData" @mouseover="logoListHover(index)" :class="{selectback:index==logoNow}" @click="logoSelected(index)">
					<img :src="item.imgSrc">
					<!--selectback索引 此时的index等于logo出现的情况-->
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>

export default{
	data:function(){
		return{
			selectedNow:0,
			logoNow:-1,
			logoListFlag:false,
			mouseLeaveFlag:false,
			logoData:[{
				imgSrc:require('../assets/360_logo.png')
			},
			{
				imgSrc:require('../assets/baidu_logo.png')
			},
			{
				imgSrc:require('../assets/sougou_logo.png')
			}]
		}
	},
	methods:{
		toggleFlag:function(){
			this.logoListFlag = !this.logoListFlag;
			this.mouseLeaveFlag = true;
		},
		logoListHover:function(index){
			this.logoNow = index;
		},
		logoSelected:function(index){
			this.selectedNow = index;
			this.logoListFlag = false;
			this.$emit('getindex', this.selectedNow);
			// 触发父组件的自定义事件，向父组件传参数,selectNow是选择了哪个搜索引擎的索引
			//父组件得到了之后就可以指定搜索时跳转到哪个搜索引擎
		},
		mouseLeaveList:function(){
			this.mouseLeaveFlag = false;
			this.logoListFlag = false;
		}
	}
}
</script>

<style type="text/css">
ul{
	list-style: none;
	padding: 0;
	margin: 0;
}
.main-logo {
    width: 600px;
    height: 140px;
    position: relative;
}
.main-logo img{
	display: block;
	margin: 0 auto;
	user-select: none; /*文字不能被选中*/
	cursor: pointer; /*该属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状 */
}
.logoList-arrow{
	position: absolute;
	width: 0;
	height: 0;
	border:8px solid;
	border-color: #000 transparent transparent transparent;
	right: 100px;
	top:66px;
	cursor: pointer;
}
.logoList{
	position: absolute;
	top: 100%;
	width: 200px;
	left:50%;
	margin-left: -100px;
	z-index: 999999;/*默认的 z-index 是 0。Z-index -1 拥有更低的优先级,反之*/
	border:1px solid #d4d4d4;
}
.logoList li{
	width: 100%;
	height: 80%;
	background-color: #FEFEFE;
	line-height: 80px;
	padding-top: 1px;
}
.logoList li img {
    width: 100%;
    margin-top: 10px;
}
.logofade-enter-active,
.logofade-leave-active {
    transition: all  .5s;
}

.logofade-enter,
.logofade-leave-active {
    opacity: 0;
    transform: translateY(20px);
}
.selectback{
	background-color: #eee !important;
	/*! important ，可以更改默认的CSS样式优先级规则，使该条样式属性声明具有最高优先级*/
	cursor: pointer;
}
</style>