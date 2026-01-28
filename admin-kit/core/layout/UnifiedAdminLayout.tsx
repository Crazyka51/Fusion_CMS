"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Menu,
  Home,
  Users,
  FileText,
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronDown,
  ChevronRight,
  Image,
  Folder,
  Database,
  Mail,
  BarChart3,
  Tag,
  ArrowLeft,
} from "lucide-react"
import { useAdminRouter } from "../routing/AdminRouter"

interface UnifiedAdminLayoutProps {
  children: React.ReactNode
}

const quickActions = [
  {
    id: "new-article",
    title: "Nový článek",
    icon: FileText,
    badge: "⌘N",
    view: "article-new" as const,
  },
  {
    id: "add-user",
    title: "Přidat uživatele",
    icon: Users,
    view: "user-new" as const,
  },
  {
    id: "upload-media",
    title: "Nahrát média",
    icon: Image,
    badge: "⌘U",
    view: "media" as const,
  },
  {
    id: "create-category",
    title: "Nová kategorie",
    icon: Folder,
    view: "categories" as const,
  },
  {
    id: "backup",
    title: "Záloha databáze",
    icon: Database,
    view: "backups" as const,
  },
  {
    id: "newsletter",
    title: "Newsletter",
    icon: Mail,
    view: "newsletter" as const,
  },
]

export function UnifiedAdminLayout({ children }: UnifiedAdminLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["quick-actions"]))
  const { navigate, currentView, goBack, history } = useAdminRouter()

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const navItems = [
    {
      id: "dashboard",
      label: "Přehled",
      icon: Home,
      view: "dashboard" as const,
    },
    {
      id: "articles",
      label: "Články",
      icon: FileText,
      view: "articles" as const,
    },
    {
      id: "categories",
      label: "Kategorie",
      icon: Tag,
      view: "categories" as const,
    },
    {
      id: "media",
      label: "Média",
      icon: Image,
      view: "media" as const,
    },
    {
      id: "analytics",
      label: "Analytika",
      icon: BarChart3,
      view: "analytics" as const,
    },
    {
      id: "users",
      label: "Uživatelé",
      icon: Users,
      view: "users" as const,
    },
    {
      id: "newsletter",
      label: "Newsletter",
      icon: Mail,
      view: "newsletter" as const,
    },
    {
      id: "settings",
      label: "Nastavení",
      icon: Settings,
      view: "settings" as const,
    },
  ]

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-card">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-semibold text-primary">Admin Panel</h2>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          {/* Main Navigation */}
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentView === item.view
            return (
              <Button
                key={item.id}
                variant={isActive ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => navigate(item.view)}
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            )
          })}

          <Separator className="my-4" />

          {/* Quick Actions Section */}
          <div>
            <button
              onClick={() => toggleSection("quick-actions")}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>RYCHLÉ AKCE</span>
              {expandedSections.has("quick-actions") ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>

            {expandedSections.has("quick-actions") && (
              <div className="mt-2 space-y-1">
                {quickActions.map((action) => {
                  const Icon = action.icon
                  return (
                    <Button
                      key={action.id}
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={() => navigate(action.view)}
                    >
                      <Icon className="mr-3 h-4 w-4" />
                      <span className="flex-1 text-left">{action.title}</span>
                      {action.badge && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {action.badge}
                        </Badge>
                      )}
                    </Button>
                  )
                })}
              </div>
            )}
          </div>
        </nav>
      </ScrollArea>

      {/* User Menu */}
      <div className="p-4 border-t border-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start">
              <Avatar className="h-8 w-8 mr-3">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                <div className="text-sm font-medium">Admin User</div>
                <div className="text-xs text-muted-foreground">admin</div>
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Můj účet</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate('settings')}>
              <Settings className="mr-2 h-4 w-4" />
              Nastavení
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => window.location.href = '/admin/login'}>
              <LogOut className="mr-2 h-4 w-4" />
              Odhlásit se
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 border-r border-border">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Back Button */}
            {history.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={goBack}
                title="Zpět"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}

            {/* Search */}
            <div className="hidden md:flex items-center gap-2 bg-secondary rounded-md px-3 py-2 w-80">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Vyhledávání..."
                className="bg-transparent border-none outline-none text-sm w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Notifications */}
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>

            {/* User Avatar (Mobile) */}
            <Avatar className="h-8 w-8 lg:hidden">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
