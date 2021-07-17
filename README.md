<p align="center">
  <img alt="Prisma" width="200" title="Prisma" src=".github/icon.png" />
</p>

<h1 align="center">Prisma Example</h1>

<p align="center">
  <a href="#-techs">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=8257E5&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

<br>

## 🚀 Techs

Technologies used in this project.

- [Typescript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/) with [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_content=na&utm_source=google&utm_campaign=gs_americas_brazil_search_core_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624308)
- [Express](https://www.npmjs.com/package/express)

## 💻 Project

This project is a simple Prisma example using MongoDB.

Test this project.

- needs MongoDB
- create `.env` file with the same value from `.env.sample` and configure your MONGO URL
- yarn or npm install
- yarn dev
- execute routes in your `insomnia`



---

Create user.
```js
POST http://localhost:3000/users

{
	"name": "Rich",
	"email": "hello@prisma.com"
}

```

---

Create post from user.
```js
POST http://localhost:3000/posts

{
	"title": "My first post",
	"body": "Lots of really interesting stuff",
	"slug": "my-first-post",
	"userId": #userId
}

```

---

Create comment from post.
```js
POST http://localhost:3000/comments

{
	"comment": "Great post!",
	"postId": #postId
}
```

---

Find all users with posts and comments.
```js
GET http://localhost:3000/users
```


## 📝 License

Used MIT license.

---

By Roberto Umbelino 👽
