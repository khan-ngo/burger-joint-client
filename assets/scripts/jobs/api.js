'use strict'

const store = require('../store')
const app = require('../app.js')
const config = require('../config')

const index = function () {
  return $.ajax({
    url: app.host + '/jobs',
    method: 'GET'
  })
}

const getJobs = function () {
  return $.ajax({
    url: app.host + '/jobs',
    method: 'GET'
  })
}

const update = function (data) {
  console.log('You made it inside the update api')

  return $.ajax({
    url: app.host + '/jobs/' + data.job.id,
    method: 'PATCH',
    data
  })
}

const createJob = function (data) {
  console.log('You made it inside the CreateJob api')

  return $.ajax({
    url: config.apiOrigin + '/jobs',
    method: 'POST',
    data
  })
}

const show = function (id) {
  return $.ajax({
    url: app.host + '/jobs/' + id,
    method: 'GET'
  })
}

const getUserTasks = function () {
  return $.ajax({
    url: config.apiOrigin + '/jobs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    dataType: 'json'
  })
}

const destroy = function (id) {
  return $.ajax({
    url: app.host + '/jobs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createJob,
  index,
  getJobs,
  show,
  destroy,
  update,
  getUserTasks
}
