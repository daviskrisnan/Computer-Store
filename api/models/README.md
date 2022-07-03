# Computer Store database

```bash
npx sequelize-cli model:generate --name user --attributes user_name:string,user_email:string,user_password:string,user_gender:string,user_birthdate:date,user_avatar:string,user_type:string

npx sequelize-cli model:generate --name product --attributes prod_name:string,prod_desc:string,prod_price:integer,prod_stock:integer,prod_expire:date,prod_weight:integer,prod_category:string,prod_brand:string,prod_condition:string,prod_total_sold:integer,prod_rating:integer,prod_views:integer,userId:integer

npx sequelize-cli model:generate --name order --attributes order_created_on:date,order_subtotal:integer,order_discount:float,order_tax:float,order_total_due:float,order_total_qty:integer,order_payt_trx_number:string,order_city:string,order_address:string,order_status:string,userId:integer

npx sequelize-cli model:generate --name line_items --attributes line_qty:integer,line_status:string,productId:integer,shoppingCardId:integer,orderId:integer

npx sequelize-cli model:generate --name shoppingCart --attributes shop_created_on:date,shop_status:string,userId:integer

npx sequelize-cli model:generate --name product_image --attributes prim_filename:string,prim_filesize:string,prim_filetype:string,prim_primary:boolean,productId:integer
```