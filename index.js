var GitHubApi = require("github");

var github = new GitHubApi({});
console.log(process.env.USER_TOKEN);
github.authenticate({
    type: "token",
    token: process.env.USER_TOKEN
});

github.users.getFollowingForUser({
    username: "rjorth"
}, function(err, res) {
    console.log(JSON.stringify(res));
});
