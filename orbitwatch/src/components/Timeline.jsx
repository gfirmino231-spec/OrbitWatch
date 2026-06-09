import styles from './Timeline.module.css'

export default function Timeline({ events }) {
  return (
    <div className={styles.timeline}>
      {events.map((event, i) => (
        <div key={i} className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}>
          <div className={styles.dot}>
            <span className={styles.dotInner} style={{ background: event.color || 'var(--color-purple)' }} />
          </div>
          <div className={styles.card}>
            <span className={styles.year}>{event.year}</span>
            <h4 className={styles.title}>{event.title}</h4>
            <p className={styles.desc}>{event.description}</p>
            {event.stat && (
              <div className={styles.stat} style={{ color: event.color || 'var(--color-purple)' }}>
                {event.stat}
              </div>
            )}
          </div>
        </div>
      ))}
      <div className={styles.line} />
    </div>
  )
}
