const notes = [
  {
    noteName: 'home',
    topics: [
      {
        topicName: 'topic-1',
        text: 'hi this is a text',
        topics: []
      }
    ]
  }

]

const hellWorld = (res) => {
  res.statusCode = 200
  res.end('hello world :)')
}

const getAllTodos = (res) => {
  res.statusCode = 200
  res.end(notes)
}

const postTodo = (res) => {
  res.statusCode = 201
  res.end('new note has been added')
}

const getTodo = (res) => {
  res.statusCode = 200
  res.end(notes)
}

const deleteTodo = (res) => {
  res.statusCode = 202
  res.end('note has been deleted')
}

const updateTodo = () => {
  res.statusCode = 202
  res.end('todo has been deleted :)')
}

export {hellWorld, getAllTodos, postTodo, getTodo, deleteTodo, updateTodo}