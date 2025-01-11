require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const githubdata = {
  login: "hiteshchowdary",
  id: 26995718,
  node_id: "MDQ6VXNlcjI2OTk1NzE4",
  avatar_url: "https://avatars.githubusercontent.com/u/26995718?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/hiteshchowdary",
  html_url: "https://github.com/hiteshchowdary",
  followers_url: "https://api.github.com/users/hiteshchowdary/followers",
  following_url:
    "https://api.github.com/users/hiteshchowdary/following{/other_user}",
  gists_url: "https://api.github.com/users/hiteshchowdary/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/hiteshchowdary/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/hiteshchowdary/subscriptions",
  organizations_url: "https://api.github.com/users/hiteshchowdary/orgs",
  repos_url: "https://api.github.com/users/hiteshchowdary/repos",
  events_url: "https://api.github.com/users/hiteshchowdary/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/hiteshchowdary/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 0,
  public_gists: 0,
  followers: 4,
  following: 0,
  created_at: "2017-04-07T05:29:58Z",
  updated_at: "2020-05-03T05:41:32Z",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>saifu is king</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>saifu is youtube </h2>");
});
app.get("/github", (req, res) => {
  res.json(githubdata);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
