import Sort from '@/components/Sort';
import { getFiles } from '@/lib/actions/files.actions';
import { Section } from 'lucide-react';
import { Models } from 'node-appwrite';

interface SearchParamProps {
  params?: Promise<SegmentParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || '';
  const files = await getFiles();
  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>
        <div className="total-size-section">
          <p className="body-1">
            Total: <span className="h5">0 MB</span>
          </p>
        </div>
        <div className="sort-container">
          <p className="body-1 hidden sm:block text-light-200">
            Sort by:
            <Sort />
          </p>
        </div>
      </section>
      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <h1 key={file.$id} className="h1">
              {file.$id}
            </h1>
          ))}
        </section>
      ) : (
        <p className="empty-list">No files uploaded</p>
      )}
    </div>
  );
};

export default Page;