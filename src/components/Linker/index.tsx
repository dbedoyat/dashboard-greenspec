'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

interface LinkerProps {
  children: React.ReactNode;
  href: string;
  activeClassName?: string;
  nonActiveClassName?: string;
  className?: string;
}

const Linker = ({
  children,
  href,
  activeClassName,
  nonActiveClassName,
  className,
  ...rest
}: LinkerProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + '/');
  const newClassName = `${
    isActive ? activeClassName : nonActiveClassName
  } ${className}`;

  return (
    <Link href={href} className={newClassName} {...rest}>
      {children}
    </Link>
  );
};
export default Linker;
