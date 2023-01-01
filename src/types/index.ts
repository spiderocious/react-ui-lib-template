export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export type Size = 'small' | 'medium' | 'large'
export type Variant = 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost'