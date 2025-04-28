'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface SignupFormData {
  username: string;
  password: string;
  password2: string;
  nickname: string;
  name: string;
  birthDate: string;
  phoneNumber: string;
  email: string;
}

export default function SignupPage() {
  const [formData, setFormdata] = useState<SignupFormData>({
    username: '',
    password: '',
    password2: '',
    nickname: '',
    name: '',
    birthDate: '',
    phoneNumber: '',
    email: '',
  });

  const [errorMessages, setErrorMessages] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setErrorMessages({});
        alert('회원가입을 축하합니다!');
      } else {
        const errorData = await response.json();
        setErrorMessages(errorData);
      }
    } catch (error) {
      alert('회원가입 중 오류가 발생했습니다');
      console.error(error);
    }
  };

  const formFields = [
    {
      id: 'username',
      label: 'User ID',
      placeholder: '아이디를 입력하세요',
      required: true,
    },
    {
      id: 'password',
      label: 'Password',
      placeholder: '비밀번호를 입력하세요',
      required: true,
    },
    {
      id: 'password2',
      label: 'Confirm Password',
      placeholder: '비밀번호를 다시 입력하세요',
      required: true,
    },
    {
      id: 'nickname',
      label: 'Nickname',
      placeholder: '사용할 닉네임을 입력하세요',
      required: true,
    },
    {
      id: 'name',
      label: 'Name',
      placeholder: '이름을 입력하세요',
      required: true,
    },
    {
      id: 'birthDate',
      label: 'Birth Date',
      placeholder: '예: 19950101',
      required: true,
    },
    {
      id: 'phoneNumber',
      label: 'Phone Number',
      placeholder: '예: 01012345678',
      required: true,
    },
    {
      id: 'email',
      label: 'E-mail',
      placeholder: '예: example@email.com',
      required: false,
    },
  ];

  return (
    <div className="mx-auto my-2 w-[70%] min-w-[500px]">
      <CardHeader>
        <CardTitle className="p-2 text-center text-2xl font-bold">
          Sign Up
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form className="items-center space-y-3">
          {formFields.map((field) => (
            <div className="space-y-1.5" key={field.id}>
              <Label htmlFor={field.id}>
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </Label>
              <Input
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                value={formData[field.id as keyof SignupFormData]}
                onChange={handleChange}
              />
              {errorMessages[field.id] && (
                <span className="text-sm text-red-500">
                  {errorMessages[field.id]}
                </span>
              )}
            </div>
          ))}
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <p className="text-center text-sm text-gray-500">
          이미 계정이 있으신가요?
          <Link href="#" className="px-1 text-blue-600 hover:underline">
            로그인
          </Link>
        </p>
        <Button onClick={handleSignup}>회원가입</Button>
      </CardFooter>
    </div>
  );
}
