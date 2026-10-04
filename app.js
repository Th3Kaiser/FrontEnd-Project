 
 
 // Project - After School Activities Project - CT3144 
 //  Vue.js - app.js  





 // Vue Application with a Array of 10 Objects, in this case Lessons.

 const { createApp } = Vue;
    createApp({
        data() {
            return {
                sitename: 'After School Activities Project',

                lessons: [





                    { LessonID: 1, name: 'Math', Location: 'Colindale', price: 10, time: ' 16:00 PM ','icon': 'fas fa-calculator' , availableSlots: 5 },
                    { LessonID: 2, name: 'English', Location: 'Hendon', price: 12, time: ' 16:00 PM ','icon': 'fas fa-book' , availableSlots: 5 },
                    { LessonID: 3, name: 'Music Lessons', Location: 'Colindale', price: 15, time: ' 17:00 PM ', 'icon': 'fas fa-music' , availableSlots: 5 },
                    { LessonID: 4, name: 'Drama Club', Location: 'Hendon', price: 12, time: ' 17:30 PM ', 'icon': 'fas fa-theater-masks' , availableSlots: 5 },
                    { LessonID: 5, name: 'Art Class', Location: 'Brent Cross', price: 10, time: ' 16:00 PM ', 'icon': 'fas fa-paint-brush' , availableSlots: 5 },
                    { LessonID: 6, name: 'Coding Club', Location: 'Hendon', price: 15, time: ' 18:00 PM ', 'icon': 'fas fa-laptop-code' , availableSlots: 5 },
                    { LessonID: 7, name: 'Science Club', Location: 'Colindale', price: 12, time: ' 14:30 PM ', 'icon': 'fas fa-flask' , availableSlots: 5 } ,  
                    { LessonID: 8, name: 'Sports Club', Location: 'Hendon', price: 10, time: ' 17:00 PM ', 'icon': 'fas fa-futbol' , availableSlots: 5 },
                    { LessonID: 9, name: 'Chess Club', Location: 'Hendon', price: 8, time: ' 14:00 PM ', 'icon': 'fas fa-chess' , availableSlots:  5 },
                    { LessonID: 10, name: 'Dance Class', Location: 'Brent Cross', price: 15, time: ' 21:00 PM ', 'icon': 'fas fa-music' , availableSlots: 5},  
                    
                ],

                // Array to hold the booked lessons named Cart 
                cart: [],

                showCart: false,

                order:{

                    firstName : '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',
                    city: '',
                    postcode: ''
                }


        
                
                

            }
            
        },
        methods: {
            bookLesson(lesson) {



                if (lesson.availableSlots > 0) {
                    lesson.availableSlots--;
                    this.cart.push(lesson);
                    alert(`You have booked a lesson in ${lesson.name}.`); 
                } else {
                    alert(`No Slots Available for  ${lesson.name}.`);



                }

            },

            // Added this Method to be able to user remove a lesson from the cart
            
            invertCartVisibility(showCart) {
                this.showCart = !this.showCart;
            }
        }
        



                

            


        











    }).mount('#app');

    
