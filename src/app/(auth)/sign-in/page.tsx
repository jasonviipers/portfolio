// 'use client';

// import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";
// import { signIn } from 'next-auth/react';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { zodResolver } from "@hookform/resolvers/zod";
// import { motion } from "framer-motion";
// import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react";
// import { LoginUserInput, loginUserSchema } from "@/server/validation/user";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";

// export default function SignInPage() {
//     const router = useRouter();
//     const [error, setError] = useState('');
//     const [submitting, setSubmitting] = useState(false);

//     const searchParams = useSearchParams();
//     const callbackUrl = searchParams.get('callbackUrl') || '/';

//     const methods = useForm<LoginUserInput>({
//         resolver: zodResolver(loginUserSchema),
//     });

//     const {
//         reset,
//         handleSubmit,
//         register,
//         formState: { errors },
//     } = methods;

//     const onSubmitHandler: SubmitHandler<LoginUserInput> = async (values) => {
//         try {
//             setSubmitting(true);

//             const res = await signIn('credentials', {
//                 redirect: false,
//                 email: values.email,
//                 password: values.password,
//                 redirectTo: callbackUrl,
//             });

//             setSubmitting(false);

//             if (!res?.error) {
//                 router.push(callbackUrl);
//             } else {
//                 reset({ password: '' });
//                 const message = 'invalid email or password';
//                 setError(message);
//             }
//         } catch (error: any) {
//             setError(error.message);
//         } finally {
//             setSubmitting(false);
//         }
//     };
//     return (
//         <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black/45">
//             <motion.h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
//                 Sign in
//             </motion.h2>
//             <motion.p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
//                 Sign in to continue to your account.
//             </motion.p>
//             <form className="my-8" onSubmit={handleSubmit(onSubmitHandler)}>
//                 <LabelInputContainer className="mb-4">
//                     <Label htmlFor="email">Email Address</Label>
//                     <Input id="email" placeholder="projectmayhem@fc.com" type="email"
//                         {...register('email')}
//                     />
//                     {errors.email && (
//                         <p className="text-red-500 text-xs mt-1">
//                             {errors.email.message}
//                         </p>
//                     )}
//                 </LabelInputContainer>
//                 <LabelInputContainer className="mb-4">
//                     <Label htmlFor="password">Password</Label>
//                     <Input id="password" placeholder="••••••••" type="password"
//                         {...register('password')}
//                     />
//                     {errors.password && (
//                         <p className="text-red-500 text-xs mt-1">
//                             {errors.password.message}
//                         </p>
//                     )}
//                 </LabelInputContainer>

//                 <button
//                     className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
//                     type="submit"
//                 >
//                     Sign up &rarr;
//                     <BottomGradient />
//                 </button>

//                 <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
//                 <div className="flex flex-col space-y-4">
//                     <button className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//                         onClick={() => signIn('github', { callbackUrl })}>
//                         <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//                         <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//                             GitHub
//                         </span>
//                         <BottomGradient />
//                     </button>
//                     <button className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//                        onClick={() => signIn('google', { callbackUrl })}>
//                         <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//                         <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//                             Google
//                         </span>
//                         <BottomGradient />
//                     </button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// const BottomGradient = () => {
//     return (
//         <>
//             <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//             <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//         </>
//     );
// };

// const LabelInputContainer = ({
//     children,
//     className,
// }: {
//     children: React.ReactNode;
//     className?: string;
// }) => {
//     return (
//         <div className={cn("flex flex-col space-y-2 w-full", className)}>
//             {children}
//         </div>
//     );
// };

export default function SignInPage() {
    return (
        <div>
            <h1>Sign In</h1>
        </div>
    )
}