import Navigation from './navigation'

export default function Layout({ children }) {
  return (
    <>
        <div className="flex flex-col h-screen max-w-6xl mx-auto">
            <Navigation />
            <main className="flex flex-grow">{children}</main>
        </div>
    </>
  )
}