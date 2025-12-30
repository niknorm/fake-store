import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/router.tsx";
import { Provider } from "react-redux";
import { store } from "./providers/store/appStore.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
