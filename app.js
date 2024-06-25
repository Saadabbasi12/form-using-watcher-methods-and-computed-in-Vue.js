const app= Vue.createApp({
//     data() {
//         return {
//             courseGoalA:"Finish the course and learn Vue!", 
//             courseGoalB:"Master Vue and Build Amazing Apps!",  
//             // courseGoalB:"<h2>Master Vue and Build Amazing Apps!</h2>",
//             vueLink: "https://vuejs.org/"   
//         };
//     },
//    methods: {
//     outputGoal() {
//         const randomNumber = Math.random();
//         if (randomNumber < 0.5) {
//             return this.courseGoalA;
//         } else {
//             return this.courseGoalB;
//         }
//     }
//    },
    data() {
        return {
           counter:10,
           name: '',
           confirmedName: '',
        };
    },
    watch: {
        name(value) {
        if(value === '') {
            this.confirmedName = '';
        } else {
       
            this.confirmedName= value ;
        }
    },
    },
    computed: {
        // fullName(){
        //     if(this.confirmedName === ''){
        //         return '';
        //     }
        //     return this.confirmedName+ ' ' + 'Abbasi';
        // }
    },
    methods: {
        resetInput() {
         this.confirmedName = '';
        },
        confirmInput() {
            this.confirmedName = this.name + '' + 'Abbasi';
        },
        submitForm(){
           
            alert('Submitted!');
        },
        setName(lastName){
            this.name = event.target.value + " " + lastName;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
    },
});
    app.mount('#user-goal')   













            