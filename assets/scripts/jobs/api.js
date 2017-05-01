'use strict'

const app = require('../app.js')
const config = require('../config')

const index = function () {
  return $.ajax({
    url: app.host + '/jobs',
    method: 'GET'
  })
}

const destroy = function (id) {
  return $.ajax({
    url: app.host + '/jobs/' + id,
    method: 'DELETE'
  })
}

const update = function (data) {
  return $.ajax({
    url: app.host + '/jobs/' + data.task.id,
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

module.exports = {
  createJob,
  index,
  show,
  destroy,
  update
}
