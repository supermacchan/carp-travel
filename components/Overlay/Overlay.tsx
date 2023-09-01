export const Overlay = ({
    children,
    overlay
  }: {
    children: React.ReactNode,
    overlay: string
  }) => {
    return (
      <div className={`bg-${overlay}`}>
        {children}
      </div>
    )
}