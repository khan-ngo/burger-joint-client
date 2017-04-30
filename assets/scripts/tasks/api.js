'use strict'

const app = require('../app.js')

const index = function () {
  return $.ajax({
    url: app.host + '/tasks',
    method: 'GET'
  })
}

const show = function (id) {
  return $.ajax({
    url: app.host + '/tasks/' + id,
    method: 'GET'
  })
}

const destroy = function (id) {
  return $.ajax({
    url: app.host + '/tasks/' + id,
    method: 'DELETE'
  })
}

const update = function (data) {
  return $.ajax({
    url: app.host + '/tasks/' + data.task.id,
    method: 'PATCH',
    data
  })
}
const create = function (data) {
  return $.ajax({
    url: app.host + '/tasks',
    method: 'POST',
    data: data
  })
}

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
