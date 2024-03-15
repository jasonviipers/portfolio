// import { useAuthModal } from "@/hooks/useAuthModal";

// interface ProductProp {
//     params: {
//         productId: string
//     }
// }

// export default function Product({ params }: ProductProp) {
//     const { productId } = params;

//     return (
//         <div className="flex items-center justify-center mb-8">
//             <div className="bg-white p-4 rounded-md shadow-md">
//                 <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
//                     <div className='lg:max-w-lg lg:self-end'>
//                         <ol className='flex items-center space-x-2'>
//                             <li>
//                                 <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
//                                     <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//                                         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
//                                     </svg>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
//                                     <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//                                         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
//                                     </svg>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
//                                     <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//                                         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
//                                     </svg>
//                                 </div>
//                             </li>
//                         </ol>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}