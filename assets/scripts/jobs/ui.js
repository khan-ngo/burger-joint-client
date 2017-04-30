'use strict'

const onSuccess = function (data) {
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.task) {
    console.log(data.book)
  } else {
    console.table(data.books)
  }
}

const onSuccessNoContent = function () {
  console.log('Your request was successful, and returned no content')
}

const onError = function (response) {
  console.error(response)
}

const onCreateJobSuccess = function (data) {
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.task) {
    console.log(data.book)
  } else {
    console.table(data.books)
  }
}

const onCreateJobError = function (data) {
  console.error('onCreateJobError : something wrong ... ')
}

module.exports = {
  onCreateJobSuccess,
  onCreateJobError,
  onSuccess,
  onSuccessNoContent,
  onError
}
