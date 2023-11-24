'use client';

import clsx from 'clsx';
import Head from 'next/head';
import * as React from 'react';

import { useLoaded } from '@/hooks';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const isLoaded = useLoaded();

  return (
    <main className={clsx(isLoaded && 'fade-in-start')}>
      <Head>
        <title>Hi</title>
      </Head>
      <section data-fade='2' className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1>Hello World</h1>
        </div>
      </section>
    </main>
  );
}
