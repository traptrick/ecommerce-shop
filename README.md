Features

1. It is just like an ecommerce website/app.

2. We assume the following modules to be present

Navigation
Home Page
Product Page
Cart System
Product/Order Placement Page

3. The starting data of this application can be assumed to come from a JSON file

4. As an example, A JSON file has been given to you. You have to add minimum 10 data in the json provided.

product_lists.json 5. Each of the element in the JSON file represents a product

name: The name of the product (string)
productId: The Id of the product which can be assumed to be unique uid (string)
brandName: brand of the product (string)
category: category of the product (string)
companyAssured: represents the company assured Product(boolean)
rating: Average rating of the product (float)
price: Final price of the product(float)
discount: discount on a product (float) in %
imageURL: image of a product
sellerName: Name of the seller(string)
isNewProduct:type of the product(boolean) You should use all the elements provided in the json in your user-interface or Api

6. It should have the following features

When the app starts, the app loads the list of the products and displays the product with specified data.
There can be number of navigations in the header/drawer. eg: Home , My Favorites,My Cart , My Account,etc.
User can select one or more product.
User can add the products to the cart system.
User can see the selected products in the cart system.
User can remove the product from the cart.
User can see a brief preview before clicking on the product.
User can buy a product.
When an user go for buying a product, he/she will get a form in which he/she should must fill the mandatory fields like Name,email,Phone Number,Address,Pincode,etc.
After filling the form, user will get a message for successful order placement.
User can flag a product as a favorite.
User can able to see his/her favorites product inside the My Favorites section.
