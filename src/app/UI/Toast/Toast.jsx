import { Toaster } from 'sonner'

export default function Toast({children }) {
	return (
		<>
			<Toaster richColors position='bottom-right' expand={true}/>
			<button>{children}</button>
		</>
	)
}
