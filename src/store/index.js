import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)


export default new Vuex.Store({
    state,
    /* actions: { 当转发数据较少的时候，可以直接调用
        changeCity(ctx, city) {
            //第一个参数是上下文，第二个是接收来的值

            ctx.commit('changeCity', city)
        }
    }, */
    mutations
    
})