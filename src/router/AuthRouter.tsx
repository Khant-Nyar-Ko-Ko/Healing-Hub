import AuthLayout from "@/layouts/AuthLayout";
import PatientLoginPage from "@/pages/auth/patient-auth/PatientLoginPage";
import PatientRegisterPage from "@/pages/auth/patient-auth/PatientRegisterPage";
import TherapistLoginPage from "@/pages/auth/therapist-auth/TherapistLoginPage";
import TherapistRegisterPage from "@/pages/auth/therapist-auth/TherapistRegisterPage";
import { RouteObject } from "react-router-dom";

const AuthRouter: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "patient-login",
        element: <PatientLoginPage />,
      },
      {
        path: "patient-register",
        element: <PatientRegisterPage />,
      },
      {
        path: "therapist-login",
        element: <TherapistLoginPage />,
      },
      {
        path: "therapist-register",
        element: <TherapistRegisterPage />,
      },
    ],
  },
];
export default AuthRouter;
