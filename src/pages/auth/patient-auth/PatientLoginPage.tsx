import AuthImage from "@/components/AuthImage"
import PatientLoginForm from "@/components/PatientLoginForm"

const PatientLoginPage = () => {
  return (
    <div className="flex h-screen">
      <AuthImage/>
      <PatientLoginForm/>
    </div>
  )
}

export default PatientLoginPage