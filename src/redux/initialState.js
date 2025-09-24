const initialState = {
  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things i want ti check out'
    },
    {
      id: '2',
      title: 'Test list',
      description: 'Lorem ipsum'
    }
  ],

  columns: [
    {
      id: '1',
      listId: '1',
      title: 'Books',
      icon: 'book',
    },
    {
      id: '2',
      listId: '1',
      title: 'Movies',
      icon: 'film',
    },
    {
      id: '3',
      listId: '1',
      title: 'Games',
      icon: 'gamepad',
    },
    {
      id: '4',
      listId: '2',
      title: 'Test column',
      icon: 'heart',
    }
  ],

  cards: [
    { id: '1', columnId: '1', title: 'This is Going to Hurt', isFavorite: false },
    { id: '2', columnId: '1', title: 'Interpreter of Maladies', isFavorite: false  },
    { id: '3', columnId: '2', title: 'Harry Potter', isFavorite: true  },
    { id: '4', columnId: '2', title: 'Star Wars', isFavorite: false  },
    { id: '5', columnId: '3', title: 'The Witcher', isFavorite: true  },
    { id: '6', columnId: '3', title: 'Skyrim', isFavorite: false  }
  ],

  searchString: ""
};

export default initialState;