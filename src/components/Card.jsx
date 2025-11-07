const Card = ({
  children,
  className = '',
  padding = 'md',
  hover = false,
  onClick
}) => {
  const baseStyles = 'bg-white rounded-2xl shadow-sm border border-gray-100'

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const hoverStyles = hover ? 'transition-all duration-200 hover:shadow-md hover:scale-[1.02] cursor-pointer' : ''

  return (
    <div
      className={`${baseStyles} ${paddings[padding]} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card
