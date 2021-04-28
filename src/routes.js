const { addNoteHandler, 
    getsAllNotes, 
    getNoteByIdHandler, 
    editByIdHandler, 
    deleteNoteByIdHandler, 
} = require("./handler");

const routes = [
    {
        method : 'POST',
        path : '/notes',
        handler : addNoteHandler,
    },
    {
        method : 'GET',
        path : '/notes',
        handler : getsAllNotes,
    },
    {
        method : 'GET',
        path : '/notes/{id}',
        handler : getNoteByIdHandler,
    },
    {
        method : 'PUT',
        path : '/notes/{id}',
        handler : editByIdHandler,
    },
    {
        method : 'DELETE',
        path : '/notes/{id}',
        handler : deleteNoteByIdHandler,
    }
];

module.exports = routes;