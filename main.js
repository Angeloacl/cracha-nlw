// const objeto não usa sinal de = e sim :. Ex: const link

const linksSocialMedia = {
  github: 'Angeloacl',
  youtube: 'youtube',
  facebook: 'angelocamilo.laet',
  instagram: 'angelocamilo3',
  twiter: '@angelocamiloacl'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfons() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userimage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfons()
