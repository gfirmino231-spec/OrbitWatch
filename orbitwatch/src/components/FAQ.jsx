import { useState } from 'react'
import styles from './FAQ.module.css'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className={styles.faq}>
      {items.map((item, i) => (
        <div
          key={i}
          className={`${styles.item} ${open === i ? styles.open : ''}`}
        >
          <button
            className={styles.question}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className={styles.questionNum}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.questionText}>{item.question}</span>
            <span className={styles.icon}>{open === i ? '−' : '+'}</span>
          </button>
          <div className={styles.answerWrapper}>
            <div className={styles.answer}>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
