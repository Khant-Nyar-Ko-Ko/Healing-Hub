import authLogo from "../assets/woman-visiting-psychologist.png"

const AuthImage = () => {
  return (
    <div className="flex items-center justify-center w-1/2 bg-secondary">
        <img src={authLogo} alt="" />
    </div>
  )
}

export default AuthImage