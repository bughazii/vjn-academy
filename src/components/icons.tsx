type IconProps = { className?: string }

export function Chevron({ className }: IconProps) {
  return (
    <svg className={className} width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true" focusable="false">
      <path d="M1 1.2 4.5 4.7 8 1.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function MenuGlyph({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true" focusable="false">
      <path d="M0 1h20M0 6h20M0 11h20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function CloseGlyph({ className }: IconProps) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" focusable="false">
      <path d="M1 1l13 13M14 1L1 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function Spark({ className, size = 20 }: IconProps & { size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M10 1.4 11.5 7.2 17.4 8.6 11.5 10 10 15.8 8.5 10 2.6 8.6 8.5 7.2 10 1.4Z"
        fill="currentColor"
      />
      <path d="M15.2 12.4 15.8 14.2 17.6 14.8 15.8 15.4 15.2 17.2 14.6 15.4 12.8 14.8 14.6 14.2 15.2 12.4Z" fill="currentColor" />
    </svg>
  )
}

const stepProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  'aria-hidden': true,
  focusable: 'false',
} as const

export function StepExplore({ className }: IconProps) {
  return (
    <svg className={className} {...stepProps}>
      <circle cx="11" cy="11" r="6.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.4 15.4 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function StepWorkshop({ className }: IconProps) {
  return (
    <svg className={className} {...stepProps}>
      <path d="M4 17.5 12 4.8l8 12.7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7.2 17.5h9.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function StepConsult({ className }: IconProps) {
  return (
    <svg className={className} {...stepProps}>
      <path
        d="M5 6.5h10.2a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H9.2L5 19.2V6.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function StepBegin({ className }: IconProps) {
  return (
    <svg className={className} {...stepProps}>
      <path d="M5 12h12M13 7.5 17.5 12 13 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
