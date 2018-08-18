import * as React from 'react';
import * as s from './PageTitle.css';

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return <h1 className={s.title}>{title}</h1>;
}
