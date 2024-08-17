import PatientLayout from "@/layouts/PatientLayout";
import ChatPage from "@/pages/patient/ChatPage";
import HomePage from "@/pages/patient/HomePage";
import { Navigate, RouteObject } from "react-router-dom";

const PatientRouter: RouteObject[] = [
  {
    path: "/",
    element: <PatientLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
    ],
  },
];

export default PatientRouter;
