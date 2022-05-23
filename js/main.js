const app = Vue.createApp({
    data : () => ({
        newItem : "",
        todos : [],
        msg : 'hey'
    }),
    methods : {
        //アイテム追加のメソッド
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
        },
        //アイテム削除のメソッド 引数にhtmlのv-forで回しているindexを引いている
        //indexは必ずしもプロパティ名をindexにしなくてもいい indekkusuでもいいし他でもいい
        deleteItem : function (index){
            console.log("Delete!!!")
            console.log(index)
            this.todos.splice(index,1)
        }

    },
})
app.mount("#app")