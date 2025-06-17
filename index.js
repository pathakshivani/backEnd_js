require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "pathakshivani",
  "id": 101668002,
  "node_id": "U_kgDOBg9Uog",
  "avatar_url": "https://avatars.githubusercontent.com/u/101668002?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pathakshivani",
  "html_url": "https://github.com/pathakshivani",
  "followers_url": "https://api.github.com/users/pathakshivani/followers",
  "following_url": "https://api.github.com/users/pathakshivani/following{/other_user}",
  "gists_url": "https://api.github.com/users/pathakshivani/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pathakshivani/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pathakshivani/subscriptions",
  "organizations_url": "https://api.github.com/users/pathakshivani/orgs",
  "repos_url": "https://api.github.com/users/pathakshivani/repos",
  "events_url": "https://api.github.com/users/pathakshivani/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pathakshivani/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "shivani21",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2022-03-15T19:04:24Z",
  "updated_at": "2025-06-16T18:46:07Z"
}


app.get('/', (req, res) => {
    res.send('hey shii')
})

app.get('/login' , (req, res) => {
    res.send('pathakshivi2003@gmail.com')
})

app.get('/github' , (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT , () => {
    console.log(`app is running on ${port}`);
})

app.listen(process.env.PORT, (res, req) => {
    console.log("connected to DB")
})
