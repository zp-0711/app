export default{
    install(Vue){
        Vue.mixin({
            methods: {
                showName() {
                    alert(this.name);
                },
            },
        })
    }
}