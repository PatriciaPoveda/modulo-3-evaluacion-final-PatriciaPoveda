const getApi = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) =>
      data.results.map((character) => {
        return {
          name: character.name,
          image: character.image,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episode: character.episode,
          id: character.id,
        };
      })
    );
};

export default getApi;