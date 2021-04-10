<template>
    
        <div class="header">
            <router-link to="/Login">
                <img src="../assets/images/touxiang.jpg" alt="头像">    
            </router-link>    
       </div>
</template>

<script>

</script>

<style scoped>
.header{
    width: 100%;
    height: 300px;
    position: relative;
    background: url(../assets/images/bg1.jpg) no-repeat;
    background-position:center;
    background-size: cover;
}
.header img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 45%;
}
</style>