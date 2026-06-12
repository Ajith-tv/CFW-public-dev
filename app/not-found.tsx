import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
      <span className="grid h-20 w-20 place-items-center rounded-full bg-cream text-3xl">
        ☕
      </span>
      <h1 className="mt-6 text-3xl font-bold text-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-stone-600">
        The page you are looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand px-8 py-3 font-semibold text-cream shadow-lg shadow-brand/25 transition-transform hover:scale-105"
      >
        Back to home
      </Link>
    </div>
  )
}
