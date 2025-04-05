'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
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
        <Tooltip id={label} place='bottom'></Tooltip>
        {/* <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg> */}
      </Link>
    </Magnetic>
  )
}

export default function Personal() {
  const [selectedProjects, setSelectedProjects] = useState<string[]>([])

  function handleSelectedProjects(id : string) {
    console.log('is clicked')
    if (selectedProjects.includes(id)) {
      setSelectedProjects(selectedProjects => selectedProjects.filter(i => i !==  id));
    }
    else {
      setSelectedProjects(selectedProjects => [...selectedProjects, id]);
    }
    console.log(selectedProjects)
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
      >
        <h3 className="mb-5 text-lg font-medium">Technologies</h3>
        <AnimatedBackground className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80">
            <TechnologiesGrid technologies={TECHNOLOGIES} />
        </AnimatedBackground>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                {/* <ProjectVideo src={project.video} /> */}
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full rounded-xl object-cover ">
                  </img>
              </div>
              <Disclosure className="px-1">
                <DisclosureTrigger>
                <div>
                <Link
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50 hover:underline underline-offset-2 cursor-none"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
                </Link>
                <p className={`text-base hover:dark:text-zinc-50 hover:text-zinc-950  ${selectedProjects.includes(project.id) ? 'text-zinc-950 dark:text-zinc-50' : 'text-zinc-700 dark:text-zinc-300 hover:animate-none animate-wiggle'}`} onClick={()=>handleSelectedProjects(project.id)}>
                  {project.description}
                </p>
                </div>
                </DisclosureTrigger>
                <DisclosureContent>
                <ul className="mt-2 list-disc list-inside text-zinc-600 dark:text-zinc-400">
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
      >
        <h3 className="mb-5 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-2">
          <Education items={EDUCATION} />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Experience</h3>
        <div className="flex flex-col space-y-2 ">
          <Timeline items={WORK_EXPERIENCE} />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
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
