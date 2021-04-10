<template>
    <div>
         <div class="main" v-html="content"></div>
    </div>
</template>

<script>
import marked from 'marked'
    export default{
        data() {
            return {
                content: '',
                 markdownOption: {
                     bold: true, //粗体
                     toolbarsFlag: false
                 },
            }
        },
        created(){
            this.getContent()
        },
        methods: {
         async getContent(){
                let res = await this.$http.api_getContent();
                // 将markdown转换成html
                this.content = marked(res.data.data.content);
            }
        },
    }
</script>

<style scoped>
    .main{
        width: 80%;
        height: 200px;
        box-shadow: 2px 1px 10px rgb(126, 124, 124);
        margin: 30px auto;
        padding: 15px;
    }
</style>