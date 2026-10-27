 
 
 
 // Project - After School Activities Project - CST3144 
 //   Using  - - Vue.js - -  app.js  

 // Student ID : M00946476
 // Luis Oliveira



 // Render Link 

const BACKEND_URL = 'https://m00946476-backend-server.onrender.com';



 // Vue Function to Return Data from Backend

 const { createApp } = Vue;
    createApp({
        data() {
            return {
                sitename: 'After School Activities Project',

            
                // Created an empty Array 

                lessons: [],

                cart: [],


                // Controls Whether the Lessons List or the Cart is Shown

                showCart: false,


                // Controls how the Lessons are Sorted by Type

                sortAttribute: 'price',
                sortAscending: true,




                // Customer Details for Order Placement 

                order:{

                    firstName : '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',
                    city: '',
                    postcode: ''
                },
 

            }
            
            },
            created(){
                this.fetchData();
            
        },

                computed: {
            sortedLessons() {
                const attribute = this.sortAttribute;
                const sorted = this.lessons.slice();





                sorted.sort(function(a, b) {
                    let valueA = a.price;
                    let valueB = b.price;

                    if (attribute === 'name') {
                        valueA = a.name;
                        valueB = b.name;
                    }
                    if (attribute === 'Location') {
                        valueA = a.Location;
                        valueB = b.Location;
                    }
                    if  (attribute === 'availableSlots') {
                        valueA = a.availableSlots;
                        valueB = b.availableSlots;
                    }

                    if  (valueA > valueB) return 1;
                    if (valueA < valueB) return -1;
                    return 0;
                });

                if (!this.sortAscending) {
                    sorted.reverse();
                }

                return sorted;
            },

            // Checkout button only enables when name and phone fields are filled



            canCheckout (){
                if (this.order.firstName === '' || this.order.phone === ''){
                    return false;
                }
                return true;
            }
        },

        // Method Fetches the Lessons Available On MongoDB and Stores in Lessons


        methods: {

            async fetchData(){
                const url = `${BACKEND_URL}/lessons`;
                let response = await fetch (url);
                this.lessons = await response.json();
            },






            async bookLesson(lesson) {
                if (lesson.availableSlots > 0) {
                    lesson.availableSlots--;
                    this.cart.push(lesson);
                    alert(`You have booked a lesson in ${lesson.name}.`);



                    const url = `${BACKEND_URL}/lessons/${lesson.LessonID}`;
                    await fetch(url, {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body:JSON.stringify({availableSlots:lesson.availableSlots})
                    });

                } else {
                    alert(`No Slots Available for  ${lesson.name}.`);
                }
            },

            // Check if user has Intered the Correct Details before placing the order


            async placeOrder() {
    const nameRegistration = /^[A-Za-z]+$/;
    const phoneRegistration = /^[0-9]{11}$/;

    if (!nameRegistration.test(this.order.firstName)) {
        alert('Please enter a valid first name.');
        return;
    }

    if (!phoneRegistration.test(this.order.phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    const url = `${BACKEND_URL}/orders`;
    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.order)
    });
    

    alert('Order placed successfully!');
    this.cart = [];
},
            async removeFromCart(lesson) {
                lesson.availableSlots++;
                const index = this.cart.indexOf(lesson);
                if (index > -1) {
                    this.cart.splice(index, 1);
                }

    const url = `${BACKEND_URL}/lessons/${lesson.LessonID}`;
    await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ availableSlots: lesson.availableSlots })
    });
            },

            // This Method inverts the Button Option
            invertCartVisibility() {
                this.showCart = !this.showCart;
            },
            toggleSortDirection(){
                this.sortAscending = !this.sortAscending;

            }
        }
    
    }).mount('#app');