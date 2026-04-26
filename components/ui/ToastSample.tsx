'use client';
import { showToast } from '@/utils/toast';
import React from 'react';

export default function ToastSample() {
  return (
    <div>
      <div className="space-x-4">
        <button
          onClick={() => showToast.success('Success')}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
        >
          Success
        </button>

        <button
          onClick={() => showToast.error('Error')}
          className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md"
        >
          Error
        </button>

        <button
          onClick={() => showToast.info('Info')}
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md"
        >
          Info
        </button>

        <button
          onClick={() => showToast.warning('Warning')}
          className="bg-warning text-warning-foreground px-4 py-2 rounded-md"
        >
          Warning
        </button>

        <button
          onClick={() => showToast.loading('Loading')}
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md"
        >
          Loading
        </button>
      </div>
    </div>
  );
}
