import Project from '../Project/Project'
import PROJECT_IMG from '@/app/assets/fluence-website.png'

const PROJECTS = [
	{
		title: 'Title 1',
		href: 'https://matrix669.github.io/Fluence-website/',
		imgSrc: PROJECT_IMG,
	},
	{
		title: 'Title 2',
		href: 'https://matrix669.github.io/Fluence-website/',
		imgSrc: PROJECT_IMG,
	},
	{
		title: 'Title 3',
		href: 'https://matrix669.github.io/Fluence-website/',
		imgSrc: PROJECT_IMG,
	},
	{
		title: 'Title 4',
		href: 'https://matrix669.github.io/Fluence-website/',
		imgSrc:  PROJECT_IMG,
	},
]

export default function Projects() {
	return (
		<div>
			{PROJECTS.map(project => {
				return <Project key={project.title} href={project.href} title={project.title} imgSrc={project.imgSrc}/>
			})}
		</div>
	)
}
