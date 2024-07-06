const start = () => {
  if (!sessionStorage.getItem('mongoDbPassword')) {
    const password = prompt('Введите пароль')
    sessionStorage.setItem('mongoDbPassword', password)
  }
}

start()
