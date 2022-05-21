const app = Vue.createApp({
    data : () => ({
        newItem : "",
        todos : [],
    }),
    methods : {
        addItem : function (){
            //console.log("clicked!!!")
            //入力が空だったらリターンして処理をスキップする
            if(this.newItem === "") return 
                let todo = {
                    item : this.newItem,
                    //チェックボックスのデフォルト false　チェックするとtrueになる
                    isDone : false 
                    
                }
                this.todos.push(todo)
                //addボタン押した際にテキストボックスを空にする
                this.newItem = ""
        }
    },
})
app.mount("#app")