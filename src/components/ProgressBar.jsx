/**
 * ProgressBar Component - Rebuilt to match SVG design specifications
 * Height: 10px (horizontal bar)
 * Border Radius: 6px
 * Background: #d3d5d6
 * Fill: #2982a1
 * Circular variant for stats: 60-80px diameter, 6-8px stroke
 */

const ProgressBar = ({
  current,
  total,
  percentage: propPercentage,
  showLabel = true,
  variant = 'horizontal',
  size = 'md',
  className = ''
}) => {
  const percentage = propPercentage ?? Math.round((current / total) * 100)

  if (variant === 'circular') {
    return <CircularProgress percentage={percentage} size={size} className={className} />
  }

  // Horizontal progress bar (default)
  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span
            className="text-[0.498rem] font-medium"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--neutral-500)' }}
          >
            {current && total ? `Step ${current} of ${total}` : 'Progress'}
          </span>
          <span
            className="text-[0.594rem] font-medium"
            style={{ fontFamily: 'var(--font-primary)', color: 'var(--primary-500)' }}
          >
            {percentage}%
          </span>
        </div>
      )}
      <div
        className="w-full h-[10px] rounded-[6px] overflow-hidden"
        style={{ backgroundColor: 'var(--neutral-200)' }}
      >
        <div
          className="h-full rounded-[6px] transition-all duration-300 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: 'var(--primary-500)'
          }}
        />
      </div>
    </div>
  )
}

// Circular progress variant for stats display
const CircularProgress = ({ percentage, size = 'md', className = '' }) => {
  const sizes = {
    sm: { diameter: 60, strokeWidth: 6, fontSize: '1.185rem', percentFontSize: '0.861rem' },
    md: { diameter: 70, strokeWidth: 7, fontSize: '1.373rem', percentFontSize: '0.861rem' },
    lg: { diameter: 80, strokeWidth: 8, fontSize: '1.373rem', percentFontSize: '0.861rem' }
  }

  const { diameter, strokeWidth, fontSize, percentFontSize } = sizes[size]
  const radius = (diameter - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={diameter} height={diameter} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          stroke="var(--neutral-200)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          stroke="var(--primary-500)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-normal leading-none"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: fontSize,
            color: 'var(--text-primary)'
          }}
        >
          {percentage}
          <span
            style={{
              fontSize: percentFontSize,
              color: 'var(--neutral-500)'
            }}
          >
            %
          </span>
        </span>
      </div>
    </div>
  )
}

export default ProgressBar
