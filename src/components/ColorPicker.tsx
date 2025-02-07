import React, { useState } from 'react'
import { SketchPicker } from 'react-color'

const ColorPicker: React.FC<{
  text: string
  value?: string
  onChange?: (color: string) => void
}> = ({ value, onChange, text }) => {
  const [pickerVisible, setPickerVisible] = useState(false)

  const onChangeColor = (color: any) => {
    onChange?.(color.hex)
  }

  return (
    <div>
      <span style={{ backgroundColor: value }} className="px-2 py-1 rounded cursor-pointer shadow-md" onClick={() => setPickerVisible(true)}>{text}</span>
      {pickerVisible && (
        <>
          <div className="bg-transparent fixed top-0 left-0 w-screen h-screen" onClick={() => setPickerVisible(false)}></div>
          <SketchPicker color={value} onChange={onChangeColor} className="absolute bottom-10 z-10" />
        </>
      )}
    </div>
  )
}

export default ColorPicker
