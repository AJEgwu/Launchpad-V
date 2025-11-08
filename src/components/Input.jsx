/**
 * Input Component - Rebuilt to match SVG design specifications
 * Font: Myriad Pro (body font)
 * Font Size: 10px (--text-md)
 * Height: 40px
 * Padding: 8px 12px
 * Border Radius: 6px
 * Border: 1px solid #d3d5d6
 */

const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helperText,
  className = '',
  disabled = false,
  ...props
}) => {
  // Base input styles - exact from SVG specifications
  const inputStyles = `
    h-[40px]
    px-3
    py-2
    rounded-[6px]
    border
    font-[family-name:var(--font-body)]
    text-[0.625rem]
    leading-normal
    transition-all
    duration-200
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${error
      ? 'border-[var(--error-600)] focus:border-[var(--error-600)] focus:ring-[var(--error-600)]'
      : 'border-[var(--neutral-200)] focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)]'
    }
    focus:outline-none
    focus:ring-[3px]
    focus:ring-opacity-10
    placeholder:text-[var(--neutral-300)]
    text-[var(--text-primary)]
  `.replace(/\s+/g, ' ').trim()

  // Label styles - small, Myriad font
  const labelStyles = `
    block
    font-[family-name:var(--font-body)]
    text-[0.625rem]
    font-medium
    text-[var(--text-primary)]
    mb-2
  `.replace(/\s+/g, ' ').trim()

  // Helper/error text styles
  const helperStyles = `
    text-[0.498rem]
    mt-1.5
    font-[family-name:var(--font-body)]
  `.replace(/\s+/g, ' ').trim()

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className={labelStyles} style={{ fontFamily: 'var(--font-body)' }}>
          {label}
          {required && <span className="text-[var(--primary-500)] ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={inputStyles}
        style={{ fontFamily: 'var(--font-body)' }}
        {...props}
      />
      {error && (
        <p className={`${helperStyles} text-[var(--error-600)]`} style={{ fontFamily: 'var(--font-body)' }}>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className={`${helperStyles} text-[var(--neutral-500)]`} style={{ fontFamily: 'var(--font-body)' }}>
          {helperText}
        </p>
      )}
    </div>
  )
}

export default Input
