import { ReactNode } from "react"
import { Spinner } from "./icons/SVGIcons"

interface iProps {
    children?: ReactNode,
    isLoading?: boolean
}

const LoadingPage = ({ isLoading }: iProps) => {
    if (isLoading) {
        return (
            <div className="absolute z-50 h-full w-full flex justify-center">
                <Spinner fontSize={50} color="blue" />
            </div>
        )
    }
}
export default LoadingPage