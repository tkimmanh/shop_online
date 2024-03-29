import { UseFormRegister } from 'react-hook-form'
import classNames from 'src/utils/classNames'

interface Props {
  register?: UseFormRegister<any>
  value?: string
  name: string
  label?: string
  className?: string
}

const Checkbox = ({ name, value, label, register, className }: Props) => {
  const registerResult = register && name ? register(name) : ({} as any)

  return (
    <label htmlFor={name} className='flex items-center space-x-2 cursor-pointer'>
      <input id={name} type='checkbox' {...registerResult} value={value} className='opacity-0 absolute' />
      <span className='relative w-3 h-3 border-[2px] border-gray-400 flex justify-center items-center'>
        <span className='checkbox-indicator absolute w-[6px] h-[6px] bg-black transform scale-0'></span>
      </span>
      <span className={classNames('text-base', className)}>{label}</span>
    </label>
  )
}

export default Checkbox
