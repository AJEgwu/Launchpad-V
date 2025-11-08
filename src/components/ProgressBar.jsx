const ProgressBar = ({ current, total, showLabel = true, className = '' }) => {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-neutral-steel">
            Step {current} of {total}
          </span>
          <span className="text-sm font-bold text-primary">
            {percentage}%
          </span>
        </div>
      )}
      <div className="w-full h-2 bg-background-primary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
