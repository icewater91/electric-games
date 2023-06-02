import { Game, createGame } from "../utils/crud";
import { form, formButton } from "./elements";

console.log(form, "here");
form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form) return;
  try {
    formButton && (formButton.innerHTML = "...Loading");
    formButton && (formButton.disabled = true);
    const formData = new FormData(event.target as HTMLFormElement);

    // Get the input values as an object
    const values = Object.fromEntries(formData.entries());
    const game: Game = {
      title: String(values.title),
      platform: String(values.platform),
      image: values.image as File,
      releaseYear: parseInt(String(values.releaseYear)),
      description: String(values.description),
    };
    console.log(values);

    await createGame(game);
    formButton && (formButton.innerHTML = "Submit");
    formButton && (formButton.disabled = true);
    window.location.assign("/index.html");
  } catch (error) {
    console.log(error);
    formButton && (formButton.innerHTML = "Submit");
    formButton && (formButton.disabled = true);
    alert("Something unexpected happened");
  }
});
