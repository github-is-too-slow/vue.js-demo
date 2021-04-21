export default {
    // moreAgeStus(state){
    //     return function(age){
    //         return state.stus.filter(stu => stu.age > age)
    //     }
    // }
    moreAgeStus(state){
        return age => state.stus.filter(stu => stu.age > age)
    },
    moreAgeStusLength(state, getters){
        return age => getters.moreAgeStus(age).length
    }
}