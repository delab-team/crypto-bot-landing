'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';

import Container from '../container';
import Button from '../ui/button';
import ThemeSwitcher from '../theme-switcher';

import { casesRef } from '@/sections/sales-info';
import { featuresRef } from '@/sections/features-block';
import { startRef } from '@/sections/instruction-block';

import { useMediaQuery } from '@/hooks/use-media-query';

import s from './header.module.scss';

import LOGO from 'public/img/header/logo.svg';
import LOGO_MOBILE from 'public/img/header/logo-mobile.svg';

export interface NavRef {
    current: HTMLDivElement | null;
}

export default function Header() {
    const { theme, setTheme } = useTheme();

    const scroll = (ref: NavRef) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const isMobile = useMediaQuery(768);

    return (
        <header className={s.header}>
            <Container>
                <div className={s.headerRow}>
                    <Link href="/" className={s.headerLogo}>
                        {!isMobile ? <LOGO /> : <LOGO_MOBILE />}
                    </Link>
                    <nav className={s.headerNav}>
                        <ul className={s.headerList}>
                            <li>
                                <Link
                                    className={s.headerLink}
                                    href="#"
                                    onClick={() => scroll(casesRef)}
                                >
                                    Use cases
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={s.headerLink}
                                    href="#"
                                    onClick={() => scroll(featuresRef)}
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={s.headerLink}
                                    href="#"
                                    onClick={() => scroll(startRef)}
                                >
                                    How to start
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={s.themeSwitcher}>
                        <ThemeSwitcher />
                    </div>
                    <Button variant={theme === 'light' ? 'secondary' : 'primary'}>
                        Get started
                    </Button>
                </div>
            </Container>
        </header>
    );
}
