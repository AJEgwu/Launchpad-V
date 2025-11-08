/**
 * Modal Component - Rebuilt to match SVG design specifications
 * Border Radius: 12px (matching Card component)
 * Padding: 20px (standard)
 * Typography: Comfortaa for title
 */

import { useEffect } from 'react'
import Button from './Button'

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md'
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl'
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal - matching Card component styling */}
        <div
          className={`relative bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full ${sizes[size]} z-10 animate-slide-in`}
        >
          {/* Header */}
          {title && (
            <div
              className="flex items-center justify-between p-5 border-b"
              style={{ borderColor: 'var(--neutral-200)' }}
            >
              <h2
                className="text-[1.000rem] font-normal leading-tight"
                style={{ fontFamily: 'var(--font-primary)', color: 'var(--text-primary)' }}
              >
                {title}
              </h2>
              <button
                onClick={onClose}
                className="transition-colors"
                style={{ color: 'var(--neutral-400)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--neutral-600)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--neutral-400)'}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Content - 20px padding matching card specs */}
          <div className="p-5">{children}</div>

          {/* Footer */}
          {footer && (
            <div
              className="flex items-center justify-end gap-3 p-5 border-t"
              style={{ borderColor: 'var(--neutral-200)' }}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
