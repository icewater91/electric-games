import { deleteGames, getGame } from "../utils/crud";
import {
  gameDeleteButton,
  gameDescription,
  gameImage,
  gamePlatform,
  gameReleaseYear,
  gameTitle,
  navbarEditButton,
} from "./elements";

const run = async function () {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");
  if (!id) return;
  // Get game by id
  const game = await getGame(id);
  // Return out if a game for the specific id doesn't exist
  if (!game) {
    alert("Game not found");
    return;
  }

  navbarEditButton?.addEventListener("click", () => {
    window.location.assign(`/edit-game.html?id=${id}`);
  });
  gameDeleteButton?.addEventListener("click", async () => {
    if (!gameDeleteButton) return;
    gameDeleteButton.innerHTML = "...Loading";
    gameDeleteButton.disabled = true;
    gameDeleteButton.classList.add("card-action__delete-active");
    await deleteGames(id);
    window.location.assign("/index.html");
  });

  // Populate the dom
  game.title && (gameTitle!.innerText += game.title);
  game.platform && (gamePlatform!.innerText += game.platform);
  game.releaseYear && (gameReleaseYear!.innerText += String(game.releaseYear));
  game.image && (gameImage!.src = String((game.image as any).url));
  game.description && (gameDescription!.innerText += String(game.description));
};
run();
