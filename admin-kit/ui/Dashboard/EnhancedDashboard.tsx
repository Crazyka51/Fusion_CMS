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
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useAdminRouter } from '@/admin-kit/core/routing/AdminRouter';

interface QuickAction {
  label: string;
  view: any;
  icon: any;
  color: string;
}

interface StatCard {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down';
  icon: any;
  color: string;
}

interface RecentActivity {
  type: string;
  title: string;
  time: string;
  user: string;
}

// Chart data
const visitorsChartData = [
  { name: 'Po', value: 1420, previous: 1200 },
  { name: 'Út', value: 1680, previous: 1400 },
  { name: 'St', value: 1890, previous: 1650 },
  { name: 'Čt', value: 2100, previous: 1800 },
  { name: 'Pá', value: 2340, previous: 2000 },
  { name: 'So', value: 2180, previous: 2200 },
  { name: 'Ne', value: 2450, previous: 2100 },
];

const pageViewsData = [
  { name: 'Po', views: 4200 },
  { name: 'Út', views: 3800 },
  { name: 'St', views: 5100 },
  { name: 'Čt', views: 4300 },
  { name: 'Pá', views: 5800 },
  { name: 'So', views: 3900 },
  { name: 'Ne', views: 4200 },
];

export function EnhancedDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const { navigate } = useAdminRouter();

  const quickActions: QuickAction[] = [
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

  const stats: StatCard[] = [
    {
      title: 'Celkem článků',
      value: 156,
      change: '+12%',
      trend: 'up',
      icon: FileText,
      color: 'oklch(0.55 0.15 264)',
    },
    {
      title: 'Publikované',
      value: 134,
      change: '+8%',
      trend: 'up',
      icon: CheckCircle,
      color: 'oklch(0.60 0.12 160)',
    },
    {
      title: 'Koncepty',
      value: 22,
      change: '+4',
      trend: 'up',
      icon: Clock,
      color: 'oklch(0.65 0.12 70)',
    },
    {
      title: 'Celkem zobrazení',
      value: '45.2k',
      change: '+23%',
      trend: 'up',
      icon: Eye,
      color: 'oklch(0.52 0.18 300)',
    },
  ];

  const recentActivity: RecentActivity[] = [
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

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Přehled</TabsTrigger>
          <TabsTrigger value="statistics">Rozšířené statistiky</TabsTrigger>
        </TabsList>

        {/* TAB 1: OVERVIEW - Grafy a Stats */}
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
                    onClick={() => navigate(action.view)}
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

          {/* Stats Cards */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Statistiky</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const iconColor =
                  stat.color === 'oklch(0.55 0.15 264)'
                    ? 'text-purple-500'
                    : stat.color === 'oklch(0.60 0.12 160)'
                    ? 'text-cyan-500'
                    : stat.color === 'oklch(0.65 0.12 70)'
                    ? 'text-green-500'
                    : 'text-blue-500';
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.title}
                      </CardTitle>
                      <Icon className={`h-4 w-4 text-muted-foreground ${iconColor}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      {stat.change && (
                        <div className="flex items-center text-xs mt-1">
                          {stat.trend === 'up' ? (
                            <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                          ) : (
                            <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                          )}
                          <span
                            className={
                              stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                            }
                          >
                            {stat.change}
                          </span>
                          <span className="text-muted-foreground ml-1">
                            tento měsíc
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Charts */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Visitors Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Návštěvníci (poslední 7 dní)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    data={visitorsChartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorValue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="oklch(0.55 0.15 264)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="oklch(0.55 0.15 264)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="oklch(0.2 0.1 0)"
                    />
                    <XAxis dataKey="name" stroke="oklch(0.67 0 0)" />
                    <YAxis stroke="oklch(0.67 0 0)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#171717',
                        border: '1px solid oklch(0.3 0.1 0)',
                        borderRadius: '8px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="oklch(0.55 0.15 264)"
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Page Views Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Zhlédnutí stránek (poslední 7 dní)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={pageViewsData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="oklch(0.2 0.1 0)"
                    />
                    <XAxis dataKey="name" stroke="oklch(0.67 0 0)" />
                    <YAxis stroke="oklch(0.67 0 0)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#171717',
                        border: '1px solid oklch(0.3 0.1 0)',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar
                      dataKey="views"
                      fill="oklch(0.60 0.12 160)"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* TAB 2: EXTENDED STATISTICS */}
        <TabsContent value="statistics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Recent Activity */}
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
                        <p className="text-sm font-medium truncate">
                          {activity.title}
                        </p>
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
                  onClick={() => navigate('articles')}
                >
                  Zobrazit všechny články
                </Button>
              </CardContent>
            </Card>

            {/* Popular Content */}
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
                  onClick={() => navigate('analytics')}
                >
                  Zobrazit analytiku
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
