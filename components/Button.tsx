import styles from './button.module.css'

interface ButtonProps {
  variant: 'primary' | 'secondary'
}

const Button = ({ variant }: ButtonProps) => {
  return (
    <button className={styles.button} type="button">
      Learn More
    </button>
  )
}

export default Button
