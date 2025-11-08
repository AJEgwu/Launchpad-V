/**
 * Button Component - Rebuilt to match SVG design specifications
 * Font: Comfortaa
 * Size: 6.64px (--text-2xs)
 * Padding: 8px 16px
 * Border Radius: 6px
 */

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
  // Base styles matching SVG specifications exactly
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    gap-2
    transition-all
    duration-300
    ease-in-out
    focus:outline-none
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:transform-none
  `.replace(/\s+/g, ' ').trim()

  // Variant styles - exact colors from design tokens
  const variants = {
    primary: `
      bg-[var(--primary-500)]
      text-[var(--text-white)]
      border-none
      hover:brightness-90
      hover:scale-[1.02]
      active:brightness-85
      active:scale-[0.98]
      shadow-[var(--shadow-md)]
      focus:ring-2
      focus:ring-[var(--primary-500)]
      focus:ring-opacity-30
    `.replace(/\s+/g, ' ').trim(),

    secondary: `
      bg-transparent
      text-[var(--primary-500)]
      border
      border-[var(--primary-500)]
      hover:bg-[#f0f9fa]
      hover:scale-[1.02]
      active:scale-[0.98]
      focus:ring-2
      focus:ring-[var(--primary-500)]
      focus:ring-opacity-30
    `.replace(/\s+/g, ' ').trim(),

    text: `
      bg-none
      text-[var(--primary-500)]
      border-none
      hover:underline
      active:scale-[0.98]
    `.replace(/\s+/g, ' ').trim(),

    ghost: `
      bg-transparent
      text-[var(--text-secondary)]
      border-none
      hover:bg-[var(--neutral-50)]
      hover:scale-[1.02]
      active:scale-[0.98]
    `.replace(/\s+/g, ' ').trim()
  }

  // Size variants - using exact SVG specifications
  const sizes = {
    // Small: Slightly smaller than default
    sm: `
      h-auto
      px-3
      py-1.5
      rounded-[4px]
    `.replace(/\s+/g, ' ').trim(),

    // Medium (default from SVG): 8px 16px padding, 6px radius
    md: `
      h-auto
      px-4
      py-2
      rounded-[6px]
    `.replace(/\s+/g, ' ').trim(),

    // Large: Slightly larger padding
    lg: `
      h-auto
      px-6
      py-3
      rounded-[8px]
    `.replace(/\s+/g, ' ').trim()
  }

  // Font size based on size prop (using design tokens)
  const fontSizes = {
    sm: 'text-[0.35rem]',        // ~5.6px
    md: 'text-[0.415rem]',       // 6.64px (--text-2xs) - SVG default
    lg: 'text-[0.594rem]'        // 9.51px (--text-sm)
  }

  // Typography styles - Comfortaa font, tight line-height
  const typography = `
    font-[family-name:var(--font-primary)]
    ${fontSizes[size]}
    leading-none
    font-normal
    whitespace-nowrap
  `.replace(/\s+/g, ' ').trim()

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${typography} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      style={{
        fontFamily: 'var(--font-primary)',  // Ensure Comfortaa is applied
      }}
    >
      {children}
    </button>
  )
}

export default Button
