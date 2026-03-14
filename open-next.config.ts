import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  override: {
    wrapper: "cloudflare-node",
    converter: "edge",
    incrementalCache: false,
    tagCache: "dummy",
    queue: "dummy",
  },
  // Ajouter cette option pour gérer les assets
  assets: {
    prefix: "",
  },
});