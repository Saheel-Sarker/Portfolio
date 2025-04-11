'use client'
import { motion } from 'motion/react'
import { ArrowUpRight, ChevronDown, ChevronDownSquare, ChevronUp, ChevronUpCircle, ChevronUpSquare, FolderGit, GitBranch, Github, Link2, MoveUpRight, SquareArrowOutUpRight, XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  TECHNOLOGIES,
  EMAIL,
  PHONE,
  SOCIAL_LINKS,
  EDUCATION,
} from './data'
import { Timeline } from '@/components/ui/TimeLine'
import { TechnologiesGrid } from '@/components/ui/TechnologiesGrid'
import { Education } from '@/components/ui/Education'
import { Tooltip } from 'react-tooltip'
import { Disclosure, DisclosureContent, DisclosureTrigger } from '@/components/motion-primitives/disclosure'
import { useState } from 'react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

type ProjectImgProps = {
  img: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function ProjectImg({img} : ProjectImgProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <img
          src={img}
          className="w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <img
            src={img}
            className="h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
  label
}: {
  children: React.ReactNode
  link: string
  label: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <Link
        target={label !== 'Phone' && label !== 'Email' ? '_blank' : undefined}
        href={label === 'Phone' ? `tel:${PHONE}` : (label === 'Email' ? `mailto:${EMAIL}` : link)}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 w-10 h-10 justify-center"
        data-tooltip-id={label}
        data-tooltip-content={label}
      >
        {children}
        <Tooltip id={label} place='bottom-start'></Tooltip>
      </Link>
    </Magnetic>
  )
}

export default function Personal() { 
  const [expanded, setExpanded] = useState<String[]>([])
  function handleExpanded(id: string) {
    if (expanded.includes(id)){
      setExpanded(expanded => expanded.filter(i => i !== id))
    }
    else {
      setExpanded(expanded => [...expanded, id])
    }
  }
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Focused on creating intuitive and performant web experiences.
            Bridging the gap between design and development.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">
            As an developer, I thrive on identifying unique challenges and
            building innovative, scalable solutions. My ventures include
            developing apps and platforms that address real-world problems,
            combining technical expertise with a vision for impactful,
            user-centric products.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id='technologies'
        className='scroll-mt-36'
      >
        <h3 className="mb-5 text-lg font-medium">Technologies</h3>
        <TechnologiesGrid technologies={TECHNOLOGIES} />

      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id='projects'
        className='scroll-mt-36'
      >
        <h3 className="mb-5 text-lg font-medium">Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                {/* <ProjectVideo src={project.video} /> */}
                {/* <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full rounded-xl object-cover ">
                  </img> */}
                  <ProjectImg img={project.thumbnail}/>
              </div>
                <div className='flex justify-between'>
                <p
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  
                >
                  {project.name} 
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
                </p>
                <div className='flex'>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className='flex text-zinc-600 dark:text-zinc-400 hover:underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-50 cursor-none'>
                   <Github className='w-5'></Github>
                  </Link>
                  {project.link && <Link href={project.link} target="_blank" rel="noopener noreferrer" className='flex text-zinc-600 dark:text-zinc-400 hover:underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-50 cursor-none'>
                    <SquareArrowOutUpRight className='w-5'></SquareArrowOutUpRight>
                  </Link>}

                  </div>
                </div>
                <p className='text-base text-zinc-600 dark:text-zinc-400'>
                  {project.description}
                </p>
                <Disclosure>
                <DisclosureTrigger>
                  <div>
                  <p className='hover:text-zinc-950 dark:hover:text-zinc-50 text-zinc-600 dark:text-zinc-400' onClick={() => handleExpanded(project.id)}>{expanded.includes(project.id) ? <ChevronUp></ChevronUp> : <ChevronDown></ChevronDown>}</p>
                  </div>
                </DisclosureTrigger>
                <DisclosureContent>
                <ul className="mt-2 list-disc list-inside text-zinc-600 dark:text-zinc-400 ml-2.25">
                  {project.technologies?.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                </DisclosureContent>
              </Disclosure>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id='education'
        className='scroll-mt-36'
      >
        <h3 className="mb-5 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-0">
          <Education items={EDUCATION} />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id='experience'
        className='scroll-mt-36'
      >
        <h3 className="mb-5 text-lg font-medium">Experience</h3>
        <div className="flex flex-col space-y-0 ">
          <Timeline items={WORK_EXPERIENCE} />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id='contact'
        className='scroll-mt-36'
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
            <Link className="underline dark:text-zinc-300 underline-offset-1" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </Link>
          {' '} or {' '}
          <Link className="underline dark:text-zinc-300" href={`tel:${PHONE}`}>
              1-780-880-8416
            </Link>
          {' '} or the other ways below. I'd love a chance to connect with other like minded individuals.
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            // <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
            //   {link.logo}
            // </Magnetic>

            <MagneticSocialLink key={link.label} link={link.link} label={link.label}>
              {link.logo}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
