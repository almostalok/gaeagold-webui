'use client';

import { useFormContext } from 'react-hook-form';

interface FormInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export default function FormInput({ name, label, type = 'text', placeholder }: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <label className="text-sm">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full border border-border bg-input px-3 py-2 rounded-md"
      />

      {errors[name] && (
        <p className="text-destructive text-sm">{errors[name]?.message?.toString()}</p>
      )}
    </div>
  );
}
