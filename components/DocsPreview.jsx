import ReactMarkdown from 'react-markdown';

export default function DocsPreview({docs}){
    return (
        <div className='prose prose-lg prose-neutral dark:prose-invert max-w-none overflow-hidden break-words prose-headings:bg-gradient-to-r prose-headings:from-blue-600 prose-headings:to-indigo-600 prose-headings:bg-clip-text prose-headings:text-transparent prose-headings:break-words prose-a:text-indigo-600 prose-a:no-underline prose-a:break-all hover:prose-a:underline prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:break-all prose-pre:bg-slate-900 prose-pre:shadow-lg prose-pre:overflow-x-auto prose-pre:max-w-full prose-p:break-words prose-li:break-words'>
            <ReactMarkdown>{docs}</ReactMarkdown>
        </div>
    );
}