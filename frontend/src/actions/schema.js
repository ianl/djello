import { schema } from 'normalizr';

// Board
const card = new schema.Entity('cards');

const list = new schema.Entity('lists', {
  cards: [ card ]
});

const board = new schema.Entity('boards', { 
  lists: [ list ]
});

// Boards
const boards = [ board ];

export default {
  boards,
  board
}