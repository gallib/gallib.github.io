import Navigation from './navigation'

export default function Layout({ children }) {
  return (
    <>
        <div className="flex flex-col h-screen max-w-6xl mx-auto">
            <Navigation />
            <main className="flex flex-grow mx-2 lg:mx-0">{children}</main>
        </div>
    </>
  )
}