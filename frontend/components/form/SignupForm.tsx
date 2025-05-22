'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const SignupSchema = z
  .object({
    username: z
      .string()
      .min(5, '아이디는 5자 이상이어야 합니다.')
      .max(20, '아이디는 20자 이하이어야 합니다.')
      .regex(
        /^[a-z0-9_-]+$/,
        '아이디는 영문 소문자, 숫자, _ 와 - 만 가능합니다.'
      ),
    password: z
      .string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하이어야 합니다.')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).+$/,
        '비밀번호는 영문 대/소문자, 숫자, 특수문자를 모두 포함해야 합니다.'
      ),
    password2: z.string(),
    nickname: z.string().min(1, '닉네임은 필수입니다.'),
    name: z
      .string()
      .min(1, '이름은 필수입니다.')
      .regex(/^[a-zA-Z가-힣]+$/, '이름은 한글 또는 영문만 가능합니다.'),
    birthDate: z
      .string()
      .length(8, '생년월일은 8자리 숫자여야 합니다.')
      .regex(/^\d{8}$/, '생년월일은 숫자만 입력 가능합니다.'),
    phoneNumber: z
      .string()
      .min(10, '휴대폰 번호는 10~11자리여야 합니다.')
      .max(11, '휴대폰 번호는 10~11자리여야 합니다.')
      .regex(/^\d+$/, '휴대폰 번호는 숫자만 입력 가능합니다.'),
    email: z
      .string()
      .email('유효한 이메일이 아닙니다.')
      .optional()
      .or(z.literal('')),
  })
  .refine((data) => data.password === data.password2, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['password2'],
  });

type SignupFormData = z.infer<typeof SignupSchema>;

export interface SignupFormProps {
  onSubmit: (
    data: SignupFormData,
    setErrorMessages: React.Dispatch<
      React.SetStateAction<Partial<Record<keyof SignupFormData, string>>>
    >
  ) => void;
}

export function SignupForm({ onSubmit }: SignupFormProps) {
  const [errorMessages, setErrorMessages] = useState<
    Partial<Record<keyof SignupFormData, string>>
  >({});

  const form = useForm<SignupFormData>({
    resolver: zodResolver(SignupSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
      password2: '',
      nickname: '',
      name: '',
      birthDate: '',
      phoneNumber: '',
      email: '',
    },
  });

  const formFields = [
    {
      id: 'username',
      label: 'User ID',
      placeholder: '아이디를 입력하세요.',
      type: 'text',
    },
    {
      id: 'password',
      label: 'Password',
      placeholder: '비밀번호를 입력하세요.',
      type: 'password',
    },
    {
      id: 'password2',
      label: 'Confirm Password',
      placeholder: '비밀번호를 다시 입력하세요.',
      type: 'password',
    },
    {
      id: 'nickname',
      label: 'Nickname',
      placeholder: '사용할 닉네임을 입력하세요.',
      type: 'text',
    },
    {
      id: 'name',
      label: 'Name',
      placeholder: '이름을 입력하세요.',
      type: 'text',
    },
    {
      id: 'birthDate',
      label: 'Birth Date',
      placeholder: '예: 19950101',
      type: 'text',
    },
    {
      id: 'phoneNumber',
      label: 'Phone Number',
      placeholder: '예: 01012345678',
      type: 'text',
    },
    {
      id: 'email',
      label: 'E-mail',
      placeholder: '예: example@email.com',
      type: 'text',
    },
  ];

  const allValues = form.watch();

  React.useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (!name) return;

      const typedName = name as keyof SignupFormData;

      if (type === 'change' && errorMessages[typedName]) {
        setErrorMessages((prev) => ({
          ...prev,
          [typedName]: undefined,
        }));
      }
    });

    return () => subscription.unsubscribe();
  }, [form.watch, errorMessages]);

  return (
    <Form {...form}>
      <form
        className="space-y-5"
        onSubmit={form.handleSubmit((data) => {
          setErrorMessages({});
          onSubmit(data, setErrorMessages);
        })}
        noValidate
      >
        {formFields.map(({ id, label, placeholder, type }) => (
          <FormField
            key={id}
            control={form.control}
            name={id as keyof SignupFormData}
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-1">
                <Label htmlFor={id} className="font-semibold text-gray-600">
                  {label}
                </Label>
                <FormControl>
                  <Input
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    {...field}
                  />
                </FormControl>

                {errorMessages[id as keyof SignupFormData] ? (
                  <p className="text-[0.8rem] font-medium text-destructive">
                    {errorMessages[id as keyof SignupFormData]}
                  </p>
                ) : (
                  <FormMessage />
                )}
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="w-full">
          회원가입
        </Button>
      </form>
    </Form>
  );
}
