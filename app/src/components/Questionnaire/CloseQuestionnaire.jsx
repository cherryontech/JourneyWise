import React from "react";
import { X } from "lucide-react"

const CloseQuestionnaire = () => {
  return (
    <div className="absolute top-4 right-4">
      <button className="bg-white rounded-full p-2">
        <X className="text-gray-600" />
      </button>
    </div>
  )
}

export default CloseQuestionnaire