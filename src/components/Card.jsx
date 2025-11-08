/**
 * Card Component - Rebuilt to match SVG design specifications
 * Padding: 20px (standard)
 * Border Radius: 12px
 * Border: 1px solid #d3d5d6 (or 2px for emphasis)
 * Shadow: 0 2px 8px rgba(0,0,0,0.1)
 */

const Card = ({
  children,
  className = '',
  padding = 'md',
  variant = 'default',
  hover = false,
  onClick
}) => {
  // Base styles - exact from SVG specifications
  const baseStyles = `
    bg-white
    rounded-[12px]
    transition-all
    duration-300
  `.replace(/\s+/g, ' ').trim()

  // Variant styles - different card types from SVGs
  const variants = {
    // Default/Standard card
    default: `
      border
      border-[var(--neutral-200)]
      shadow-[0_2px_8px_rgba(0,0,0,0.1)]
    `.replace(/\s+/g, ' ').trim(),

    // Emphasis card (thicker border)
    emphasis: `
      border-2
      border-[var(--primary-500)]
      shadow-[0_4px_12px_rgba(41,130,161,0.15)]
    `.replace(/\s+/g, ' ').trim(),

    // Phase/Milestone card with gradient
    phase: `
      border-2
      border-[var(--primary-500)]
      shadow-[0_4px_12px_rgba(41,130,161,0.15)]
      bg-gradient-to-b
      from-white
      to-[var(--primary-50)]
    `.replace(/\s+/g, ' ').trim(),

    // Subtle card (no border, just shadow)
    subtle: `
      border-0
      shadow-[0_2px_8px_rgba(0,0,0,0.08)]
    `.replace(/\s+/g, ' ').trim(),

    // Flat card (no shadow)
    flat: `
      border
      border-[var(--neutral-200)]
      shadow-none
    `.replace(/\s+/g, ' ').trim()
  }

  // Padding variants - using exact SVG specifications
  const paddings = {
    // None: No padding
    none: 'p-0',

    // Small: Compact padding
    sm: 'p-4',  // 16px

    // Medium (standard from SVG): 20px
    md: 'p-5',  // 20px

    // Large: Extra padding for phase cards
    lg: 'p-6',  // 24px

    // Extra large
    xl: 'p-8'   // 32px
  }

  // Hover styles - subtle, no transform
  const hoverStyles = hover ? `
    hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]
    cursor-pointer
  `.replace(/\s+/g, ' ').trim() : ''

  // Clickable styles
  const clickableStyles = onClick ? 'cursor-pointer' : ''

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card
