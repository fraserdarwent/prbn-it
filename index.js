function shorten(url, resultElement) {
  fetch(`https://prbn.it/${url}`, { method: "POST", })
    .then((response) => response.text())
    .then((body)=> {
      resultElement.innerText = body
      resultElement.setAttribute('href', body)
    })
    .catch((error) => {
      console.log(error)
    })
}