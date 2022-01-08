async function getGithubData() {
    return fetch("https://api.github.com/users/walker007").then((res) =>
        res.json()
    );
}

function setUserDetails(user) {
    const profile = document.querySelector("div.pic");
    profile.style.backgroundImage = `url("${user.avatar_url}")`;
}

function main() {
    getGithubData().then((json) => {
        setUserDetails(json);
    });
}