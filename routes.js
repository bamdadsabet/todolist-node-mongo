import {hellWorld ,getAllTodos, postTodo, getTodo, deleteTodo, updateTodo} from './utils.js'

const routes = {
  '/': {
    'GET': hellWorld
  },
  '/todo': {
    'GET': getAllTodos,
    'POST': postTodo
  },
  'todo/:id': {
    'GET': getTodo,
    'DELETE': deleteTodo,
    'PUT': updateTodo
  }
}

export { routes }