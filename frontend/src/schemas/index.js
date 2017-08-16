import { schema } from 'normalizr';

// Cards
const card = new schema.Entity('cards');

// Lists
const list = new schema.Entity('lists', {
  cards: [ card ]
});

// Boards
const board = new schema.Entity('boards', { 
  lists: [ list ]
});

export default board;