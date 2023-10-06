import Image from 'next/image';
import Link from 'next/link';

import Container from '../container';
import Button from '../ui/button';

import s from './footer.module.scss';

import LOGO from 'public/img/header/logo.svg';

export default function Footer() {
    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.footerRow}>
                    <Link href="/" className={s.footerLogo}>
                        <Image src={LOGO} alt="logo" />
                    </Link>
                    <nav className={s.footerNav}>
                        <ul className={s.footerList}>
                            <li>
                                <Link className={s.footerLink} href="/">
                                    Use cases
                                </Link>
                            </li>
                            <li>
                                <Link className={s.footerLink} href="/">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link className={s.footerLink} href="/">
                                    How to start
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Button style={{ color: 'white' }} variant="primary">
                        Get started
                    </Button>
                </div>
                <div className={s.copyright}>©2023 Crypto Bot</div>
            </Container>
        </footer>
    );
}
