import AuthImage from "@/components/AuthImage"
import PatientRegisterForm from "@/components/PatientRegisterForm"

const PatientRegisterPage = () => {
  return (
    <div className="flex h-screen">
      <AuthImage/>
      <PatientRegisterForm/>
    </div>
  )
}

export default PatientRegisterPage