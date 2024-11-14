import { marginBottom, navMarginTop } from '../constants/forStyles'
import MainContent from '../UI/MainContent/MainContent'
import MyProjects from './components/MyProjects/MyProjects'

export const metadata = {
	title: 'Projekty'
}

export default function MyProjectsPage() {
	return (
		<MainContent style={{marginTop: `${navMarginTop}`, marginBottom: `${marginBottom}`}}>
			<MyProjects />
		</MainContent>
	)
}
