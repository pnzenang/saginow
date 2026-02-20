import { CircleUser } from 'lucide-react';
import { LuUser } from 'react-icons/lu';

import { SignedOut, SignedIn } from '@clerk/nextjs';
const UserIcon = () => {
  return (
    <>
      <SignedOut>
        <div className='rounded-full border-2 border-white '>
          <LuUser className=' w-10 h-10 rounded-full  text-white' />
        </div>
      </SignedOut>
      <SignedIn>
        <div className='rounded-full border-2 border-primary'>
          <LuUser className=' w-10 h-10 rounded-full bg-primary text-white' />
        </div>
      </SignedIn>
    </>
  );
};
export default UserIcon;
