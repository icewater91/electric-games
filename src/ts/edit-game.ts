import { Game, createGame, editGame, getGame } from "../utils/crud";
import { form, formButton, formInputs } from "./elements";

const run = async function () {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");
  if (!id) return;
  const game = await getGame(id);
  if (!game) {
    alert("Game not found");
    return;
  }
  formInputs.forEach((input) => {
    if (input.name === "title") {
      input.value = game.title;
    }
    if (input.name === "platform") {
      input.value = game.platform;
    }
    if (input.name === "description") {
      input.value = game.description;
    }
    if (input.name === "releaseYear") {
      input.value = String(game.releaseYear);
    }
    if (input.name === "image") {
      console.log(game.image);
      if ((game.image as any)?.url) {
        const img = document.createElement("img");
        img.src = (game.image as any).url;
        img.width = 200;
        input.parentElement?.appendChild(img);
      }
    }
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form) return;
    try {
      formButton && (formButton.innerHTML = "...Loading");
      // Get the form data from the target
      const formData = new FormData(event.target as HTMLFormElement);

      // Get the input values as an object
      const values = Object.fromEntries(formData.entries());
      const game: Partial<Game> = {
        title: String(values.title),
        platform: String(values.platform),
        image: values.image as File,
        releaseYear: parseInt(String(values.releaseYear)),
        description: String(values.description),
      };

      // Edit game endpoint
      await editGame(id, game);
      formButton && (formButton.innerHTML = "Edit");
      window.location.assign("/index.html");
    } catch (error) {
      console.log(error);
      formButton && (formButton.innerHTML = "Edit");
      alert("Something unexpected happened");
      return;
    }
  });
};
run();
