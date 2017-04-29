'use strict'

cnst createTaskSuccess = function () {
  console.log(data)
  api.getUserTasks()
  console.log('CreateTask completed successfully.')
}

const createTaskFailure = function (error) {
   console.error('createTaskFailure ran:', error)
 }


const getUserTasksSuccess = function () {
  displayTasks(data)
  console.log('getUserTasksSuccess: ', data)

}

const getUserTasksFailure = function (error) {
  console.error(error)
}


const deleteTaskSuccess = function () {
  console.log('deleteTaskSuccess: task deleted')
}

const deleteTaskFailure = function (error) {
  console.error('deleteTaskFailure error: ', error)
}

const  = function () {
  console.log('markCompleteSuccess completed - task edit')
  api.getUserTasks()
}

const markCompleteFailure = function (error) {
  console.error(error)
}





module.exports = {
  deleteTaskSuccess,
  deleteTaskFailure,
  deleteTaskSuccess,
  deleteTaskFailure,
  deleteTaskSuccess,
  deleteTaskFailure,
  deleteTaskSuccess,
  deleteTaskFailure,

  getUserTasksSuccess,
  getUserTasksFailure,

  deleteTaskSuccess,
  deleteTaskFailure,
  markCompleteSuccess,
  markCompleteFailure
}
