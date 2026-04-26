//Keep pages as server and whatever ui functionality needs to be done, do it in /components with 'use client' and call it in pages
import React from 'react';
import ToastSample from '@/components/ui/ToastSample';

export default function SamplePage() {
  return (
    <main className="p-6">
      <div className="mb-4">Hello</div>
      <ToastSample />
    </main>
  );
}
