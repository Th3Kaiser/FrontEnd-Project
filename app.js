 
 
 // Project - After School Activities Project - CT3144 
 //  Vue.js - app.js  





 // Vue Application with a Array of 10 Objects, in this case Lessons.

 const { createApp } = Vue;
    createApp({
        data() {
            return {
                sitename: 'After School Activities Project',

                lessons: [
                    { LessonID: 1, name: 'Math', Location: 'Colindale', price: 10, time: ' 4:00 PM ', availableSlots: 5 },
                    { LessonID: 2, name: 'English', Location: 'Hendon', price: 12, time: ' 4:00 PM ', availableSlots: 5 },
                    { LessonID: 3, name: 'Music Lessons', Location: 'Colindale', price: 15, time: ' 5:00 PM ', availableSlots: 5 },
                    { LessonID: 4, name: 'Drama Club', Location: 'Hendon', price: 12, time: ' 5:30 PM ', availableSlots: 5 },
                    { LessonID: 5, name: 'Art Class', Location: 'Brent Cross', price: 10, time: ' 4:00 PM ', availableSlots: 5 },
                    { LessonID: 6, name: 'Coding Club', Location: 'Hendon', price: 15, time: ' 6:00 PM ', availableSlots: 5 },
                    { LessonID: 7, name: 'Science Club', Location: 'Colindale', price: 12, time: ' 4:30 PM ', availableSlots: 5 } ,  
                    { LessonID: 8, name: 'Sports Club', Location: 'Hendon', price: 10, time: ' 5:00 PM ', availableSlots: 5 },
                    { LessonID: 9, name: 'Chess Club', Location: 'Hendon', price: 8, time: ' 4:00 PM ', availableSlots: 5 },
                    { LessonID: 10, name: 'Dance Class', Location: 'Brent Cross', price: 15, time: ' 5:00 PM ', availableSlots: 5 }   


                ]
            }
        }   










    }).mount('#app');
    
