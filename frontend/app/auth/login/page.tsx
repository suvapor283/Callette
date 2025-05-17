'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/contexts/auth-context';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

interface LoginFormData {
  username: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormdata] = useState<LoginFormData>({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessages] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    if (!formData.username) {
      setErrorMessages('아이디를 입력해주세요.');
      return;
    }

    if (!formData.password) {
      setErrorMessages('비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        login(token);
        setErrorMessages('');
        router.push('/');
      } else {
        const errorData = await response.json();
        setErrorMessages(errorData.message);
      }
    } catch (error) {
      alert('로그인 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  const formFields = [
    {
      id: 'username',
      label: 'ID',
      placeholder: '아이디를 입력하세요.',
      type: 'text',
    },
    {
      id: 'password',
      label: 'PASSWORD',
      placeholder: '비밀번호를 입력하세요.',
      type: 'password',
    },
  ];

  return (
    <div className="m-auto w-full max-w-[430px]">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Login</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          {formFields.map((field) => (
            <div className="flex flex-col space-y-2" key={field.id}>
              <Label htmlFor={field.id} className="font-semibold text-gray-600">
                {field.label}
              </Label>
              <Input
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                className="w-full"
                value={formData[field.id as keyof LoginFormData]}
                onChange={handleChange}
                type={field.type}
              />
            </div>
          ))}
          {errorMessage && (
            <div className="p-1 text-center text-sm text-red-500">
              {errorMessage}
            </div>
          )}
        </form>
      </CardContent>

      <CardFooter className="flex flex-col items-center">
        <Button className="w-full" onClick={handleLogin}>
          로그인
        </Button>
        <div className="mt-5 flex items-center space-x-4 text-sm text-gray-500">
          <Link href="#" className="hover:text-gray-800">
            아이디 찾기
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-gray-800">
            비밀번호 찾기
          </Link>
          <span>|</span>
          <Link href="/auth/signup" className="hover:text-gray-800">
            회원가입
          </Link>
        </div>
      </CardFooter>
    </div>
  );
}
