# After School Activities Project - CST3144 Full Stack

An app that lets students and their parents browse and book after school classes, built with Vue.js on the front-end and Node.js/Express/MongoDB on the back-end.

## What's done so far

I started by building the front-end in Vue, showing the list of lessons and letting users add them to a cart. From there I added a cart counter, a checkout form, and the ability to show/hide the cart and remove lessons from it. I also added validation on the checkout form (name and phone number) and a confirmation message once an order is placed, plus sorting by different attributes (name, location, price, availability).

After that I built the back-end from scratch with Express, including a logger middleware, static file middleware for lesson images, and the three REST routes (GET for lessons, POST for orders, PUT for updating availability). I connected it to MongoDB Atlas using the native driver, and then connected the front-end to it using fetch.

Both sides are now deployed:
- Back-End (render.com): https://M00946476-backend-server.onrender.com
- Front-End (GitHub Pages): https://th3kaiser.github.io/FrontEnd-Project/

