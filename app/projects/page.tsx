import React from 'react'
import Projects from '@/components/Projects/Project';
import MainLayout from '@/layouts/Layouts';

export const metadata = {
  title: 'Projects - Dale Larroder',
  description: 'My Projects - Dale Larroder',
};


const Project = () => {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Here are some of my selected projects worth sharing.
        </p>
      </div>
      <Projects />
    </MainLayout>
  )
}

export default Project