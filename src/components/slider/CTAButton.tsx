import { Link } from "react-router-dom"

interface propsType{
    text: string
    to: string
    type: "filled" | "outlined"
}

const CTAButton = ({text, to, type}: propsType) => {
  return (
    <button className={`border-2 border-transparent p-3 px-5 font-medium rounded-xl ${type === "filled"? "text-white bg-yellow border-yellow" : "text-darkBlue bg-white border-darkBlue border-opacity-75"}`}>
        <Link className="" to={to}>{text}</Link>
    </button>
  )
}

export default CTAButton