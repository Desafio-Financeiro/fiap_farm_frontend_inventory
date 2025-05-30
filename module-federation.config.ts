import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "inventory",
  remoteType: "global",
  filename: "remoteEntry.js",
  exposes: {
    ".": "./src/components/InventoryComponent.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "react-router-dom": { singleton: true },
  },
});
