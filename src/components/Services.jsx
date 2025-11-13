import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion, AnimatePresence} from 'motion/react'

const Services = () => {

    const [selectedIndex, setSelectedIndex] = useState(null)

    const servicesData = [
        {
          title: 'Installation',
          description: 'We implement high-efficiency systems tailored to your needs, ensuring optimal performance and unmatched comfort.',
          image: assets.install_image,
          alt: 'Technician installing HVAC duct system'
        },
        {
          title: 'Maintenance',
          description: 'Preventive plans designed to extend the lifespan of your equipment, prevent failures, and maintain operational efficiency.',
          image: assets.manteniminento_image,
          alt: 'Maintenance of ventilation components'
        },
        {
            title: 'Repair',
            description: 'Accurate diagnostics and effective solutions to restore your system’s full operation with minimal downtime.',
            image: assets.repair_image,
            alt: 'Repairing damaged duct section'
        },
        {
            title: 'Consulting',
            description: 'Expert advice for system design and optimization, ensuring efficiency and compliance with technical standards.',
            image: assets.consulting_image,
            alt: 'HVAC design consultation'
        },
    ]

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.5 }}
      
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

    <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

    <Title title='Expert Services in HVAC Systems' desc='We offer comprehensive solutions to ensure your comfort, optimize energy efficiency, and extend the lifespan of your climate control systems.'/>

  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
        {servicesData.map((service, index)=>(
            <ServiceCard key={index} service={service} index={index} onOpen={()=> setSelectedIndex(index)} />
        ))}
    </div>

    <AnimatePresence>
      {selectedIndex !== null && (()=>{ const s = servicesData[selectedIndex]; return (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={()=> setSelectedIndex(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            className='relative max-w-5xl w-full'
            onClick={(e)=> e.stopPropagation()}
          >
            <img src={s.image} alt={s.alt || s.title} className='w-full max-h-[75vh] object-contain rounded-xl shadow-2xl bg-black' />
            <button
              onClick={()=> setSelectedIndex(null)}
              className='absolute top-3 right-3 bg-white/85 dark:bg-gray-800/85 backdrop-blur px-3 py-1 rounded-full text-xs font-medium hover:bg-white dark:hover:bg-gray-700 transition'
            >Cerrar</button>
            {servicesData.length > 1 && (
              <>
                <button
                  onClick={(e)=> { e.stopPropagation(); setSelectedIndex(prev => (prev - 1 + servicesData.length) % servicesData.length) }}
                  className='absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shadow'
                  aria-label='Anterior'
                >&lt;</button>
                <button
                  onClick={(e)=> { e.stopPropagation(); setSelectedIndex(prev => (prev + 1) % servicesData.length) }}
                  className='absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shadow'
                  aria-label='Siguiente'
                >&gt;</button>
                <div className='absolute top-3 left-3 text-[10px] px-2 py-1 rounded-full bg-black/50 text-white tracking-wide'>
                  {selectedIndex + 1} / {servicesData.length}
                </div>
              </>
            )}
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 rounded-b-xl'>
              <h4 className='text-white font-semibold text-sm'>{s.title}</h4>
              <p className='text-white/80 text-xs mt-1'>{s.alt || ''}</p>
              <p className='text-white/70 text-xs mt-2'>{s.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )})()}
    </AnimatePresence>

    </motion.div>
  )
}

export default Services
