function handleSubmit(e) {
  e.preventDefault()
  const userInput = event.target.userInput.value
  event.target.reset()
  const identicon = new Identicon(userInput)
  updateDOM(identicon.makeArray())
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
