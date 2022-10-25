import React from "react"

export interface Activity {
  message: string
  type: string
  date: Date
  styles: React.CSSProperties
}