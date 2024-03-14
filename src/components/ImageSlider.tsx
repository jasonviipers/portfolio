import { useState } from "react"

interface ImageSliderProps {
    urls: string[]
  }

  
export const ImageSlider: React.FC<ImageSliderProps> = ({ urls }) => {
    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        setCurrent(current === 0 ? urls.length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === urls.length - 1 ? 0 : current + 1)
    }

    if (!Array.isArray(urls) || urls.length <= 0) {
        return null
    }

    return (
        <section className='relative'>
            <div className='flex justify-center'>
                <img
                    src={urls[current]}
                    alt='product'
                    className='object-cover w-full h-96'
                />
            </div>
            <button
                onClick={prevSlide}
                className='absolute top-1/2 left-4 transform -translate-y-1/2 focus:outline-none'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-gray-900'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 19l-7-7 7-7'
                    />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className='absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-gray-900'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                    />
                </svg>
            </button>
        </section>
    )
}