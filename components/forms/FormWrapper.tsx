'use client';

import { FormProvider, useForm, FieldValues, SubmitHandler, DefaultValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { ZodTypeAny } from 'zod';

interface FormWrapperProps<T extends FieldValues> {
  children: ReactNode;
  onSubmit: SubmitHandler<T>;
  schema: ZodTypeAny;
  defaultValues?: DefaultValues<T>;
}

export default function FormWrapper<T extends FieldValues>({
  children,
  onSubmit,
  schema,
  defaultValues,
}: FormWrapperProps<T>) {
  const methods = useForm<T>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema as any),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        {children}
      </form>
    </FormProvider>
  );
}
