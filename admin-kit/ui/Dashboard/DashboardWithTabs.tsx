'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FileText,
  Users,
  Image as ImageIcon,
  TrendingUp,
  TrendingDown,
  Plus,
  Eye,
  Edit,
  BarChart3,
  Clock,
  CheckCircle,
  Activity,
  MessageSquare,
  Mail,
  Database,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

// Data pro grafy
const visitorsChartData = [
  { name: 'Lis', value: 1420, previous: 1200 },
  { name: 'Pro', value: 1680, previous: 1400 },
  { name: 'Úno', value: 1890, previous: 1650 },
  { name: 'Bře', value: 2100, previous: 1800 },
  { name: 'Dub', value: 2340, previous: 2000 },
  { name: 'Kvě', value: 2180, previous: 2200 },
  { name: 'Čer', value: 2450, previous: 2100 },
  { name: 'Čvc', value: 2280, previous: 2300 },
  { name: 'Srp', value: 2390, previous: 2250 },
  { name: 'Zář', value: 2520, previous: 2400 },
  { name: 'Říj', value: 2180, previous: 2100 },
  { name: 'Lis', value: 2350, previous: 2200 },
];

const pageViewsData = [
  { name: 'Po', views: 4200 },
  { name: 'Út', views: 3800 },
  { name: 'St', views: 5100 },
  { name: 'Čt', views: 4600 },
  { name: 'Pá', views: 5800 },
  { name: 'So', views: 3200 },
  { name: 'Ne', views: 2900 },
];

const contentStatsData = [
  { name: 'Články', published: 134, drafts: 22, archived: 8 },
  { name: 'Stránky', published: 45, drafts: 5, archived: 2 },
  { name: 'Média', published: 567, drafts: 0, archived: 12 },
];

interface DashboardWithTabsProps {
  onNavigate?: (view: string) => void;
}

