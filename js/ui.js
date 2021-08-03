class HTMLUI {
  showErrorCompleteFields(message) {
    const error = document.querySelector('#error')
    error.innerText = message
    error.style.opacity = '1'

    setTimeout(() => {
      error.style.opacity = '0'
    }, 3000);
  }
}