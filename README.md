# Farmgrove Project
In simple terms, this software helps to propagate farmers and local traders products to a much larger audience

### Problem Statements
* We want to make raw and processed farm products more accessible in Urban areas.
* We are also trying to reduce food wastage by making it available to people that actually need it.
* We want to help local traders grow their businesses.
* Making farmers and local traders accountable, which will help in their decision making

### Team Ideas
* We can create a platform where people can just hop on and pay for products ✔
* Our platform will provide interesting statistics on how well our sellers are doing ✔
* We also expose buyers to variety of sellers to choose from, which normally isn't an option ✔
* As the business grows, we'll start handling the packaging which will help with branding and advert ✔


### Tech Stack
* Authentication, Database and Storage will be handled using Firebase
* Payment handling using Google Pay
* Cloud Functions for notifications
* React JS for building the UI
* Tailwind CSS for styling
* State Management using React Context


### How do we generate income
* We're looking at a potential 12% from seller sales ✔
* Other than that, we'll be introducing running paid ads ✔

### What we'll be doing differently
* An authentication screen that clearly distinguishes registering as a buyer or as a seller ✔
* A wow dashboard for our sellers 😎
* Our seller dashboard will have analytics and necessary stats which will help sellers narrow down their customers and who to sell too ✔
* A simple but beautiful UI for our customers ✔
* Taking into consideration UX and not building a complex software ✔

## Brief Software Usage
#### Seller
* A new trader opens an account as a Seller
* Well structured information saving using Firebase Cloud Firestore
* Seller lists products for sale
* We make use of our Image Recognition Microservice to verify this
* Seller has access to recent transactions, customers, well detailed graphs showcasing indivual business growth
* Seller has a notification pane to be filled by Buyers' purchases


#### Buyer
* Opens an account as a Buyer
* Welcomed to our beautiful UI
* Has the luxury of checking products for sale
* Adds to his/her cart needed products and places an order
* We hold on to the money and notify the Seller of the purchase
* Seller does his/her part and the money is remitted and everyone is happy

