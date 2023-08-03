const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full bg-gradient-to-br from-[#111827] to-gray-800 overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        {children}
      </div>
    </main>
  )
}

export default LandingLayout