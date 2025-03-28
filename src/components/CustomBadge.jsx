import React from 'react'
import { Badge } from "@/components/ui/badge";

const CustomBadge = ({ text }) => {
  return (
    <div>
      <Badge variant="secondary" className="bg-[#393838d2] text-white px-2 md:px-4 md:py-1.5 md:text-lg">{text}</Badge>
    </div>
  )
}

export default CustomBadge
