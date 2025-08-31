import type { ChildrenType } from '@/types/component-props';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'));

const HorizontalLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <Suspense fallback={<div />}>{children}</Suspense>
      <Suspense fallback={<div />}>
        <ScrollToTop />
      </Suspense>
    </>
  );
};

export default HorizontalLayout;
