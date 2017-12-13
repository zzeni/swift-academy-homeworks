/* globals $ */

(function () {
    "use strict"

    let git
    const $userName = $("#username")
    const $image = $("#image")
    const $repo = $("#repo")
    const $json = $("#json")

    $.getJSON("https://api.github.com/users/TodorGarnev", data => {
        git = data
        console.log("git:", git)
        display(git)
    })

    const display = data => {
        const img = `<img src="${data.avatar_url}" class="rounded-circle" alt="image">`
        const repoUrl = `<a href="${data.repos_url}" target = "_blank">${data.repos_url}</a>`
        $userName.append(data.login)
        $image.append(img)
        $repo.append(repoUrl)
        $json.append(JSON.stringify(data, null, 2))
    }


})()
