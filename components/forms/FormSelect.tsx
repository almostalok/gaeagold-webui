'use client';

import { useFormContext } from 'react-hook-form';

type SelectOption = {
  value: string | number;
  label: string;
};

interface FormSelectProps {
  name: string;
  label: string;
  options?: SelectOption[];
}

export default function FormSelect({ name, label, options = [] }: FormSelectProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <label className="text-sm">{label}</label>

      <select
        {...register(name)}
        className="w-full border border-border bg-input px-3 py-2 rounded-md"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {errors[name] && (
        <p className="text-destructive text-sm">{errors[name]?.message?.toString()}</p>
      )}
    </div>
  );
}
