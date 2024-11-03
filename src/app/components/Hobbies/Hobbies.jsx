import Wrapper from '@/app/UI/Wrapper/Wrapper'
import BADMINTON from '../../assets/badminton.png'
import FOOTBALL from '../../assets/football-1486353_640-small.jpg'
import PROGRAMMING from '../../assets/programming-1873854_640.png'
import Hobby from '../Hobby/Hobby'

const HOBBYS = [
	{
		id: 'badminton',
		title: 'Badminton',
		imgSrc: BADMINTON,
		alt: 'opis obrazka 1',
		subTitle: 'Najszybszy sport na świecie',
		text: '2- lub 4-osobowa dyscyplina sportowa. Gra polega na przebijaniu nad siatką lotki za pomocą rakietek. Lotka o masie od 4,74 g do 5,50 g wykonana jest z korka pokrytego warstwą skóry i 16 piórek naturalnych lub z materiałów syntetycznych. Klasyczny mecz składa się z setów rozgrywanych do 21 punktów (wymagana jest przewaga dwóch punktów: jeżeli strony osiągną wynik 29:29, to seta wygrywa strona zdobywająca 30 punktów). Gra kończy się, gdy jeden z zawodników lub jedna z drużyn wygrywa dwa sety.',
	},
	{
		id: 'pilka-nozna',
		title: 'Piłka nożna',
		imgSrc: FOOTBALL,
		alt: 'opis obrazka 2',
		subTitle: 'Jeden z najpopularniejszych sportów na świecie',
		text: 'Gra zespołowa, w której dwie drużyny starają się zdobyć w określonym czasie jak najwięcej punktów poprzez wbicie piłki do bramki; najpopularniejsza dyscyplina sportowa z około 4 miliardami fanów na całym świecie.',
	},
	{
		id: 'programowanie',
		title: 'Programowanie',
		imgSrc: PROGRAMMING,
		alt: 'opis obrazka 3',
		subTitle: 'Programowanie czyli myślenie logiczne i nie tylko',
		text: 'Tworzenia programu komputerowego, który ma realizować określone zadania. Kod źródłowy jest napisany w języku programowania. Między programistami trwają debaty, czy programowanie komputerów jest sztuką, rzemiosłem czy procesem inżynieryjnym. Bezpośrednią formą sztuki w tej dziedzinie jest demoscena oraz nowoczesne gry komputerowe.',
	},
]
export default function Hobbies() {
	return (
		<Wrapper>
			{HOBBYS.map(hobby => {
				return (
					<Hobby
						key={hobby.id}
						id={hobby.id}
						imgSrc={hobby.imgSrc}
						subTitle={hobby.subTitle}
						text={hobby.text}
						title={hobby.title}
						alt={hobby.alt}
					/>
				)
			})}
		</Wrapper>
	)
}
