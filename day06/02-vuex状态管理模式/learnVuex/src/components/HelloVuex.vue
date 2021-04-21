<template>
   <div>
       <h2>我是Vuex组件</h2>
       <!-- <button @click="add">+</button>
       <button @click="sub">-</button>
       <p>{{$store.state.counter}}</p>
       <p>{{$store.getters.moreAgeStus(19)}}</p>
       <p>{{$store.getters.moreAgeStusLength(19)}}</p>
       <p>{{$store.state.info}}</p>
       <button @click="addStu(stu1)">添加学生</button>
       <button @click="addOne(stu2)">添加学生风格2</button>
       <button @click="addAttr">增加属性</button>
       <button @click="deleteAttr">删除属性</button>
       <button @click="updateName">更新name</button> -->
       <h2>Modules测试</h2>
       <p>{{$store.state.a.name}}</p>
       <button @click="aupdateName">更新名字</button>
       <p>{{getFullname()}}</p>
       <button @click="asynUpdateName">异步更新</button>
    </div>
</template>

<script>
   export default {
       name: 'HelloVuex',
       data() {
           return {
               stu1: {id: 1007, name: "Curry", age: 30},
               stu2: {id: 1008, name: "ALan", age: 25}
           }
       },
       components: {
       },
       methods: {
            add(){
                this.$store.commit("INCREMENT")
            },
            sub(){
                this.$store.commit("DECREMENT")
            },
            addStu(stu){
                this.$store.commit("ADDSTU", stu)
            },
            // 提交风格2
            addOne(stu){
                this.$store.commit({
                    type: "ADDONE",
                    stu
                })
            },
            addAttr(){
                this.$store.commit("ADDATTR")
            },
            deleteAttr(){
                this.$store.commit("DELETEATTR")
            },
            updateName(){
                this.$store
                    .dispatch("updateName", "中华小当家")
                    .then(name => {
                        console.log(name)
                    })
            },
            aupdateName(){
                this.$store.commit("aupdateName", "ModuleA-Rose")
            },
            getFullname(){
                return this.$store.getters.fullname2
            },
            asynUpdateName(){
                this.$store.dispatch("asynUpdateName", "Trumpe")
            }
        }
   }
</script>

<style>
</style>