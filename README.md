# <div align=center><strong>The Hero's Legend</strong></div>

<br>


## 🚀 Technologies


The project was developed using the following technologies:

 - [Npm](https://docs.npmjs.com/cli/v7/configuring-npm/install) - Package Manager
 - [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) - Package Manager
 - [Java Script](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Language
 - [Type Script](https://www.typescriptlang.org/) - Language
 - [NodeJS](https://nodejs.org/pt-br/download/) - Environment
 - [Typeorm](https://typeorm.io/#/) - Database Orchestrator
 - [Express](http://expressjs.com/en/guide/routing.html) - Framework 
 ---
<br>

##  📁 How to download and run the project on a local machine 


```bash
    #Clone repository
    $ git clone https://github.com/IagoNascimentocode/TheHero-sLegend.git

    #Enter directory  
    $ cd TheHero-sLegend

    #Install dependencies
    $ npm install 

    #Start Project
    $ yarn dev
```
<br>


<br>

# <div align=center><strong>🗺️ Routes and features</strong></div>

## <strong>Accounts</strong> 

<br>

### Create User :
[ x ] - Should be able to save a user in the database.<br>
[ x ] - User password must be encrypted.<br>
[ x ] - Should not be able to save a user with an email already registered.<br>
[ x ] - Should be able create one chest.<br>
[ x ] - The chest must receive the id of the created user and the user must receive the id of the chest.<br>


---
### List All Users :
[ x ] - Should be able list all Users.<br>
[   ] - Only authenticate admin users can list all users.

### List User Chest :

[ x ] - Should be able to list users and chests by passing the user id.<br>
[   ] - Only authenticate admin users can list users chests.

---
### Find User By ID : 
[ x ] - Should be able find the user by id.<br>
[   ] - Only authenticate admin users can find users.

---
### Update User :
[ x ] - Should be able to change non-critical user data.<br>
[   ] - Only authenticated users can update data.

---
### Select Hero : 
[ x ] - Should be able to add a hero to a user and user to a hero.<br>
[ x ] - Should not be able to add the same hero to more than one user.<br>
[   ] - Only authenticated users can select Hero.

---
### Report_pdf :
[ x ] - Must be able to generate a PDF file.<br>
[ x ] - The user who made the request must have the option to print or download the file.
- Example:
![report](https://user-images.githubusercontent.com/62814416/128287515-748a68be-02bd-4032-a158-b77a53190dc9.png)

[   ] - Only authentication admin users can request reports.

---
### Delete User :
[ x ] - Should be able delete User.<br>
[   ] - Only authenticated users can list all users. 

---
<br><br>

## <strong>Heroes</strong> 

### Create Hero :
 [ x ] - Should be able to save a hero in the database.<br>
 [   ] - Only an authenticated admin user can create a new hero.

---
### Import Heroes by .csv file  :
 [ x ] - Should be able to create multiple heroes using a .csv file
 [   ] - Only an authenticated admin user can import heroes.

 ---
 ### List All Heroes :
 [ x ] - Should be able list all heroes.<br>
 [   ] - Only an authenticated admin users can list all heroes.

 ---
 ### Find Hero By ID :
 [ x ] - Should be able find the hero by id.<br>
 [   ] - Only an authenticated admin user can find hero by id.

 ---
 ### List Hero and User Relations :
 [ x ] - Should be able list hero and user by user id.<br>
 [    ] - Only an authenticated admin user can list hero and user by user id.

 ---
 ### Add Cash : 
 [ x ] - Should be able to add cash to hero.<br>
 [   ] - Only an authenticated admin user can add cash.
 
 ---
 ### Delete Hero :
 [ x ] - Should be able Delete hero.<br> 
 [   ] - Only an authenticated admin user can delete hero.

 ---
<br><br>

## <strong>Items</strong> 

### Create Items :
 [ x ] - Should be able to save a items in the database.<br>
 [   ] - Only an authenticated admin user can create a new item.

---
 ### List Items : 
 [ x ] - Should be possible to list all the items.

---
 ### Delete Items:
 [ x ] - Should be possible delete items.<br>
 [   ] - Only an authenticated admin user can delete a new item. 

---
<br><br>

## <strong>Stores</strong> 

### Create Stores :
 [ x ] - Should be able to save a stores in the database.<br>
 [   ] - Only an authenticated admin user can delete a store.<br> 
 
 ---

### Add Items : 
 [ x ] - Should be able to set an item on a shelf.<br>
 [   ] - Only an authenticated admin user can set item a shelf

 ---

 ### List All Store Items :
 [ x ] - Should be able list all items in the store

---
<br><br>


## <strong>Stadium</strong> 


### Basic Attack:
[ x ] - Should be able find heroes by users ID.<br>
[ x ] - The hero must be able to make a basic attack on another hero.<br> The attacking hero must have a movement faster than or equal to the hero receiving the attack to hit the attack.<br> If his movement is less he receives a counterattack.<br> It is only possible to remove a hero's health if his armor is less than zero. If the attack number is greater than the armor number, the armor breaks but the hero does not suffer damage in his life.

[   ] - If your hero has a life less than 0 he must be deleted

---