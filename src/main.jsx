import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
const queryClinet = new QueryClient();
//   {
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//     },
//   },
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClinet}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
