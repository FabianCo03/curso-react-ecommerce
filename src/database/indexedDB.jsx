// Data base
const dbName = 'dataBase' // Cambia al nombre de tu base de datos
const dbVersion = 1 // Cambia la versión según tus necesidades

const request = window.indexedDB.open(dbName, dbVersion)

let db

request.onsuccess = (event) => {
  db = event.target.result
}

export { db }

request.onupgradeneeded = (event) => {
  const db = event.target.result
  const dbProducts = db.createObjectStore('productos', { keyPath: 'id' })
  const dbUser = db.createObjectStore('usuarios', { keyPath: 'id' })
}
