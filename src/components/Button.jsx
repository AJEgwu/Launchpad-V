const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button',
  fullWidth = false
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-card-hover focus:ring-primary/50 shadow-card',
    secondary: 'bg-accent-yellow text-neutral-darkest hover:bg-accent-orange hover:shadow-card-hover focus:ring-accent-yellow/50 shadow-card',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-background-primary hover:border-primary-dark',
    ghost: 'bg-transparent text-neutral-steel hover:bg-background-primary'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
