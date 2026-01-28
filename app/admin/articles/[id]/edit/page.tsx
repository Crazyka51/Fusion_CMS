import { ArticleEditorPage } from '@/admin-kit/modules/articles/ArticleEditorPage';

interface EditArticlePageProps {
  params: {
    id: string;
  };
}

export default function EditArticlePage({ params }: EditArticlePageProps) {
  return <ArticleEditorPage articleId={params.id} />;
}
