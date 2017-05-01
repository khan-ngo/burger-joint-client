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
  } else if (data.job) {
    console.log(data.job)
  } else {
    console.table(data.job)
  }
  $('#job-create-modal-form').trigger('reset')
  $('#addTaskMsgSuccess').html('New task Added.')
  setTimeout(function () {
    $('#addTaskMsgSuccess').fadeOut(800)
  }, 1000)
}

const onCreateJobError = function (data) {
  $('#job-create-modal-form').trigger('reset')
  $('#addTaskMsgError').html('Task already exist. Add a NEW task.')
  setTimeout(function () {
    $('#addTaskMsgError').fadeOut(1000)
  }, 1000)
}

const onGetJobsSuccess = function () {
  console.log('onGetJobsSuccess')
}
const onGetJobsError = (error) => {
  console.error(error)
}

const onGetJobSuccess = function () {
  console.log('onGetJobSuccess')
}
const onGetJobFailure = (error) => {
  console.error(error)
}
const onDeleteJobSuccess = function () {
  console.log('onDeleteJobSuccess')
}
const onDeleteJobFailure = (error) => {
  console.error('onDeleteJobFailure: ', error)
}

module.exports = {
  onCreateJobSuccess,
  onCreateJobError,
  onGetJobsSuccess,
  onGetJobsError,
  onGetJobSuccess,
  onGetJobFailure,
  onDeleteJobSuccess,
  onDeleteJobFailure,
  onSuccess,
  onSuccessNoContent,
  onError
}
