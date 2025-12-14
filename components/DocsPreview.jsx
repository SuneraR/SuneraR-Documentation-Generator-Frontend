import ReactMarkdown from 'react-markdown';

export default function DocsPreview({docs}){
    return (
        <div className='prose prose-neutral dark:prose-invert max-w-none'>
            <ReactMarkdown>{docs}</ReactMarkdown>
        </div>
    );
}