import spinner from "../assets/svg/spinner.svg"

export default function Spinner() {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
        <div>
            <img src={spinner} alt="Loading..." className="h-24" />
        </div>
    </div>
  )
}
