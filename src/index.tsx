import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";

import "./styles/index.css";
import App from "./App";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
