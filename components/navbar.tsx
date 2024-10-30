"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield, Menu, Lightbulb, Users, Info, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const routes = [
  { name: 'Solutions', path: '/solutions', icon: <Lightbulb className="h-4 w-4" /> },
  { name: 'Vision', path: '/vision', icon: <Users className="h-4 w-4" /> },
  { name: 'About', path: '/about', icon: <Info className="h-4 w-4" /> },
  { name: 'Support', path: '/support', icon: <Heart className="h-4 w-4" /> },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/10 blur-3xl" />
      <header className="mx-auto max-w-7xl relative">
        <nav className="relative flex items-center justify-between rounded-full border bg-background/95 px-4 sm:px-6 py-2 sm:py-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span className="font-bold text-sm sm:text-base gradient-text">CPFA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-1 md:justify-center md:gap-1">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm font-medium transition-colors hover:bg-muted flex items-center gap-2",
                  pathname === route.path 
                    ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {route.icon}
                {route.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-2">
            <ThemeToggle />
            <Button size="sm" className="text-sm bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
              Donate Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-[80vh] pt-16">
                <div className="flex flex-col items-center space-y-4">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={cn(
                        "w-full max-w-xs rounded-full px-8 py-3 text-center text-sm font-medium transition-colors flex items-center justify-center gap-2",
                        pathname === route.path 
                          ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {route.icon}
                      {route.name}
                    </Link>
                  ))}
                  <div className="flex flex-col items-center w-full max-w-xs space-y-3 pt-4">
                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                      Donate Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </div>
  )
}