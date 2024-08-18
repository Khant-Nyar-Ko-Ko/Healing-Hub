import Chat from "@/components/Chat";
import EmptyChat from "@/components/EmptyChat";
import PatientLayout from "@/layouts/PatientLayout";
import ChatPage from "@/pages/patient/ChatPage";
import CommunityPage from "@/pages/patient/CommunityPage";
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
      {
        path: "community",
        element: <CommunityPage />,
      },
      {
        path: "direct-chat",
        element: <Chat/>
      },
      {
        path: "empty-chat",
        element: <EmptyChat/>
      }
    ],
  },
];

export default PatientRouter;
