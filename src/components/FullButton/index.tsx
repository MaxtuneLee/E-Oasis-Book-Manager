import { ChevronRight } from "lucide-react"
import { Button } from "../ui/button"

const FullButton = ({ children }: { children: React.ReactNode }) => (
    <Button variant="ghost" className="w-full justify-between">
        <div className="flex items-center">{children}</div><ChevronRight className="opacity-70" />
    </Button>
)

export default FullButton