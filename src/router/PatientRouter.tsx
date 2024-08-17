import PatientLayout from "@/layouts/PatientLayout";
import HomePage from "@/pages/patient/HomePage";
import { Navigate, RouteObject } from "react-router-dom";

const PatientRouter: RouteObject[] = [
    {
        path:'/',
        element: <PatientLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace/>
            },
            {
                path: "home",
                element: <HomePage/>
            }
        ]
    }
]

export default PatientRouter;