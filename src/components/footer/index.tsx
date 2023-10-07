'use client'

import Link from 'next/link';

import Container from '../container';
import Button from '../ui/button';

import { useMediaQuery } from '@/hooks/use-media-query';

import s from './footer.module.scss';

import LOGO from 'public/img/header/logo.svg';
import LOGO_MOBILE from 'public/img/header/logo-mobile.svg';

export default function Footer() {
    const isMobile = useMediaQuery(768);

    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.footerRow}>
                    <Link href="/" className={s.footerLogo}>
                    {!isMobile ? <LOGO /> : <LOGO_MOBILE />}
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
