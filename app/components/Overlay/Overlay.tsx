export const Overlay = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
      <div className="bg-overlay">
        {children}
      </div>
    )
}