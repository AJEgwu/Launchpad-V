/**
 * Badge Component - Rebuilt to match SVG design specifications
 * Font: Comfortaa
 * Size: 6.64px (--text-2xs)
 * Padding: 4px 8px
 * Border Radius: 12px (pill shape)
 * Height: 22px
 */

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  // Base styles - exact from SVG specifications
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    whitespace-nowrap
    font-[family-name:var(--font-primary)]
    leading-none
    font-normal
  `.replace(/\s+/g, ' ').trim()

  // Variant styles - exact colors from SVG palette
  const variants = {
    // Default/neutral
    default: `
      bg-[var(--neutral-200)]
      text-[var(--neutral-800)]
    `.replace(/\s+/g, ' ').trim(),

    // Primary teal
    primary: `
      bg-[var(--primary-500)]
      text-white
    `.replace(/\s+/g, ' ').trim(),

    // Secondary/skill tags
    secondary: `
      bg-[var(--primary-400)]
      text-white
    `.replace(/\s+/g, ' ').trim(),

    // Success green
    success: `
      bg-[var(--success-500)]
      text-white
    `.replace(/\s+/g, ' ').trim(),

    // Warning/orange
    warning: `
      bg-[var(--warning-600)]
      text-white
    `.replace(/\s+/g, ' ').trim(),

    // Warning yellow variant
    yellow: `
      bg-[var(--warning-500)]
      text-[var(--neutral-800)]
    `.replace(/\s+/g, ' ').trim(),

    // Error red
    error: `
      bg-[var(--error-600)]
      text-white
    `.replace(/\s+/g, ' ').trim(),

    // Skill tag variant 1
    skill: `
      bg-[var(--primary-300)]
      text-white
    `.replace(/\s+/g, ' ').trim(),

    // Skill tag variant 2
    'skill-alt': `
      bg-[var(--primary-400)]
      text-white
    `.replace(/\s+/g, ' ').trim(),

    // Sponsor/outlined
    sponsor: `
      bg-transparent
      border
      border-[var(--primary-500)]
      text-[var(--primary-500)]
    `.replace(/\s+/g, ' ').trim(),

    // Status: In Progress
    'in-progress': `
      bg-[var(--primary-500)]
      text-white
    `.replace(/\s+/g, ' ').trim(),

    // Status: Completed
    completed: `
      bg-[var(--success-500)]
      text-white
    `.replace(/\s+/g, ' ').trim()
  }

  // Size variants - using exact SVG specifications
  const sizes = {
    // Extra small: Even more compact
    xs: `
      h-[18px]
      px-[6px]
      py-[3px]
      rounded-[10px]
      text-[0.35rem]
    `.replace(/\s+/g, ' ').trim(),

    // Small: Slightly smaller than default
    sm: `
      h-[20px]
      px-[7px]
      py-[3px]
      rounded-[10px]
      text-[0.38rem]
    `.replace(/\s+/g, ' ').trim(),

    // Medium (default from SVG): 22px height, 4px 8px padding, 12px radius
    md: `
      h-[22px]
      px-2
      py-1
      rounded-[12px]
      text-[0.415rem]
    `.replace(/\s+/g, ' ').trim(),

    // Large: Slightly larger
    lg: `
      h-[26px]
      px-3
      py-[5px]
      rounded-[13px]
      text-[0.5rem]
    `.replace(/\s+/g, ' ').trim()
  }

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{
        fontFamily: 'var(--font-primary)',  // Ensure Comfortaa is applied
      }}
    >
      {children}
    </span>
  )
}

export default Badge
