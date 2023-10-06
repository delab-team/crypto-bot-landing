import s from './container.module.scss';

interface ContainerProps {
    children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return <div className={s.container}>{children}</div>;
}
