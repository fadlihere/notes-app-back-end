const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: () => {},
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: () => {},
  },
];