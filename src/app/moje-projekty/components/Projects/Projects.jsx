import Project from '../Project/Project'

const PROJECTS = [
	{
		title: 'Title 1',
		href: 'https://matrix669.github.io/Fluence-website/',
	},
	{
		title: 'Title 2',
		href: 'https://matrix669.github.io/Fluence-website/',
	},
	{
		title: 'Title 3',
		href: 'https://matrix669.github.io/Fluence-website/',
	},
	{
		title: 'Title 4',
		href: 'https://matrix669.github.io/Fluence-website/',
	},
]

export default function Projects() {
	return (
		<div>
			{PROJECTS.map(project => {
				return <Project key={project.title} href={project.href} title={project.title} />
			})}
		</div>
	)
}
