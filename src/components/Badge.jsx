const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const variants = {
    default: 'bg-background-primary text-neutral-steel',
    primary: 'bg-background-primary text-primary',
    secondary: 'bg-background-secondary text-secondary',
    success: 'bg-background-primary text-status-success',
    warning: 'bg-background-cream text-accent-yellow',
    orange: 'bg-background-cream text-accent-orange',
    error: 'bg-background-cream text-status-error',
    sponsor: 'bg-background-primary text-primary border border-primary/20'
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  return (
    <span className={`inline-flex items-center rounded-md font-medium ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
