import { createClient } from "@sanity/client";

export default createClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: "2q6d0bo6",
  dataset: "staging",
  token:
    "skzIKcr1hILJweGsQ1ZX1UgUmECkuORb2IyvKuyfhPlOksq5c2EKUzTqhhBs3sgyNMGvoxV3BSRJidPlXKPShCm2DhWmLlKxJLem9LXhicWSCU9PZ0d4zeiwGSBxf1m8c0qEMGOuiW55fuMTJZVJ0Dc6aOhaHH7d0gzGq9gGbdwIF76j97fG",
  useCdn: false,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
});
