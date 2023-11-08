import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="relative min-h-screen flex  justify-center MT">
      {/* Sidebar */}
      
      {/* Main Content */}
      <main className=" w-[95%] p-4 pt-0">
        {/* Navbar */}
        
          <Navbar/>
        {/* Main Content */}
        {children}
      </main>
    </div>
  );
}
