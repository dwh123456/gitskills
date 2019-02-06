export default {
    changeCity (state, city) {
        //state为公用数据，city为接收来的值
        state.city = city
        //本地存储
        try {
            localStorage.city = city
        } catch (e) {

        }
        
    }
}