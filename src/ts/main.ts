import { deleteGames, getGames } from "../utils/crud";

const run = async function () {
  const games = await getGames();

  // Map through all games and create a card for them
  const cards = games.map(
    (game) =>
      `
 <div class="card">
        <div class="card__image">
          <img
            src="${(game.image as any)?.url}"
            alt="Card image"
          />
        </div>
        <div class="card-content">
          <h2 class="card-content__title">${game.title}</h2>
          <p class="card-content__date">Release Year: ${game.releaseYear}</p>
          <p class="card-content__platform">Platform: ${game.platform}</p>
        <div class="card-action">
            <button data-id="${
              (game as any)._id
            }" class="card-action__preview button">Preview</button>
            <button data-id="${
              (game as any)._id
            }" class="card-action__delete button">Delete</button>
        </div>
        </div>
      </div>
      `
  );

  // Insert the cards to #app
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = cards.join(" ");

  const cardActionPreviewButton = document.querySelectorAll<HTMLButtonElement>(
    ".card-action__preview"
  );

  const cardActionDeleteButton = document.querySelectorAll<HTMLButtonElement>(
    ".card-action__delete"
  );

  // Navigate to game.html if preview is clicked
  cardActionPreviewButton.forEach((button) =>
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      if (!id) return;
      window.location.assign(`/game.html?id=${id}`);
    })
  );
  // Handle delete game for all elements
  cardActionDeleteButton.forEach((button) =>
    button.addEventListener("click", async () => {
      const id = button.dataset.id;
      if (!id) return;

      button.innerHTML = "...Loading";
      button.disabled = true;
      button.classList.add("card-action__delete-active");
      await deleteGames(id);
      window.location.assign("/index.html");
    })
  );
};
run();
