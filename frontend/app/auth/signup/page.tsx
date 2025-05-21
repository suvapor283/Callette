'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SignupForm } from '@/components/form/SignupForm';
import { SignupFormProps } from '@/components/form/SignupForm';

export default function SignupPage() {
  const router = useRouter();

  const onSubmit: SignupFormProps['onSubmit'] = async (data) => {
    try {
      const response = await fetch('http://localhost:8081/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok) {
        alert(resData.message);
        router.push('/');
      }
    } catch (error) {
      alert('회원가입 중 네트워크 오류가 발생했습니다.');
      console.error(error);
    }
  };

  return (
    <div className="m-auto w-full max-w-[500px]">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Sign Up
        </CardTitle>
      </CardHeader>

      <CardContent>
        <SignupForm onSubmit={onSubmit} /> {/* 분리된 폼 컴포넌트 사용 */}
      </CardContent>

      <CardFooter className="flex flex-col items-center">
        <p className="mt-5 text-center text-sm text-gray-500">
          이미 계정이 있으신가요?
          <Link
            href="/auth/login"
            className="px-1 text-blue-600 hover:underline"
          >
            로그인
          </Link>
        </p>
      </CardFooter>
    </div>
  );
}
