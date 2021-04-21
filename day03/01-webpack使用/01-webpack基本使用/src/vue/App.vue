<template>
    <div class="page">
        <h2>{{name}} + {{age}}</h2>
        <button @click="btnClick">按钮，点我一下？</button>
        <Cpn></Cpn>
    </div>
</template>

<script type="text/ecmascript-6">
    import Cpn from "./Cpn";

    export default {
        name: "App",
        data(){
            return {
                name: "Jack",
                age: 18
            }
        },
        methods: {
            btnClick(){
                console.log("showMsg!")
            }
        },
        components: {
            Cpn
        }
    }
</script>

<style scoped>
    .page {
        color: orange;
    }
</style>
