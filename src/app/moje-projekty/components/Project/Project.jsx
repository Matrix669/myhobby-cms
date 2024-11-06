import Link from 'next/link'
import { styles } from './Project.module.scss'
export default function Project({ href, title }) {
	return (
		<Link href={href} target='_blank'>
			<h2>{title}</h2>
		</Link>
	)
}
