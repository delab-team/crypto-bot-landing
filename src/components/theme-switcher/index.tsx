'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Image from 'next/image';

import s from './theme-switcher.module.scss';

import LIGHT from 'public/img/header/dark-mode.svg';
import DARK from 'public/img/header/light-mode.svg';

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const handleClick = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <motion.button
            className={s.themeChangeBtn}
            onClick={handleClick}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
        >
            {theme === 'light' ? <LIGHT /> : <DARK />}
        </motion.button>
    );
}
