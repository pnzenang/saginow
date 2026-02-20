'use client';

import { SignOutButton, useAuth } from '@clerk/nextjs';
import { toast } from 'sonner';

const SignOutLink = () => {
  const { sessionId } = useAuth();
  const handleLogout = () => {
    toast.success('Signed out successfully!', { position: 'bottom-right' });
  };

  return (
    <SignOutButton>
      <div>
        <button
          className='w-full text-left text-destructive hover:text-white'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </SignOutButton>
  );
};
export default SignOutLink;
