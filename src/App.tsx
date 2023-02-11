import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Landing } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
