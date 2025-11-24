import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"


export default function TopNavbar() {
    return (
        <nav className='w-full py-2.5 bg-primary shadow-sm'>
            <div className='container mx-auto px-4 flex justify-between items-center w-full'>
                <ul className='flex items-center gap-x-6'>
                    {["7631 Sabina Park, 115 Devon Isle, USA", "Info@domain.com", "+1 234 567 8900"].map((item, index) => {
                        return (
                            <li key={index} className='flex items-center gap-2 text-white text-xs hover:text-yellow-300 transition-colors cursor-pointer'>
                                <span className="w-1 h-1 bg-yellow-500"></span>
                                <span>{item}</span>
                            </li>
                        )
                    })}
                </ul>
                <ul className="flex items-center gap-x-5">
                    {[Facebook, Instagram, Twitter, Linkedin].map((IconComponent, index) => (
                        <li key={index} className="text-white hover:text-yellow-300 transition-colors cursor-pointer">
                            <IconComponent className="w-4 h-4" />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
