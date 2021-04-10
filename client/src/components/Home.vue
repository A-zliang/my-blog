<template>
    <div class="container-fluid">
        <Header/>
        <Center_body/>
    </div>
</template>

<script>
import Header from './Header.vue';
import Center_body from './Center_body.vue'
export default{
    name:"Home",
    components:{
        Header,
        Center_body,
    }
}
</script>

<style scoped>
 .container-fluid{
        padding: 0 !important;
}
</style>