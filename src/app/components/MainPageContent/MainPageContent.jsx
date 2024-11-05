import ContactForm from '../ContactForm/ContactForm'
import Hobbies from '../Hobbies/Hobbies'
import styles from './MainPageContent.module.scss'
export default function MainPageContent() {
	return (
		<main>
			<section className={styles.sectionPadding}>
				<Hobbies />
			</section>
			<section className={styles.sectionPadding}>
				<ContactForm />
			</section>
		</main>
	)
}
