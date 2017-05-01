'use strict'

const booksApi = require('./api.js')
const booksUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetBooks = function (event) {
  event.preventDefault()

  booksApi.index()
    .then(booksUi.onSuccess)
    .catch(booksUi.onError)
}
const onGetBook = function (event) {
  event.preventDefault()
  const book = getFormFields(event.target).book

  if (book.id.length !== 0) {
    booksApi.show(book.id)
      .then(booksUi.onSuccess)
      .catch(booksUi.onError)
  } else {
    console.log('Please provide a book id!')
  }
}
const onDeleteBook = function (event) {
  event.preventDefault()
  const book = getFormFields(event.target).book

  if (book.id.length !== 0) {
    booksApi.destroy(book.id)
    .then(booksUi.onSuccess)
    .catch(booksUi.onError)
  } else {
    console.log('Please provide a book id!')
  }
}

const onUpdateBook = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const book = data.book
  console.log('You are inside onUpdateBook Function.')
  console.log('event.target: ', event.target)

  if (book.id.length !== 0) {
    booksApi.update(data)
    .then(booksUi.onUpdateSuccess)
    .catch(booksUi.onError)
  } else {
    console.log('Please provide ID to update book data!')
  }
}

const onCreateBook = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const book = data.book
  console.log('Your inside onCreate Book. eventtaget is : ', event.target)

  if (book.title.length !== 0 && book.author.length !== 0) {
    booksApi.create(data)
    .then(booksUi.onSuccess)
    .catch(booksUi.onError)
  } else {
    console.log('Please provide required data to Create!')
  }
}

const addHandlers = () => {
  $('#books-search').on('submit', onGetBooks)
  $('#book-search').on('submit', onGetBook)
  $('#book-delete').on('submit', onDeleteBook)
  $('#book-update').on('submit', onUpdateBook)
  $('#book-create').on('submit', onCreateBook)
}

module.exports = {
  addHandlers
}
