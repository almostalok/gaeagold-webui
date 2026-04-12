import React from 'react';
import Link from 'next/link';

export default function page() {
  return (
    <section className="section-shell py-10">
      <h1 className="text-4xl font-bold text-[#1B5E3F]">Protected Dashboard</h1>
      <p className="mt-2 text-sm text-[#6B6B6B]">Use the admin modules below to manage operations.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/admin" className="brand-btn-secondary">
          Open Admin Dashboard
        </Link>
        <Link href="/admin/products" className="brand-btn-outline">
          Manage Products
        </Link>
      </div>
    </section>
  );
}