export function DashboardWithTabs({ onNavigate }: DashboardWithTabsProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const handleNavigation = (view: string) => {
    if (onNavigate) {
      onNavigate(view);
    }
  };

  const quickActions = [
    {
      label: 'Nový článek',
      view: 'article-new',
      icon: FileText,
      color: 'oklch(0.55 0.15 264)',
    },
    {
      label: 'Správa médií',
      view: 'media',
      icon: ImageIcon,
      color: 'oklch(0.60 0.12 160)',
    },
    {
      label: 'Uživatelé',
      view: 'users',
      icon: Users,
      color: 'oklch(0.65 0.12 70)',
    },
    {
      label: 'Analytika',
      view: 'analytics',
      icon: BarChart3,
      color: 'oklch(0.52 0.18 300)',
    },
  ];

  const stats = [
    {
      title: 'Celkem článků',
      value: 156,
      change: '+12%',
      trend: 'up' as const,
      icon: FileText,
      color: 'oklch(0.55 0.15 264)',
    },
    {
      title: 'Publikované',
      value: 134,
      change: '+8%',
      trend: 'up' as const,
      icon: CheckCircle,
      color: 'oklch(0.60 0.12 160)',
    },
    {
      title: 'Koncepty',
      value: 22,
      change: '+4',
      trend: 'up' as const,
      icon: Clock,
      color: 'oklch(0.65 0.12 70)',
    },
    {
      title: 'Celkem zobrazení',
      value: '45.2k',
      change: '+23%',
      trend: 'up' as const,
      icon: Eye,
      color: 'oklch(0.52 0.18 300)',
    },
  ];

  const recentActivity = [
    {
      type: 'published',
      title: 'Nový článek: Začínáme s Next.js 14',
      time: 'před 2 hodinami',
      user: 'Admin',
    },
    {
      type: 'edited',
      title: 'Upraven článek: React Server Components',
      time: 'před 5 hodinami',
      user: 'Admin',
    },
    {
      type: 'created',
      title: 'Vytvořena kategorie: Tutoriály',
      time: 'před 1 dnem',
      user: 'Admin',
    },
    {
      type: 'uploaded',
      title: 'Nahrány 3 nové obrázky',
      time: 'před 2 dny',
      user: 'Admin',
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'published':
        return <CheckCircle className="h-4 w-4 text-[oklch(0.60_0.12_160)]" />;
      case 'edited':
        return <Edit className="h-4 w-4 text-[oklch(0.65_0.12_70)]" />;
      case 'created':
        return <Plus className="h-4 w-4 text-[oklch(0.55_0.15_264)]" />;
      case 'uploaded':
        return <ImageIcon className="h-4 w-4 text-[oklch(0.52_0.18_300)]" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Vítejte zpět!</h1>
        <p className="text-muted-foreground mt-2">
          Přehled vašeho obsahu a aktivit
        </p>
      </div>

      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Přehled</TabsTrigger>
          <TabsTrigger value="analytics">Analytika</TabsTrigger>
          <TabsTrigger value="content">Obsah</TabsTrigger>
          <TabsTrigger value="system">Systém</TabsTrigger>
        </TabsList>

        {/* Tab: Přehled */}
        <TabsContent value="overview" className="space-y-6">
          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Rychlé akce</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                const colorClass =
                  action.color === 'oklch(0.55 0.15 264)'
                    ? 'bg-purple-500/20 text-purple-500'
                    : action.color === 'oklch(0.60 0.12 160)'
                    ? 'bg-cyan-500/20 text-cyan-500'
                    : action.color === 'oklch(0.65 0.12 70)'
                    ? 'bg-green-500/20 text-green-500'
                    : 'bg-blue-500/20 text-blue-500';
                return (
                  <Card
                    key={index}
                    className="hover:bg-accent transition-colors cursor-pointer h-full"
                    onClick={() => handleNavigation(action.view)}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${colorClass}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-medium">{action.label}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Statistiky</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" style={{ color: stat.color }} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      {stat.change && (
                        <div className="flex items-center text-xs mt-1">
                          <TrendingUp
                            className={`mr-1 h-3 w-3 ${
                              stat.trend === 'up'
                                ? 'text-[oklch(0.60_0.12_160)]'
                                : 'text-[oklch(0.50_0.18_25)]'
                            }`}
                          />
                          <span
                            className={
                              stat.trend === 'up'
                                ? 'text-[oklch(0.60_0.12_160)]'
                                : 'text-[oklch(0.50_0.18_25)]'
                            }
                          >
                            {stat.change}
                          </span>
                          <span className="text-muted-foreground ml-1">tento měsíc</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Recent Activity & Popular */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Nedávná aktivita</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="mt-1">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{activity.title}</p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <span>{activity.user}</span>
                          <span className="mx-1">•</span>
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => handleNavigation('articles')}
                >
                  Zobrazit všechny články
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Populární články</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: 'Začínáme s Next.js 14', views: 1234 },
                    { title: 'React Server Components', views: 987 },
                    { title: 'TypeScript Best Practices', views: 856 },
                    { title: 'Tailwind CSS tipy a triky', views: 743 },
                  ].map((article, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded flex items-center justify-center bg-accent text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{article.title}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Eye className="h-3 w-3 mr-1" />
                            {article.views.toLocaleString()} zobrazení
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => handleNavigation('analytics')}
                >
                  Zobrazit analytiku
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab: Analytika */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Návštěvníci - Line Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Návštěvníci</CardTitle>
                <p className="text-sm text-muted-foreground">Porovnání s minulým rokem</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={visitorsChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2e2e2e" />
                    <XAxis dataKey="name" stroke="#676767" />
                    <YAxis stroke="#676767" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#171717',
                        border: '1px solid #2e2e2e',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#f7b91c"
                      strokeWidth={2}
                      name="Tento rok"
                    />
                    <Line
                      type="monotone"
                      dataKey="previous"
                      stroke="#676767"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Minulý rok"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Zhlédnutí stránek - Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Zhlédnutí stránek</CardTitle>
                <p className="text-sm text-muted-foreground">Tento týden</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={pageViewsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2e2e2e" />
                    <XAxis dataKey="name" stroke="#676767" />
                    <YAxis stroke="#676767" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#171717',
                        border: '1px solid #2e2e2e',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="views" fill="#f7b91c" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab: Obsah */}
        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Statistiky obsahu</CardTitle>
              <p className="text-sm text-muted-foreground">
                Přehled publikovaného obsahu
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={contentStatsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2e2e2e" />
                  <XAxis dataKey="name" stroke="#676767" />
                  <YAxis stroke="#676767" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#171717',
                      border: '1px solid #2e2e2e',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="published" fill="oklch(0.60 0.12 160)" name="Publikováno" />
                  <Bar dataKey="drafts" fill="oklch(0.65 0.12 70)" name="Koncepty" />
                  <Bar dataKey="archived" fill="oklch(0.50 0.18 25)" name="Archivováno" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Komentáře</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">342</div>
                <p className="text-xs text-muted-foreground">+19 tento měsíc</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Newsletter</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">Odběratelů</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Média</CardTitle>
                <ImageIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">567</div>
                <p className="text-xs text-muted-foreground">Celkem souborů</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab: Systém */}
        <TabsContent value="system" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Server Status</CardTitle>
                <Activity className="h-4 w-4 text-[oklch(0.60_0.12_160)]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[oklch(0.60_0.12_160)]">Online</div>
                <p className="text-xs text-muted-foreground">Uptime: 99.9%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Databáze</CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245 MB</div>
                <p className="text-xs text-muted-foreground">Využito z 1 GB</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Aktivní uživatelé</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Nyní online</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
