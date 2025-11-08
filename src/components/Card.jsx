const Card = ({
  children,
  className = '',
  padding = 'md',
  hover = false,
  onClick
}) => {
  const baseStyles = 'bg-white rounded-xl shadow-card border border-transparent transition-all duration-200'

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const hoverStyles = hover ? 'hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer' : ''

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
