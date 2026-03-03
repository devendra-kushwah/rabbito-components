"use client";
import React, { ReactNode } from 'react'
import styled from 'styled-components'

type BaseCardProps = {
    children?: ReactNode
    className?: string
    bordered?: boolean
    padding?: string | number
    elevation?: number
}

const Card = styled.div<{ bordered?: boolean; padding?: string | number; elevation?: number }>`
  background: #fff;
  border-radius: 8px;
  padding: ${({ padding }) => (typeof padding === 'number' ? `${padding}px` : padding ?? '16px')};
  box-shadow: ${({ elevation }) =>
        elevation && elevation > 0 ? `0 ${elevation}px ${Math.max(2, elevation * 2)}px rgba(16,24,40,0.08)` : 'none'};
  border: ${({ bordered }) => (bordered ? '1px solid rgba(0,0,0,0.06)' : 'none')};
  display: block;
`

export const BaseCard: React.FC<BaseCardProps> = ({ children, className, bordered = false, padding, elevation = 4 }) => {
    return (
        <Card className={className} bordered={bordered} padding={padding} elevation={elevation}>
            {children}
        </Card>
    )
}

export default BaseCard
