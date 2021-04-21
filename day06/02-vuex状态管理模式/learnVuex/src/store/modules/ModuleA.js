export default {
    state: {
        name: "ModuleA-Jack"
    },
    mutations: {
        aupdateName(state, payload){
            state.name = payload
        }
    },
    actions: {
        asynUpdateName(context, name){
            setTimeout(() => {
                context.commit('aupdateName', name)
            }, 2000);
        }
    },
    getters: {
        fullname(state){
            return state.name + "xxx"
        },
        fullname2(state, getters, rootState){
            return getters.fullname +  rootState.counter
        }
    },
    modules: {}
}