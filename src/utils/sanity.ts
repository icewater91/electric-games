import { createClient } from "@sanity/client";

export default createClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: "l5j723x2",
  dataset: "production",
  token:
    "sknP9zc0ldQhtxgnoMaC9WMo586FSusr3sePVwySXNLpEXTWVKAwsa4piGKRYObbG5o5SOCmDn4TQXI8fN08SPALC5XpMQqqagdJT0jSw6sCzyAUXdyFbgllVGd8wbBYz1ldeNX99dbdqohR3cJTJ53CfTtcXHmSF1bfPC9TbJqDdfIVrM74",
  useCdn: false,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
});
