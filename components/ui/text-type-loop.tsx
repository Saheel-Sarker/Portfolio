'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useState, useEffect, Children } from 'react'

export type TextLoopProps = {
  children: React.ReactNode[]
  className?: string
  typingSpeed?: number // Speed of typing (ms per character)
  backspaceSpeed?: number // Speed of backspacing (ms per character)
  delayBetween?: number // Delay before starting the next text (ms)
  onIndexChange?: (index: number) => void
  trigger?: boolean
}

export function TextTypeLoop({
  children,
  className,
  typingSpeed = 100,
  backspaceSpeed = 50,
  delayBetween = 1000,
  onIndexChange,
  trigger = true,
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const items = Children.toArray(children) as string[]

  useEffect(() => {
    if (!trigger) return

    let timeout: NodeJS.Timeout

    const typeText = async () => {
      const currentText = items[currentIndex]

      if (isTyping) {
        // Typing animation
        if (displayedText.length < currentText.length) {
          setDisplayedText((prev) => currentText.slice(0, prev.length + 1))
          timeout = setTimeout(typeText, typingSpeed)
        } else {
          // Pause before backspacing
          setIsTyping(false)
          timeout = setTimeout(typeText, delayBetween)
        }
      } else {
        // Backspacing animation
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1))
          timeout = setTimeout(typeText, backspaceSpeed)
        } else {
          // Move to the next text
          const nextIndex = (currentIndex + 1) % items.length
          setCurrentIndex(nextIndex)
          onIndexChange?.(nextIndex)
          setIsTyping(true)
          timeout = setTimeout(typeText, typingSpeed)
        }
      }
    }

    typeText()

    return () => clearTimeout(timeout)
  }, [currentIndex, displayedText, isTyping, items, typingSpeed, backspaceSpeed, delayBetween, onIndexChange, trigger])

  return (
    <div className={cn('relative inline-block whitespace-nowrap', className)}>
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {displayedText}
      </motion.span>
    </div>
  )
}