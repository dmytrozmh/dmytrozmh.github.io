var vue = new Vue({
    el: '#app',
    data: {
        message: 'step',
        quantity: 1,
        price: 20.99,
        shipping: 5.99,
        tax: 5.32,
        currency: '$',
        step: 1,
        textdone: 'Done',
        class2: 'grid-step',
        link1: 'url1',
        name: '',
        phone: '',
        email: '',
        field1: '',
        field2: '',
        error: [],
    },
    methods: {
        subTotalPrice: function () {
            let result = this.quantity * this.price;
            return result.toFixed(2);
        },
        totalPrice: function () {
            let subTotalPrice = this.quantity * this.price;
            let result = subTotalPrice + this.shipping + this.tax;
            return result.toFixed(2);
        },
        validate: function(){
            // if(this.name.length <2){
            //    this.error.push('name');
            // }
            // if(this.phone.length <2) {
            //     this.error.push('phone');
            // }
            // if(this.email.length <2){
            //     this.error.push('email');
            // }
            // if(this.field1.length <2){
            //     this.error.push('field1');
            // }
            // if(this.field2.length <2){
            //     this.error.push('field2');
            // }

        }
    }

});