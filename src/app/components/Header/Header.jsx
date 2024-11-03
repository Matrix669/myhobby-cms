import Image from 'next/image'
import heroImg from '../../assets/running-track-1201014_1920-big.jpg'
import HeroBtn from '@/app/UI/HeroBtn/HeroBtn'
import styles from './Header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<Image src={heroImg} fill={true} placeholder='blur' style={{objectFit: 'cover'}}  alt=''/>
            <h1>my<span>hobby</span></h1>
			<HeroBtn link={'#badminton'}>Poznaj mnie</HeroBtn>
		</header>
	)
}
