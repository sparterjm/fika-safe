'use client';
import { Button } from '@/app/Components/ui/button';
import CrimeMap from '@/app/Components/Crime';
import { IncidentReport } from '@/app/Components/incident-report';
import clsx from 'clsx';
import React, { useState } from 'react';
import { XIcon } from 'lucide-react';

export default function UserPage() {
  const [openForm, setOpenForm] = useState(false);

  const toggleForm = () => {
    setOpenForm((prev) => !prev);
  };

  return (
    <div className='w-full h-full flex items-center'>
      {/* Main Content with Map */}
      <div className={clsx(openForm ? 'w-3/5' : 'w-full', 'transition-all duration-300')}>
        <CrimeMap />
        <div className='fixed top-20 right-4 z-50'>
          <Button onClick={toggleForm} aria-label={openForm ? 'Close Form' : 'Open Form'}>
            {openForm ? <XIcon className='w-[1.2rem] h-[1.2rem]' /> : 'Open Form'}
          </Button>
        </div>
      </div>

      {/* Incident Report Form */}
      <div
        className={clsx(
          'h-full ml-5 mt-5 transition-all duration-300',
          { 'hidden': !openForm, 'w-1/4': openForm } // Adjusted width for better usability
        )}
      >
        {openForm && <IncidentReport />}
      </div>
    </div>
  );
}
