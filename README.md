**Scenario 1** : SIMPLE

When user tries  to access localhost:3000 . For the first time we should show him the msg like "HOME PAGE"
route : /

**Scenario 2** : MULTIPLE

Create two routes /about and /contact . Display relevant data


**Scenario 3** : NESTED ROUTING

Create 3 routes 
/blog : MSG should be "BLOG PAGE"
/blog/first : "BLOG FIRST PAGE"
/blog/second : "BLOG SECOND PAGE"


**Scenario 4** : DYNAMIC ROUTING

Create 2 routes 
/product : Gives a list of products
/product/id : /product/1 on this page show the details of product 1 details



**POINTS TO NOTE** When you are creating dynamic route like product folder . In this case when in localhost when someone is hitting url like /product/user or /product/12 then it will first of all check that if there is already any component defined then it will display that component otherwise it will go to the dynamic route.


**Scenario 5** : NESTED DYNAMIC ROUTING

Create routes like : 
/employee/[id]
/employee/[id]/review/[id]



**Scenario 6** : Catch all Routes

Imagine a scenario of the documentation website where the routes are nested on next level like :
/docs/concept1/topic1

To make such routing we will have to create a lot of files if we have a lot of concepts and lots of topics 
But we can reduce the number by making those routes dynamic
And we can reduce this number to just 1 by catch the route. 

It says that any route which matches with the main first route like /docs over here and after /concept1/topic1 all are dynamic route . So we can catch them by [...params]



**LINK** 
This helps you to create Client side routing
replace : allows you to go back to home page, so browser back will take you completely back to main home page


**Scenario 7** 
Navigate to a page on button click



**Scenario 8**
Customised 404 page. You will have to create file named as 404.js