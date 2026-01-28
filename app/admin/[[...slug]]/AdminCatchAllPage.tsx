"use client"

import { AdminProvider } from "../../../admin-kit/core/context/AdminProvider"
import { AuthProvider } from "../../../admin-kit/core/auth/AuthProvider"
import { AdminRouterProvider } from "../../../admin-kit/core/routing/AdminRouter"
import { UnifiedAdminLayout } from "../../../admin-kit/core/layout/UnifiedAdminLayout"
import { AdminDashboardRouter } from "../../../admin-kit/core/routing/AdminDashboardRouter"
import { ErrorBoundary } from "../../../admin-kit/ui/ErrorBoundary"
import { ProtectedRoute } from "../../../admin-kit/core/auth/ProtectedRoute"
import type { AdminConfig } from "../../../admin-kit/core/types"

// Admin configuration
const adminConfig: Partial<AdminConfig> = {
  title: "Admin Panel",
  theme: "system",
  navigation: [
    {
      id: "dashboard",
      label: "Dashboard",
      href: "/admin",
      icon: "Home",
    },
  ],
  auth: {
    provider: "custom",
    loginPath: "/admin/login",
    redirectAfterLogin: "/admin",
    permissions: true,
  },
}

interface AdminCatchAllPageProps {
  slug: string[]
}

export function AdminCatchAllPage({ slug }: AdminCatchAllPageProps) {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AdminProvider config={adminConfig}>
          <AdminRouterProvider>
            <ProtectedRoute>
              <UnifiedAdminLayout>
                <AdminDashboardRouter />
              </UnifiedAdminLayout>
            </ProtectedRoute>
          </AdminRouterProvider>
        </AdminProvider>
      </AuthProvider>
    </ErrorBoundary>
  )
}
