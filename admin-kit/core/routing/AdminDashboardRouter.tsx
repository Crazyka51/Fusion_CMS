'use client';

import { useAdminRouter } from '../routing/AdminRouter';
import { EnhancedDashboard } from '../../ui/Dashboard/EnhancedDashboard';
import ArticleManager from '../../modules/articles/ArticleManager';
import { ArticleEditorPage } from '../../modules/articles/ArticleEditorPage';
import { CategoryManager } from '../../modules/categories/CategoryManager';
import MediaManager from '../../modules/media/MediaManager';
import { UsersPage } from '../../modules/users/UsersPage';
import { AnalyticsWidget } from '../../modules/analytics/AnalyticsWidget';
import { SettingsManager } from '../../modules/settings/SettingsManager';
import { NewsletterPage } from '../../modules/newsletter/NewsletterPage';

export function AdminDashboardRouter() {
  const { currentView, viewData, navigate } = useAdminRouter();

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <EnhancedDashboard />;

      case 'articles':
        return (
          <ArticleManager
            onCreateNew={() => navigate('article-new')}
            onEditArticle={(article) => navigate('article-edit', { articleId: article.id })}
          />
        );

      case 'article-new':
        return (
          <ArticleEditorPage
            onSave={() => navigate('articles')}
            onCancel={() => navigate('articles')}
          />
        );

      case 'article-edit':
        return (
          <ArticleEditorPage
            articleId={viewData?.articleId}
            onSave={() => navigate('articles')}
            onCancel={() => navigate('articles')}
          />
        );

      case 'categories':
        return <CategoryManager />;

      case 'media':
        return <MediaManager />;

      case 'users':
        return <UsersPage />;

      case 'analytics':
        return (
          <div className="container mx-auto py-8">
            <AnalyticsWidget />
          </div>
        );

      case 'settings':
        return <SettingsManager />;

      case 'newsletter':
        return <NewsletterPage />;

      default:
        return <EnhancedDashboard />;
    }
  };

  return <div className="flex-1 overflow-auto">{renderView()}</div>;
}
