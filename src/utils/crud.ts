import sanity from "./sanity";

export type Game = {
  title: string;
  releaseYear: number;
  description: string;
  image: File;
  platform: string;
};

export async function getGames(): Promise<Game[]> {
  const games = await sanity.fetch('*[_type == "game"]');
  console.log(games);
  return games;
}
export async function getGame(id: string): Promise<Game | undefined> {
  const game = await sanity.fetch(`*[_type == "game"&&_id == $id][0]`, { id });
  console.log(game);
  return game;
}

export async function createGame(game: Game) {
  const image = await sanity.assets.upload("image", game.image, {});

  const result = await sanity.create({ _type: "game", ...game, image });
  return result;
}

export async function editGame(
  id: string,
  { image: gameImage, ...game }: Partial<Game>
) {
  try {
    if (gameImage?.name) {
      const image = await sanity.assets.upload("image", gameImage, {});
      return await sanity
        .patch(id)
        .set({ ...game, image })
        .commit();
    }

    return await sanity
      .patch(id)
      .set({ ...game })
      .commit();
  } catch (error) {
    console.log(error);
    alert("Unexpected error when editing game");
  }
}

export async function deleteGames(id: string) {
  try {
    return await sanity.delete(id);
  } catch (error) {
    console.log(error);
    alert("Unexpected error when deleting game");
    return false;
  }
}
