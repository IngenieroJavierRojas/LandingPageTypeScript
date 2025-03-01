import { JSX } from 'react'

export const HeaderCustom = (): JSX.Element => {
  return (
    <div className='w-full bg-gradient-to-bl from-[#79c8ef] to-[#9c5eec]'>
        <img src='https://via.placeholder.com/150' alt='Acá se renderizará la imagén del propietario de la hoja de vida' className='mx-auto' />
        <div>
            <ul className='flex justify-end gap-5 p-2 font-semibold'>
                <li className='hover:underline focus:underline'><a href="/">Sobre mi</a></li>
                <li className='hover:underline focus:underline'><a href="/login">Proyectos</a></li>
                <li className='hover:underline focus:underline'><a href="/login">Experiencia</a></li>
                <li className='hover:underline focus:underline'><a href="/login">Educación</a></li>
                <li className='hover:underline focus:underline'><a href="/login">Contacto</a></li>
            </ul>
        </div>
    </div>
  )
}