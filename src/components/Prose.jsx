import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(
        className,
        'prose prose-slate max-w-none dark:prose-invert dark:text-slate-400 break-words',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-slate-500 dark:prose-lead:text-slate-400',
        // links
        'prose-a:text-orange-500 prose-a:no-underline prose-a:font-normal',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-[#0D1117] prose-pre:shadow-lg dark:prose-pre:bg-slate-800/90 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
        // hr
        'dark:prose-hr:border-slate-800'
      )}
      {...props}
    />
  )
}
