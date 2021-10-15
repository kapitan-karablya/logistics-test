# Документация к REST API



### applications
#### Действия с заявками на грузоперевозки </br><br/>


`GET /applications` - получить список всех заявок.
<details>
<summary>Подробности</summary>
<h4>Параметры</h4>
<p>Нет параметров</p>
<h4>Ответы</h4>
<ul>
<li>
Код: 200 (successful operation)
<p>Пример полученного значения:</p>
          
```
  [{
    id: 7,
    date: "2021-10-05T11:16:40.000Z",  
    companyName: "Орлан",  
    comment: "",
    carrierFullName: "Суслов Филипп Максимович",
    carrierPhoneNumber: "+7305740259",
    atiCode: 47210,
  }]
```
</li>
</ul>
</details>

***
`GET /applications/{applicationId}` - получить заявку по ее номеру.
<details>
<summary>Подробности</summary>
<h4>Параметры</h4>
<p><b>Id</b> (path): number</p>
<h4>Ответы</h4>
<ul>
<li>
Код: 200 (successful operation)
<p>Пример полученного значения:</p>

```
 {
    id: 7,
    date: "2021-10-05T11:16:40.000Z",  
    companyName: "Орлан",  
    comment: "",
    carrierFullName: "Суслов Филипп Максимович",
    carrierPhoneNumber: "+7305740259",
    atiCode: 47210,
  }
  ```
</li>
<li>
Код: 400 (Invalid ID supplied)
</li>
<li>
Код: 404 (Application not found)
</li>
</ul>
</details>

***
`PUT /applications/{applicationId}` -  изменить существующую заявку.
<details>
<summary>Подробности</summary>
<h4>Параметры</h4>
<p><b>Id</b> (path): number</p>
<p><b>body</b>: object</p>
Пример: 

```
 {
    id: 7,
    date: "2021-10-05T11:16:40.000Z",  
    companyName: "Орлан",  
    comment: "",
    carrierFullName: "Суслов Филипп Максимович",
    carrierPhoneNumber: "+7305740259",
    atiCode: 47210,
  }
  ```
<h4>Ответы</h4>
<ul>
<li>
Код: 200 (successful operation)
</li>
<li>
Код: 400 (Invalid ID supplied)
</li>
<li>
Код: 404 (Application not found)
</li>
</ul>
</details>
   
***
`POST /applications` - создать новую заявку.
<details>
<summary>Подробности</summary>
<h4>Параметры</h4>
<p><b>body</b>: object</p>
Пример: 

```
 {
    date: "2021-10-05T11:16:40.000Z",  
    companyName: "Орлан",  
    comment: "",
    carrierFullName: "Суслов Филипп Максимович",
    carrierPhoneNumber: "+7305740259",
    atiCode: 47210,
  }
```
<h4>Ответы</h4>
<ul>
<li>
Код: 201 (successful operation)
</li>
</ul>
</details>

***
`DELETE /applications/{applicationId}` - удалить заявку.
<details>
<summary>Подробности</summary>
<h4>Параметры</h4>
<p><b>Id</b> (path): number</p>
<h4>Ответы</h4>
<ul>
<li>
Код: 200 (successful operation)
</li>
<li>
Код: 400 (Invalid ID supplied)
</li>
<li>
Код: 404 (Application not found)
</li>
</ul>
</details>


### user
#### операции с пользователем <br/><br/>

`POST /user` - создать пользователя

`PUT /user/{userName}` - изменить пользователя по его логину

`DELETE /user/{userName}` - удалить пользователя по его логину

`GET /user/login` - аунтентификация пользователя в системе

`GET /user/logout` - завершение текущего сеанса пользователя в системе

