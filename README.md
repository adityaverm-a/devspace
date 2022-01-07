# DevConnector 

> Social network for developers

This is my version of the MERN stack application from the "MERN Stack Front To Back" course on [Udemy](https://www.udemy.com/mern-stack-front-to-back/?couponCode=TRAVERSYMEDIA). It is a social network app that includes authentication, profiles and forum posts. I took some help to build the backend of this project from the udemy course, i tried to fully customize the frontend of this application, I added material-ui for styling, toasts, real-time commenting, reponsive layout with material-ui, etc.

---

# Quick Start 🚀

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```
