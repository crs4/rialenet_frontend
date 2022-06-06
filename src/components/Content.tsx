export const Content = ({ children, className, fluid = false }: any) => {
  return (
    <div className={className} style={{
      border: '0px solid #000',
      // width: '240px',
      position: 'absolute',
      backgroundColor: 'white',
      bottom: 0,
      top: 56,
      left: fluid ? 0 : 240,
      right: 0
    }}>
      {children}
    </div>
  )
}