import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-tite">
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
