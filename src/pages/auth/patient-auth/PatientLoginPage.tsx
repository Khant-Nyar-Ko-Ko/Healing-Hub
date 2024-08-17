import cus_login_image from "../../../assets/cus_login.png"

const PatientLoginPage = () => {
  return (
    <div className="relative">
      <div className="flex-col w-[60%] justify-center">
        <img src={cus_login_image} className="w-screen object-cover mt-20" alt="Login Image" />
      </div>
      <div className="flex w-[35%] justify-center">
        <button className="px-6 py-2 text-white rounded-lg bg-primary">Login</button>
        <button className="px-6 py-2 text-white rounded-lg bg-primary">Sign Up</button>
      </div>   

    </div>
  )
}

export default PatientLoginPage