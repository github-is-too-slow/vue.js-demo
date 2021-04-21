const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1001,
                name: "母猪的产后护理",
                date: "2020-2-28",
                price: 123,
                count: 1,
            },
            {
                id: 1002,
                name: "现代操作系统",
                date: "2020-2-28",
                price: 27,
                count: 1,
            },
            {
                id: 1003,
                name: "计算机网络",
                date: "2020-2-28",
                price: 120,
                count: 1,
            },
            {
                id: 1004,
                name: "麦田里的守望者",
                date: "2020-2-28",
                price: 50,
                count: 1,
            },
            {
                id: 1005,
                name: "和平与战争",
                date: "2020-2-28",
                price: 30,
                count: 1,
            }
        ]
    },
    methods: {
        increment(index){
            this.books[index].count++
        },
        decrement(index){
            this.books[index].count--
        },
        remove(index){
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice(){
            let totalPrice = 0;
            for(let book of this.books){
                totalPrice += book.price * book.count;
            }
            return totalPrice;
        }
    },
    filters: {
        showPrice(price){
            return '￥' + price.toFixed(2);
        }
    }
})