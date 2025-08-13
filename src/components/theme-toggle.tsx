import { Sun, Moon } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4  text-warning" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        aria-label="Toggle theme"
      />
      <Moon className="h-4 w-4  text-warning" />
    </div>
  )
}