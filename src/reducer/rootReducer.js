const initState = {
  posts: [
    {
      id: "1",
      title: "Je suis le premier article",
      body: "Voici le contenu de notre premier article"
    },
    {
      id: "2",
      title: "Je suis le deuxième article",
      body: "Voici le contenu de notre deuxième article"
    },
    {
      id: "3",
      title: "Je suis le troisième article",
      body: "Voici le contenu de notre troisième article"
    },
    {
      id: "4",
      title: "Je suis le quatrième article",
      body: "Voici le contenu de notre quatrième article"
    },
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;