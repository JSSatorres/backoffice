
import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import Image from 'next/image';




export default function Page() {

  return (
    <main className="flex min-h-screen justify-center p-6 bg-gray-200">

      <div className="mt-4 flex justify-center items-center">
        <div className="h-[500px] flex flex-col justify-center gap-6 rounded-lg bg-white px-6 py-10 md:px-20 items-center">         
          <AcmeLogo />
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bienvenido a backoffice.</strong> 
          </p>         
          <button className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base" >
            Iniciar sesión
          </button>
        </div>
      </div>
    </main>
  );
}
