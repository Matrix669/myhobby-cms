import Wrapper from '@/app/UI/Wrapper/Wrapper'
import styles from './ContactForm.module.scss'
import { useForm } from 'react-hook-form'
export default function ContactForm() {
	const form = useForm()
	return (
		<Wrapper>
			<form className={styles.form}>
				<h2 className={`${styles.titleSection} ${styles.line}`}>Kontakt</h2>
				<div className={styles.formBox}>
					<input type='text' id='name' />
					<label htmlFor='name'>Imie</label>
				</div>
				<div className={styles.formBox}>
					<input type='text' id='email' />
					<label htmlFor='email'>Adres e-mail</label>
				</div>
				<div className={styles.formBox}>
					<textarea id='msg'></textarea>
					<label htmlFor='msg'>Wiadomość</label>
				</div>
				<button>Wyślij</button>
			</form>
		</Wrapper>
	)
}
