"use client"

import { useTheme } from "next-themes"
import { IconButton } from "./icon-button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border rounded-md w-6 h-6 flex items-center justify-center">
      <span className="sr-only">Toggle mode</span>
      {theme !== "dark" ? (
        <IconButton icon={"icon-[tabler--moon-filled] h-4 w-4"} />
      ) : (
        <IconButton icon={"icon-[tabler--sun-filled] h-4 w-4"} />
      )}
    </button>
  )
}
