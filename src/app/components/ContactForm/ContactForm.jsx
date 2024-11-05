'use client'
import Wrapper from '@/app/UI/Wrapper/Wrapper'
import styles from './ContactForm.module.scss'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
		watch,
		reset,
		setError,
	} = useForm({
		mode: 'all',
	})
	const [fadeOut, setFadeOut] = useState(false)
	const emailValue = watch('email', '')

	function onSubmit(data) {
		try {
			console.log(data)
			setTimeout(() => {
				setFadeOut(true)
				reset()
			}, 2500)
		} catch (e) {
			setTimeout(() => {
				setFadeOut(true)
				setError('general', {
					message: 'Błąd wysyłania wiadomości',
					type: 'custom',
				})
				// reset()
			}, 2500)
		}
		setFadeOut(false)
		reset()
		// throw new Error('backhand error')
	}
	console.log(isSubmitSuccessful)
	return (
		<Wrapper>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
				<h2 className={`${styles.titleSection} ${styles.line}`}>Kontakt</h2>
				<div className={styles.formBox}>
					<input
						className={errors.name ? styles.inputError : ''}
						required
						type='text'
						id='name'
						{...register('name', {
							required: 'Podaj imię',
							minLength: { value: 3, message: 'Imię musi zawierać conajmniej 3 litery' },
						})}
					/>
					<label htmlFor='name'>Imie*</label>
				</div>
				{errors.name && <span className={styles.formError}>{errors.name.message}</span>}
				<div className={styles.formBox}>
					<input
						className={`${errors.email ? styles.inputError : ''} ${emailValue ? styles.emailValid : ''}`}
						required
						type='email'
						id='email'
						{...register('email', {
							required: 'Podaj e-mail',
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: 'Podaj poprawny adres e-mail',
							},
						})}
					/>
					<label htmlFor='email'>Adres e-mail*</label>
				</div>
				{errors.email && <span className={styles.formError}>{errors.email.message}</span>}
				<div className={styles.formBox}>
					<textarea
						className={errors.message ? styles.inputError : ''}
						required
						id='msg'
						{...register('message', {
							required: 'Podaj wiadomość',
						})}
					></textarea>
					<label htmlFor='msg'>Wiadomość*</label>
				</div>
				{errors.message && <span className={styles.formError}>{errors.message.message}</span>}
				<button>Wyślij</button>
				<span
					className={`${styles.formSubmittedText}
				 ${isSubmitSuccessful ? styles.bounceInLeft : ''} ${fadeOut ? styles.fadeOut : ''}`}
				>
					Wiadomość została wysłana
				</span>
				{/* {errors.general && (
					<span
						className={`${styles.formTextError}
				 ${isSubmitSuccessful ? styles.bounceInLeft : ''} ${fadeOut ? styles.fadeOut : ''}`}
					>
						{errors.general.message}
					</span>
				)} */}
			</form>
		</Wrapper>
	)
}
