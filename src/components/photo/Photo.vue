<template>
    <div>
        <common-header bg="rgb(100, 115, 52)">
            <span slot="title">Photo</span>
        </common-header>
        <router-view></router-view>
        <common-footer bg="rgb(100, 115, 52)"></common-footer>
    </div>  
</template>
<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
export default {
    components:{
        CommonHeader,
        CommonFooter
    }
}
</script>
<style scoped>

</style>

